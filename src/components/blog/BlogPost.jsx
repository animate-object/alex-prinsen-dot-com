import React from 'react';
import { connect } from 'react-redux';
import { loadPost } from '../../actions/blogActions';
import ReactMarkdown from 'react-markdown';

const mapDispatchToProps = dispatch => {
    return {
        loadPost: (title) => dispatch(loadPost(title))
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        content: state.post.currentlyLoadedPost,
        title: ownProps.match.params.title
    }
}
class BlogPost extends React.Component {
    constructor (props) {
        super(props);
    }
    componentDidMount() {
        this.props.loadPost(this.props.title);
    }
    render(){
        return (
            <div>
                <ReactMarkdown source={this.props.content} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
