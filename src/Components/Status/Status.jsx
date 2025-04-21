import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeStatusThunk } from "../../reducers/profileReducer";

function Status({ userStatus, setEdit }) {
  const dispatch = useDispatch();
  const [myStatus, setMyStatus] = useState(userStatus);
  const end = () => {
    setEdit(false);
    dispatch(changeStatusThunk(myStatus, localStorage.getItem("userId")));
  };
  return (
    <div>
      <input
        value={myStatus}
        onBlur={end}
        onChange={(e) => setMyStatus(e.target.value)}
      />
    </div>
  );
}

export default Status;
