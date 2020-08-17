import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getPost } from "../../action/post";

import CommentItem from './CommentItem'
import CommentForm from "./CommentForm";
import PostItem from "../posts/PostItem";
const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, loading, match.params.id]);
  return loading || post === null ? (
    <h2>Loading...</h2>
  ) : (
    <React.Fragment>
      <Link to="/posts" className="btn">
        Back to posts
      </Link>
      <PostItem post={post} showActions={false} />
      <CommentForm postId={post._id} />
      <div className="comments">
      {post.comments.map(comment => (
        <CommentItem key={comment._id} comment={comment} postId={post._id} />
      )) }

      </div>

    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  post: state.post,
});
export default connect(mapStateToProps, { getPost })(Post);
