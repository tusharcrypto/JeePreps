import React from 'react';
import topic from '../Assets/EleventhTopicList.js';
import TopicCard from './TopicCard.jsx';
import image from '../Assets/phy11.png';
import './subjectwiseTopic.css'
const SubjectWiseTopic = (props) => {
  const { subject } = props;

  // Check if the subject is valid and the topic object contains the expected structure
  if (!subject || !topic[subject] || !topic[subject].chapters) {
    return <p>No chapters found for the selected subject</p>;
  }

  return (
    <div>

      <div className="subject-class">
        <div className="class-11">
          <p className='w-100 mt-8 bg-purple-300 rounded' >Chapters Of :{subject}</p>
          {topic[subject].chapters.map((item, i) => (
        <TopicCard key={i} title={item.name} image={image} />
      ))}
        </div>
      </div>
    


      
    </div>
  );
};

export default SubjectWiseTopic;
