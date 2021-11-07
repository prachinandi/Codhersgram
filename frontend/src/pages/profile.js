import React from "react";
import "../style/profile.css";
import Profile from "../asset/profilePic.jpg";
import Project from "../asset/project.jpg";
import { Link } from "react-router-dom";

function profiles(){
    return(

    <div className="Main"> 
     <div className="profileMain">
        
         <div className="left">
         <h1>Codhersgram</h1>   
         <div className="pro" style={{ backgroundImage: `url(${Profile})`,} }> </div>
         <div className="info">
         <h2>Pratyusha</h2>
         <h3>Senior SDE at Google <br/> </h3>
         <h3>10k <br/><h4>Followers</h4></h3>
         </div>
        <Link to="/">
          <button> Follow </button>
        </Link>
        <Link to="/">
          <button> Chat </button>
        </Link>
         
         </div>
         <div className="Right">
             <h1>Projects</h1>
             <div className="items">
                 <div className="columns">
                  <div claaName="rows">
                     <div className="card">   
                     <img className="cardImg" src={Project} alt="projects"  />
                     Have a look on the project
                     </div>   
                     </div>
                 </div>

                 <div claaName="rows">
                     <div className="card">   
                     <img className="cardImg" src={Project} alt="projects"  />
                     Have a look on the project
                     </div>   
                     </div>
                 

                 <div claaName="rows">
                     <div className="card">   
                     <img className="cardImg" src={Project} alt="projects"  />
                     Have a look on the project
                     </div>   
                     </div>
                 
                 <div className="columns"></div>
             </div>
         </div>
         
     </div>
     </div>   
    );
}
export default profiles;