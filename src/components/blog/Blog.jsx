import React from 'react';
import { PostList } from './PostList';
import { connect } from 'react-redux';
import { loadPostList } from '../../actions/blogActions';

const mapDispatchToProps = dispatch => {
    return {
        loadPostList: () => dispatch(loadPostList())        
    }
}

const mapStateToProps = state => {
    return {
        postList: state.posts.listOfPosts
    }
}

class Blog extends React.Component {
    constructor (props) {
        super(props);
    }
    componentDidMount() {
        this.props.loadPostList()
    }
    render() {
        return (
            <div>
                <PostList postList={this.props.postList}/>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
