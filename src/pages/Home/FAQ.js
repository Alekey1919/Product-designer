import React from "react";
import "./FAQ.css";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

function FAQ() {
  useEffect(() => {
    document.body.style.overflow = "auto";
  });

  return (
    <div className="faq-container">
      <h1 className="title">Frequent Asked Questions</h1>
      <ul className="list-container">
        <li className="list-item">
          <h2>Question 1</h2>
          <p>
            Some answer that will actually provide useful information for the
            readers. Just ignore my content, my job is just to occupy some space
            and make you think that this is something meaningful. Ok, stop
            reading me, you're making me nervous. Go do something important,
            like checking the responsivity of the site or something. Anyway,
            have a nice day. I ♥ u.
          </p>
        </li>
        <li className="list-item">
          <h2>Question 2</h2>
          <p>
            Some answer that will actually provide useful information for the
            readers. Just ignore my content, my job is just to occupy some space
            and make you think that this is something meaningful. Ok, stop
            reading me, you're making me nervous. Go do something important,
            like checking the responsivity of the site or something. Anyway,
            have a nice day. I ♥ u.
          </p>
        </li>
        <li className="list-item">
          <h2>Question 3</h2>
          <p>
            Some answer that will actually provide useful information for the
            readers. Just ignore my content, my job is just to occupy some space
            and make you think that this is something meaningful. Ok, stop
            reading me, you're making me nervous. Go do something important,
            like checking the responsivity of the site or something. Anyway,
            have a nice day. I ♥ u.
          </p>
        </li>
        <li className="list-item">
          <h2>Question 4</h2>
          <p>
            Some answer that will actually provide useful information for the
            readers. Just ignore my content, my job is just to occupy some space
            and make you think that this is something meaningful. Ok, stop
            reading me, you're making me nervous. Go do something important,
            like checking the responsivity of the site or something. Anyway,
            have a nice day. I ♥ u.
          </p>
        </li>
        <li className="list-item">
          <h2>Question 5</h2>
          <p>
            Some answer that will actually provide useful information for the
            readers. Just ignore my content, my job is just to occupy some space
            and make you think that this is something meaningful. Ok, stop
            reading me, you're making me nervous. Go do something important,
            like checking the responsivity of the site or something. Anyway,
            have a nice day. I ♥ u.
          </p>
        </li>
        <li className="list-item">
          <h2>Question 6</h2>
          <p>
            Some answer that will actually provide useful information for the
            readers. Just ignore my content, my job is just to occupy some space
            and make you think that this is something meaningful. Ok, stop
            reading me, you're making me nervous. Go do something important,
            like checking the responsivity of the site or something. Anyway,
            have a nice day. I ♥ u.
          </p>
        </li>
        <li className="list-item">
          <h2>Question 7</h2>
          <p>
            Some answer that will actually provide useful information for the
            readers. Just ignore my content, my job is just to occupy some space
            and make you think that this is something meaningful. Ok, stop
            reading me, you're making me nervous. Go do something important,
            like checking the responsivity of the site or something. Anyway,
            have a nice day. I ♥ u.
          </p>
        </li>
        <li className="list-item">
          <h2>Question 8</h2>
          <p>
            Some answer that will actually provide useful information for the
            readers. Just ignore my content, my job is just to occupy some space
            and make you think that this is something meaningful. Ok, stop
            reading me, you're making me nervous. Go do something important,
            like checking the responsivity of the site or something. Anyway,
            have a nice day. I ♥ u.
          </p>
        </li>
      </ul>
      <div className="button-wrapper">
        <NavLink className="nav-link" to="/" exact>
          <button className="btn-back">
            <i class="fas fa-angle-left"></i>
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default FAQ;
