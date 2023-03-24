import React, { useEffect, useState } from "react";
import { api } from "../../api";
import Loading from "../../helpers/Loading";
import { CommentType } from "../../types/CommentsType";
import { PostType } from "../../types/PostType";
import { UserType } from "../../types/UserType";
import styles from "./FeedModal.module.css";
import Comment from "../Comment/Comment";
import { Link } from "react-router-dom";

type Props = {
  post: PostType;
  user: UserType;
  setModalPost: React.Dispatch<any>;
};

const FeedModal = ({ post, user, setModalPost }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    loadComments(post.id.toString());
  }, []);

  const loadComments = async (id: string) => {
    try {
      setLoading(true);
      const jsonComments = await api.getComments(id);
      setComments(jsonComments);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    } catch (e) {
      console.log(e);
    }
  };

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      setModalPost(false);
    }
  };

  const handleLeaveClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setModalPost(false);
  };

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div className={styles.modal} onClick={handleOutsideClick}>
          {post && user && (
            <div className={styles.post}>
              <div className={styles.btnLeave} onClick={handleLeaveClick}>
                X
              </div>
              <div className={styles.postContent}>
                <div className={styles.postTitle}>
                  <div>
                    <Link to={`/react-blog-json/users/${post.userId}`}>
                      <h2>@{user.username}</h2>
                    </Link>
                    <h5>{user.name}</h5>
                  </div>
                  <p>#{post.id}</p>
                </div>
                <div className={styles.postBody}>
                  <h3>{post.title} </h3>
                  <p>{post.body}</p>
                </div>
              </div>

              <div className={styles.postComments}>
                <h3 className={styles.postCommentsTitle}>Comments:</h3>
                <div className={styles.postCommentsBody}>
                  {comments.map((item) => (
                    <Comment key={item.id} comment={item} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FeedModal;
