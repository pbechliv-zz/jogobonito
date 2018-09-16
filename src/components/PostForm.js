import React from "react";

class PostForm extends React.Component {
  render() {
    return (
      <form>
        <div className="field">
          <label className="label">Τίτλος</label>
          <div className="control">
            <input className="input" type="text" placeholder="Ο τίτλος του άρθρου εδώ..." />
          </div>
        </div>
      </form>
    );
  }
}

export default PostForm;
