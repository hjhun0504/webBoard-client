import React from "react";
import { Link } from "react-router-dom";

const WriteButton = () => {
  return (
    <div>
      <Link to="/write">
        <button className="button button--blue">글쓰기</button>
      </Link>
    </div>
  );
};

export default WriteButton;
