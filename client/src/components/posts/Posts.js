import React , { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../action/post';

import PostItem from './PostItem';
import PostForm from './PostForm';
const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
    
  }, [getPosts])
  return loading ? <h2>Loading...</h2> : <React.Fragment>
    <h1 className="large text-primary">Posts</h1>
    
    <p className="lead">
      <i className="fas fa-user"></i> Welcome to the community
    </p>
    <PostForm />
    <div className="posts">
      {posts.map(post => (
        <PostItem key={post._id} post={post} />
      )) }
    </div>
  </React.Fragment>
}
const mapStateToProps = state => ({
  post: state.post
})
export default connect(mapStateToProps, { getPosts })(Posts)