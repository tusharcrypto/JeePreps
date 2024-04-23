import React from 'react'
import logo from '../Assets/logo2.png'
import profile from '../Assets/diversity.png'
const ProfileAndSubject = () => {
  
  const student_name="Tushar"
  return (
    <div>
      {/* profile-section */}
      <div className="flex  flex-row relative bg-slate-200 ">
        <img src={logo}className='w-64 h-40'></img>  
        <div className="student-info  flex flex-row absolute top-10 right-16  ">
          <img src={profile} className='w-38 h-20 border border-black px-4 py-3 rounded '></img>
          <ul>
            <li>Candidate Name:{student_name}</li>
            <li>Subject Name:{student_name}</li>
            <li>Remaining Time:{student_name}</li>
          </ul>
        </div>
      </div>
        {/* subject-choose */}
        <div className='subject-choose w-90 mx-4 my-3 bg-orange-300 flex flex-row text-white text-2xl rounded '>
          <p className=' abosulte left-4 px-3 py-2 my-2 mr-24 ml-8   '>JEE MAIN</p>
          <p className='bg-blue-500 px-3 py-2 my-2 mr-4 rounded '  >PHYSICS</p>
          <p className='bg-blue-500 px-3 py-2 my-2 mr-4 rounded '>MATHEMATICS</p>
          <p className='bg-blue-500 px-3 py-2 my-2 mr-4 rounded '>CHEMISTRY</p>
        </div>
    </div>
  )
}

export default ProfileAndSubject
