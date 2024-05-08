import React, { useState } from 'react';
import './topicCard.css';
import { useAuth } from '../Utility/AuthContexProvider';
import SimpleQuestion from './SimpleQuestion'; // Import the SimpleQuestion component

const TopicCard = (props) => {
  const { isLoggedIn } = useAuth();
    const[look,setlook] = useState();
  const handlebt = (e) => {
    e.preventDefault();
    // console.log("clicked")
    setlook(true)
    // if (isLoggedIn) {
    //   console.log("clicked")
    //   return <SimpleQuestion />;
    // } else {
  
    //   console.log('User is not logged in');
    // }
  };

  return (
    <div className="sub-card">
      <img src={props.image} alt="topic" />
      <h4 id="top">{props.title}</h4>
      <button onClick={handlebt}>Solve Now</button>
    </div>
  );
};

export default TopicCard;
