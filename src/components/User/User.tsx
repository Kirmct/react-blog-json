import { Link } from "react-router-dom";
import buildingOffice from "../../assets/buildingOfiice.svg";
import home from "../../assets/home.svg";

import styles from "./User.module.css";

import { UserType } from "../../types/UserType";
import React from "react";

type Props = {
  user: UserType;
};

const User = ({ user }: Props) => {
  const handleClick = () => {};

  return (
    <div className={`${styles.userCard} moveRight`}>
      <div className={styles.userCardHeader}>
        <h3>@{user.username}</h3>
        <p>{user.name}</p>
      </div>
      <hr />
      <div className={styles.userCardBody}>
        <ul>
          <li>
            <span>
              <img src={buildingOffice} width={18} height={18} /> Company:
            </span>
            {user.company.name}
          </li>
          <li>
            <span>
              <img src={home} width={18} height={18} /> City:
            </span>
            {user.address.city}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default User;
