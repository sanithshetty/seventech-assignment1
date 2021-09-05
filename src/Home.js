import React from 'react';

const Home = (props) => {
    var today = new Date();
    // var hrs = myDate.getHours();

    const submitHandler = (event) => {
      event.preventDefault();
      props.onLogout();
    };

    var day;

    if (today.getHours() < 12)
      { day = 'Good Morning'; }
    else if (today.getHours() <= 16)
      { day = 'Good Afternoon'; }
    else
      { day = 'Good Evening'; }
    const user = localStorage.getItem("username");
  return (
    <div>
      <div className="shadow p-3 mb-5 rounded">
        <h4>{day} {user}</h4>
        <button className="btn btn-secondary" onClick={submitHandler}>Logout</button>
      </div>
    </div>
  );
};

export default Home;