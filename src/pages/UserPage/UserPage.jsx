import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersThunk } from "../../reducers/usersReducers";
import UserCard from "../../Components/UserCard/UserCard";
import { changePageAC } from "../../reducers/usersReducers";
import "./userPage.css";

function UserPage() {
  const [portionNumber, setPortionNumber] = useState(1);
  const {
    users,
    currentPage,
    totalUsersCount,
    totalUsersPageCount,
    isFetching,
  } = useSelector((state) => state.initState);
  const dispatch = useDispatch();

  const leftPortionSize = (portionNumber - 1) * 10 + 1;
  const rightPortionSize = portionNumber * 10;

  useEffect(() => {
    dispatch(getUsersThunk(currentPage));
  }, [currentPage]);

  const btnCount = Math.ceil(totalUsersCount / totalUsersPageCount);
  const endButton = Math.ceil(btnCount / 10);
  console.log(endButton, "Next Btn");
  console.log(portionNumber, "State");

  const buttons = [];
  for (let i = 1; i <= btnCount; i++) {
    buttons.push(i);
  }

  console.log(buttons);

  const changePage = (pageChanger) => {
    dispatch(changePageAC(pageChanger));
  };

  return (
    <div>
      <div className="pagination">
        {portionNumber > 1 && (
          <button onClick={() => setPortionNumber(portionNumber - 1)}>
            Prev
          </button>
        )}
        {buttons
          .filter((page) => page >= leftPortionSize && page <= rightPortionSize)
          .map((page) => {
            return (
              <button
                className={page === currentPage ? "active-page" : ""}
                onClick={() => changePage(page)}
                key={page}
              >
                {page}
              </button>
            );
          })}
        {endButton > portionNumber && (
          <button onClick={() => setPortionNumber(portionNumber + 1)}>
            Next
          </button>
        )}
      </div>
      <div className="users">
        {isFetching
          ? Array(10)
              .fill(0)
              .map((_, i) => <UserCard key={i} isLoading={true} />)
          : users?.map((elem) => {
              return <UserCard key={elem.id} user={elem} />;
            })}
      </div>
    </div>
  );
}

export default UserPage;
