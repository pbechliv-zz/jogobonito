import React from "react";
import firebase from "../firebase";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
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
  }

  componentWillUnmount() {
    this.unsubscribe();
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
                  {post.sections.map((section, index2) => {
                    switch (section.type) {
                      case "text":
                      case "embed":
                        return (
                          <div
                            key={`postsection-${index1}-${index2}`}
                            dangerouslySetInnerHTML={{ __html: section.value }}
                          />
                        );
                      case "image":
                        return (
                          <img
                            key={`postsection-${index1}-${index2}`}
                            src={section.value}
                            alt="Δεν βρέθηκε η εικόνα..."
                            width="600"
                          />
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
