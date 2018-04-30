import React from 'react';
import { connect } from 'react-redux';
import { loadPost } from '../../actions/blogActions';


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
                <h1>{this.props.title}</h1>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPost);
