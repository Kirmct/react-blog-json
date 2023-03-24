import { useState } from "react";
import FeedModal from "../components/Feed/FeedModal";
import FeedPost from "../components/Feed/FeedPost";
import { PostType } from "../types/PostType";
import { UserType } from "../types/UserType";

const Home = () => {
  //states criados para perceber o click no card e abrir o modal
  const [modalPost, setModalPost] = useState<PostType | null>(null);
  const [userPost, setUserPost] = useState<UserType | null>(null);

  return (
    <>
      <div className={`container mainContainer `}>
        {modalPost && userPost && (
          <FeedModal
            post={modalPost}
            user={userPost}
            setModalPost={setModalPost}
          />
        )}
        <FeedPost setModalPost={setModalPost} setUserPost={setUserPost} />
      </div>
    </>
  );
};

export default Home;
