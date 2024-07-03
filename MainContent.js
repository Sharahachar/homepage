// src/components/MainContent.js
import React from 'react';
import './MainContent.css';
import img1 from "./S.jpg" ;
import img2 from "./profile.png";

const MainContent = () => {
  return (
    <main>
     <div className="home-page">
      <div className="logo-container">
        <img src={img1} alt=" Logo"className='logo' />
      </div>
            <div className="profile-container">
               <div className="profile">
                  <img src={img2} alt="profile " />
                  <h2 >Profile</h2>
               </div>
           </div>
     </div>
     <div className='lower'>
        <div >
          <button className="buttons">search by employee name</button>
        </div>
        <div >
        <button className="buttons">search by Team/Project</button>
         </div>
       </div>
    </main>
  );
}
export default MainContent;
