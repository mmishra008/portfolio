import React from 'react';
import './BorderBox.css';

const BorderBox = () => {
  return (
    <div className="container">
      <div class="work1">
        <div className="box">
          <h1>XAPOTECH SYSTEMS</h1>
          <p>
            Resolving problem of data backup and data filter using Java, Spring
            Boot, SQL.
            <p>Issue resolved using Trigger and refining filter methods</p>
            Resulting application saved altered data and filter working fine.
            <p>Team size - 4</p>
          </p>
        </div>
      </div>
      <div class="work2">
        <div className="box">
          <h1>XAPOTECH SYSTEMS</h1>
          <p>
            Design and develop a product catalogue website
            <p>
              Customer can visit, register themselves, browse products, search
              products, view product details
            </p>
            <p>
              Tech used JavaScript, React JS, MongoDB and provide authentication
              using JWT
              <p>Team size - 3</p>
            </p>
          </p>
        </div>
      </div>
      <div class="work3">
        <div className="box">
          <h1>XAPOTECH SYSTEMS</h1>
          <p>
            Design and develop e-commerce websites
            <p>
              Using high-performance JavaScript, React JS, Node JS MongoDB and
              secure with JWT authentication.
            </p>
            <p>Team size - 3</p>
          </p>
        </div>
      </div>
      <div class="work3">
        <div className="box">
          <h1>XAPOTECH SYSTEMS</h1>
          <p>
            Currently working on - designing a 'bot' for client, that can fetch
            answers from database for predefined questions
            <p>Using MERN with Redis</p>
            <p>Team size - 4</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BorderBox;
