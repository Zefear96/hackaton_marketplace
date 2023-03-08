import React from "react";
import "../styles/NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="text-404">
        <h1>404</h1>
        <h3>Not Found</h3>
      </div>
      <img
        src="https://i.pinimg.com/originals/0d/b6/a3/0db6a358aee36dfb6af92adbafc34ad9.jpg"
        alt="error:("
      />
    </div>
  );
};

export default NotFoundPage;
