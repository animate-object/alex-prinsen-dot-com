import React from "react";
import { connect } from "react-redux";
import { loadPost } from "../actions";
import ReactMarkdown from "react-markdown";
import "./BlogPost.css";

const mapDispatchToProps = dispatch => {
  return {
    loadPost: title => dispatch(loadPost(title))
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    content: state.blog.currentlyLoadedPost,
    contentIsLoading: state.blog.isFetching,
    title: ownProps.match.params.title
  };
};
class BlogPost extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.loadPost(this.props.title);
  }
  render() {
    return (
      <div className="blog-post-container">
        <div
          className={
            "blog-post-content " + (this.props.contentIsLoading && "is-loading")
          }
        >
          <ReactMarkdown source={this.props.content} />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPost);
