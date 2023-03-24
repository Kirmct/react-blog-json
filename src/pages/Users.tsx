import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { api } from "../api";
import User from "../components/User/User";
import Loading from "../helpers/Loading";
import { UserType } from "../types/UserType";

const Users = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const jsonUsers = await api.getUsers();
      setUsers(jsonUsers);
      setTimeout(() => {
        setLoading(false);
      }, 300);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container mainContainer">
      {loading && <Loading />}
      {!loading &&
        users.map((item) => (
          <Link to={`/users/${item.id}`} key={item.id}>
            <User key={item.id} user={item} />
          </Link>
        ))}
    </div>
  );
};

export default Users;
