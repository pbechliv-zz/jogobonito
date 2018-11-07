import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import firebase from "../firebase";

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        title: "",
        titlePhoto: "",
        sections: []
      },
      youtubeWidth: 400
    };
    this.youtubeDiv = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.post !== this.state.post && this.youtubeDiv.current) {
      this.setState({ youtubeWidth: this.getYoutubeWidth() });
    }
  }

  componentDidMount() {
    const firestore = firebase.firestore();
    this.unsubscribe = firestore
      .collection("posts")
      .doc(this.props.match.params.postId)
      .onSnapshot(ref => {
        console.log(ref.data());
        // const data = ref.
        this.setState({ post: ref.data() });
      });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  getYoutubeWidth() {
    const width = this.youtubeDiv.current.clientWidth;
    console.log(width);
    if (width > 400) {
      return width * 0.6;
    } else {
      return width;
    }
  }

  render() {
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h3 className="title">{this.state.post.title}</h3>
            </div>
          </div>
        </section>
        <section className="section container">
          <div className="box">
            <div className="content">
              <div className="has-text-centered">
                <img src={this.state.post.titlePhoto} alt="Δεν βρέθηκε η εικόνα..." width="800" />
              </div>
              <hr />
              {this.state.post.sections.map((section, index) => {
                switch (section.type) {
                  case "text":
                    return (
                      <div key={`postsection-${index}`}>
                        <div dangerouslySetInnerHTML={{ __html: section.value }} />
                        <hr />
                      </div>
                    );
                  case "twitter":
                    return (
                      <div className="has-text-centered" key={`postsection-${index}`}>
                        <TwitterTweetEmbed tweetId={section.value} options={{ align: "center" }} />
                        <hr />
                      </div>
                    );
                  case "youtube":
                    return (
                      <div
                        className="has-text-centered"
                        ref={this.youtubeDiv}
                        key={`postsection-${index}`}
                      >
                        <iframe
                          title={`postsection-${index}`}
                          width={this.state.youtubeWidth}
                          height={0.5625 * this.state.youtubeWidth}
                          src={`https://www.youtube.com/embed/${section.value}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    );
                  case "image":
                    return (
                      <div key={`postsection-${index}`} className="has-text-centered">
                        <img src={section.value} alt="Δεν βρέθηκε η εικόνα..." width="600" />
                        <hr />
                      </div>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PostDetail;
