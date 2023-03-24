import { useEffect, useState } from "react";
import styles from "./FeedPost.module.css";

import { PostType } from "../../types/PostType";
import { api } from "../../api";
import Loading from "../../helpers/Loading";
import FeedPostItem from "./FeedPostItem";
import { UserType } from "../../types/UserType";

type Props = {
  setModalPost: React.Dispatch<any>;
  setUserPost: React.Dispatch<any>;
};

const FeedPost = ({ setModalPost, setUserPost }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);

  const [posts, setPosts] = useState<PostType[]>([]);
  const [users, setUsers] = useState<UserType[]>([]);

  const [search, setSearch] = useState("");

  const searchLowerCase = search.toLowerCase();

  const searchpost = posts.filter((post) =>
    post.title.toLowerCase().includes(searchLowerCase)
  );

  useEffect(() => {
    loadPosts();
    loadUser();
  }, []);

  const loadPosts = async () => {
    try {
      setLoading(true);
      const jsonPosts = await api.getPost();
      setPosts(jsonPosts);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    } catch (e) {
      console.log(`Error ${e}`);
    }
  };
  const loadUser = async () => {
    try {
      const jsonUser = await api.getUsers();
      setUsers(jsonUser);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <label htmlFor="search" style={{ display: "none" }}>
        Search by title
      </label>
      <input
        name="search"
        className={`${styles.searchInput}`}
        placeholder="Title search..."
        type="search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {loading && <Loading />}
      {!loading && (
        <ul className={`${styles.feed} `}>
          {searchpost.map((item) => (
            <FeedPostItem
              post={item}
              user={users[item.userId - 1]}
              key={item.id}
              setModalPost={setModalPost}
              setUserPost={setUserPost}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedPost;
