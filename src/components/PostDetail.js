import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { TwitterTweetEmbed } from "react-twitter-embed";
import MetaTags from "react-meta-tags";
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

  async componentDidMount() {
    const firestore = firebase.firestore();
    const post = await firestore
      .collection("posts")
      .doc(this.props.match.params.postId)
      .get();
    const postData = post.data();
    this.setState({ post: postData });
    firestore
      .collection("posts")
      .doc(this.props.match.params.postId)
      .set({ hitCounter: (postData.hitCounter || 0) + 1 }, { merge: true });
  }

  getYoutubeWidth() {
    const width = this.youtubeDiv.current.clientWidth;
    if (width > 400) {
      return width * 0.6;
    } else {
      return width;
    }
  }

  async deletePost() {
    try {
      await firebase
        .firestore()
        .collection("posts")
        .doc(this.props.match.params.postId)
        .delete();
      alert(`${this.state.post.title} successfully deleted`);
    } catch (e) {
      alert(`Error ${e.status} - ${e.message}`);
    }
  }

  render() {
    return (
      <div>
        <MetaTags>
          <title>{this.state.post.title}</title>
          <meta name="description" content={this.state.post.title} />
          <meta property="og:title" content={this.state.post.title} />
          <meta property="og:image" content={this.state.post.titlePhoto} />
        </MetaTags>
        <Link to="/">
          <section className="hero is-dark">
            <div className="hero-body" style={{ padding: "15px 7px" }}>
              <div
                style={{ height: "30px", width: "100%" }}
                className="container has-text-centered"
              >
                <h1 style={{ fontSize: "1.5rem" }} className="has-text-white">
                  Ολα τα άρθρα
                </h1>
              </div>
            </div>
          </section>
        </Link>
        <section className="hero is-primary">
          <div className="hero-body" style={{ padding: "30px 15px" }}>
            <div className="container has-text-centered">
              <h3 className="title">{this.state.post.title}</h3>
            </div>
          </div>
        </section>
        <section className="section container">
          <div className="box">
            {this.props.authUser && (
              <>
                <button className="button is-danger" onClick={() => this.deletePost()}>
                  Delete Post
                </button>
                <span style={{ float: "right" }}>
                  views: {this.state.post.hitCounter ? this.state.post.hitCounter : "0"}
                </span>
              </>
            )}
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

const mapStateToProps = state => {
  return {
    authUser: state.authState.authUser
  };
};

export default connect(mapStateToProps)(PostDetail);
