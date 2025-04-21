import React, { useEffect } from "react";
import "./UserCard.css";
import userImg from "../../assets/smallUser.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";
import "./UserCard.css"

function UserCard({ user }) {

  const serverRequest = (id) => {
    instance.post(`/follow/${id}`)
    .then((res)=> console.log(res))
  }
  return (
    <div className="user">
      <NavLink to={`/profile/${user?.id}`}>
        <h2 className="h2_user">{user?.name ? user?.name : <Skeleton />}</h2>
      </NavLink>
      <img
        className="smallImg"
        src={user?.photos?.large === null ? userImg : user?.photos?.large}
      />
      <button className="follow_btn" onClick={() => serverRequest(user?.id)}>Follow</button>
    </div>
  );
}

export default UserCard;
