import React from "react";
import "./Title.css";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <>
      <Link to="/">
        <header className="title">야옹이 게시판</header>
      </Link>
    </>
  );
};

export default Title;
