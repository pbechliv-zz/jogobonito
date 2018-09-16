import React from "react";
import Select from "react-select";
import { tags } from "../tags2";
import _ from "lodash";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredTags: [],
      mainTags: [],
      mainTagsValues: [],
      subTagsOptions: [],
      subTags: [],
      subTagsValues: [],
      subSubTagsOptions: [],
      subSubTags: [],
      subSubTagsValues: []
    };
  }

  handleMainTagChange(value) {
    let subTagsOptions = value.map(tag => tag.subTags).flat();
    subTagsOptions = _.uniqBy(subTagsOptions, "value");
    const mainTagsValues = value.map(tag => tag.value);
    this.setState({ mainTags: value, mainTagsValues, subTagsOptions });
  }

  handleSubTagChange(value) {
    let subSubTagsOptions = value.map(tag => tag.subTags).flat();
    subSubTagsOptions = _.uniqBy(subSubTagsOptions, "value");
    const subTagsValues = value.map(tag => tag.value);
    this.setState({ subTags: value, subTagsValues, subSubTagsOptions });
  }

  handleSubSubTagChange(value) {
    const subSubTagsValues = value.map(tag => tag.value);
    this.setState({ subSubTags: value, subSubTagsValues });
  }

  render() {
    console.log(this.state);
    return (
      <form>
        <div className="field">
          <label className="label">Τίτλος</label>
          <div className="control">
            <input className="input" type="text" placeholder="Ο τίτλος του άρθρου εδώ..." />
          </div>
        </div>
        <div className="field">
          <label className="label">tags</label>
          <div className="control">
            <Select isMulti options={tags} onChange={value => this.handleMainTagChange(value)} />
          </div>
        </div>
        {this.state.subTagsOptions.length > 0 && (
          <div className="field">
            <label className="label">sub - tags</label>
            <div className="control">
              <Select
                isMulti
                options={this.state.subTagsOptions}
                onChange={value => this.handleSubTagChange(value)}
              />
            </div>
          </div>
        )}
        {this.state.subSubTagsOptions.length > 0 && (
          <div className="field">
            <label className="label">sub - sub - tags</label>
            <div className="control">
              <Select
                isMulti
                options={this.state.subSubTagsOptions}
                onChange={value => this.handleSubSubTagChange(value)}
              />
            </div>
          </div>
        )}
      </form>
    );
  }
}

export default PostForm;
