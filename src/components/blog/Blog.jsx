import React from 'react';
import { PostList } from './PostList';
import BlogPost from './BlogPost';
import { connect } from 'react-redux';
import { loadPostList } from '../../actions/blogActions';
import { Route, Switch } from 'react-router';

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
                <p> blog </p>
                <Switch>
                    <Route path='/blog/:title'
                        component={BlogPost}
                    />
                    <Route exact path='/blog'
                        component={
                            () => {
                                return <PostList 
                                    postList={this.props.postList}/>
                            }
                        }
                    />
                </Switch>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
