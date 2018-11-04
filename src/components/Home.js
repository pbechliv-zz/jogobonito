import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import firebase from "../firebase";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      youtubeWidth: 400
    };
    this.youtubeDiv = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.posts !== this.state.posts && this.state.posts.length > 0) {
      this.setState({ youtubeWidth: this.getYoutubeWidth() });
    }
  }

  componentDidMount() {
    const firestore = firebase.firestore();
    this.unsubscribe = firestore
      .collection("posts")
      .orderBy("createdAt", "asc")
      .onSnapshot(ref => {
        console.log(ref.docs);
        const data = ref.docs.map(snap => snap.data());
        this.setState({ posts: data });
      });
    console.log(this.youtubeDiv.current);
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
              <h3 className="title">Τελευταία άρθρα</h3>
            </div>
          </div>
        </section>
        {this.state.posts.length > 0 ? (
          this.state.posts.map((post, index1) => (
            <section key={`post-${index1}`} className="section container">
              <div className="box">
                <div className="content has-text-centered">
                  <img src={post.titlePhoto} alt="Δεν βρέθηκε η εικόνα..." width="800" />
                  <h3 className="title">{post.title}</h3>
                  <hr />
                  {post.sections.map((section, index2) => {
                    switch (section.type) {
                      case "text":
                        return (
                          <>
                            <div
                              key={`postsection-${index1}-${index2}`}
                              dangerouslySetInnerHTML={{ __html: section.value }}
                            />
                            <hr />
                          </>
                        );
                      case "twitter":
                        return (
                          <div key={`postsection-${index1}-${index2}`}>
                            <TwitterTweetEmbed
                              key={`postsection-${index1}-${index2}`}
                              tweetId={section.value}
                              options={{ align: "center" }}
                            />
                            <hr />
                          </div>
                        );
                      case "youtube":
                        return (
                          <div ref={this.youtubeDiv} key={`postsection-${index1}-${index2}`}>
                            <iframe
                              title={`postsection-${index1}-${index2}`}
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
                          <>
                            <img
                              key={`postsection-${index1}-${index2}`}
                              src={section.value}
                              alt="Δεν βρέθηκε η εικόνα..."
                              width="600"
                            />
                            <hr />
                          </>
                        );
                      default:
                        return null;
                    }
                  })}
                </div>
              </div>
            </section>
          ))
        ) : (
          <p>Δεν υπάρχουν άρθρα αυτή τη στιγμή...</p>
        )}
      </div>
    );
  }
}

export default Home;
