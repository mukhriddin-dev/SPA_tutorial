import React from "react";

const List = ({ data }) => {
  const { avatar, last_name, first_name, email } = data;
  return (
    <>
      <li>
        <div className="card w-25 p-3 mx-auto mt-5">
          <img src={avatar} alt={first_name} className="card-img" />
          <div className="card-body">
            <h2 className="card-title">
              {" "}
              {first_name} {last_name}{" "}
            </h2>
            <p>{email}</p>
          </div>
        </div>
      </li>
    </>
  );
};

export default List;
