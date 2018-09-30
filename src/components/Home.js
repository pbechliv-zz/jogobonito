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
            <div className="container">
              <h3 className="title">Τελευταία άρθρα</h3>
              {/* <h2 className="subtitle">
              A simple container to divide your page into <strong>sections</strong>, like the one
              you're currently reading
            </h2> */}
            </div>
          </div>
        </section>
        {this.state.posts.map((post, index) => (
          <section key={`post-${index}`} className="section">
            <div className="container">
              {post.sections.map((section, index) => {
                switch (section.type) {
                  case "text" || "embed":
                    return <div dangerouslySetInnerHTML={{ __html: section.value }} />;
                  case "image":
                    return (
                      <figure className="image">
                        <img src={section.value} alt="Δεν βρέθηκε η εικόνα..." />
                      </figure>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          </section>
        ))}
      </div>
    );
  }
}

export default Home;
