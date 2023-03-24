import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../api";
import User from "../components/User/User";
import UserModal from "../components/User/UserModal";
import Loading from "../helpers/Loading";
import { UserType } from "../types/UserType";

const UserDetail = () => {
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUsers] = useState<UserType>();

  useEffect(() => {
    if (params.id) {
      loadUsers(params.id);
    }
  }, []);

  const loadUsers = async (id: string) => {
    try {
      setLoading(true);
      const jsonUser = await api.getUserDetail(id);
      setUsers(jsonUser);
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
      {!loading && user && <UserModal user={user} />}
    </div>
  );
};

export default UserDetail;
