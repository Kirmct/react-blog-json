import React, { useEffect, useState } from "react";
import styles from "./FeedPostItem.module.css";

import Comment from "../Comment/Comment";

import { PostType } from "../../types/PostType";
import { UserType } from "../../types/UserType";
import { Link, useParams } from "react-router-dom";
import { api } from "../../api";
import { CommentType } from "../../types/CommentsType";

type Props = {
  post: PostType;
  user: UserType;
  setModalPost: React.Dispatch<any>;
  setUserPost: React.Dispatch<any>;
};

const FeedPostItem = ({ post, user, setModalPost, setUserPost }: Props) => {
  const params = useParams();

  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    if (params.id) {
      loadComments(post.id.toString());
    }
  }, []);

  const loadComments = async (id: string) => {
    try {
      const jsonComments = await api.getComments(id);
      setComments(jsonComments);
      console.log(comments);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = () => {
    setModalPost(post);
    setUserPost(user);
  };

  return (
    <li className={`${styles.cardContainer} moveRight`} onClick={handleClick}>
      <div className={styles.cardHeader}>
        <div className={styles.cardHeaderInfo}>
          <Link to={`/react-blog-json/users/${user.id}`}>
            <h3>@{user?.username}</h3>
          </Link>
          <p>{user.name}</p>
        </div>
        <p className={styles.cardHeaderInfoPost}>#{post.id}</p>
      </div>
      <hr />
      <div className={styles.cardBody}>
        <h3>{post.title}</h3>
        <p>{post.body}.</p>
      </div>
    </li>
  );
};

export default FeedPostItem;
