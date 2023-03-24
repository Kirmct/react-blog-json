import styles from "./Comment.module.css";
import { CommentType } from "../../types/CommentsType";

type Props = {
  comment: CommentType;
};
const Comment = ({ comment }: Props) => {
  return (
    <div className={styles.commentCard}>
      <div className={styles.commentCardHeader}>
        <h5>{comment.email}</h5>
      </div>
      <div className={styles.commentCardBody}>
        <h5 className={styles.commentTitle}>{comment.name}</h5>
        <p className={styles.commentBody}>{comment.body}.</p>
      </div>
      <hr />
    </div>
  );
};

export default Comment;
