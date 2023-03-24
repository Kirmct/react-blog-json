import styles from "./UserModal.module.css";

import At from "../../assets/at.svg";
import buildingOffice from "../../assets/buildingOfiice.svg";
import home from "../../assets/home.svg";
import phone from "../../assets/phone.svg";
import website from "../../assets/website.svg";

import { UserType } from "../../types/UserType";

type Props = {
  user: UserType;
};

const UserModal = ({ user }: Props) => {
  return (
    <div className={`${styles.userCard} moveDown`}>
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
              <img src={At} width={16} height={16} />
              Mail:
            </span>
            {user.email}
          </li>
          <li className={styles.detailsItem}>
            <span className={styles.detailsHeader}>
              <img src={home} width={18} height={18} /> City:
              <p>{user.address.city}</p>
            </span>
            <div className={styles.detailsBody}>
              <div>
                <span>
                  Street: <p> {user.address.street}</p>
                </span>
              </div>
              <div>
                <span>
                  Suite: <p> {user.address.suite}</p>
                </span>
              </div>

              <div>
                <span>
                  Zipcode:<p> {user.address.zipcode}</p>
                </span>
              </div>
            </div>
          </li>

          <li>
            <span>
              <img src={phone} width={18} height={18} /> Phone:
            </span>
            {user.phone}
          </li>

          <li>
            <span>
              <img src={website} width={18} height={18} /> Website:
            </span>
            {user.website}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserModal;
