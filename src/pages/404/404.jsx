import React from "react";
import "./404.css";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className='not-found'>
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to={"/"} className='back-home'>
        Go back home
      </Link>
    </div>
  );
}

export default NotFoundPage;
