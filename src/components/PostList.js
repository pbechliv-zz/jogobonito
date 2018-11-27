import React from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase";

class PostList extends React.Component {
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
      .orderBy("createdAt", "desc")
      .onSnapshot(ref => {
        const data = ref.docs.map(snap => ({ id: snap.id, ...snap.data() }));
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
          <div className="hero-body"  style={{ padding: "15px 7px" }}>
            <div className="container has-text-centered">
              <h3 className="title">Τελευταία άρθρα</h3>
            </div>
          </div>
        </section>
        {this.state.posts.length > 0 ? (
          this.state.posts.map((post, index1) => (
            <section key={`post-${index1}`} className="section container">
              <div className="box">
                <div className="content">
                  <div className="has-text-centered">
                    <img
                      src={post.titlePhoto}
                      style={{ maxHeight: "250px" }}
                      alt="Δεν βρέθηκε η εικόνα..."
                    />
                    <Link to={`/${post.id}`}>
                      <h3 className="title">{post.title}</h3>
                    </Link>
                  </div>
                  <hr />
                  <div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          post.sections
                            .find(section => section.type === "text")
                            .value.substring(0, 400) + "...</p>"
                      }}
                    />
                    <Link to={`/${post.id}`}>Διαβάστε το άρθρο</Link>
                    <hr />
                  </div>
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

export default PostList;
