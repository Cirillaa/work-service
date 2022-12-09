import React from 'react';

import classes from './About.module.css';
import first from '../../../assets/1.jpg';
import second from '../../../assets/handshake.jpg';
import third from '../../../assets/third.jpg'


const About = () => {
 return (
   <section id='about'>
     <div className={classes.about}>
       <div>
         <h2 className={classes.title}>Our main features</h2>
       </div>
       <div className={classes.aboutText}>
         We offer you the fastest way to find a part-time or full-time job on
         the C2C principle. Our service is good for:
         <ul className={classes.list}>
           <li>students</li>
           <li>teenagers</li>
           <li>moms on maternity leave</li>
           <li>people looking for a second job</li>
         </ul>
       </div>
     </div>
     <div className={classes.features}>
       <div className={classes.first}>
         <p className={classes.number}>01</p>
         <h4 className={classes.featuresTitle}>
           Verified employers and vacancies
         </h4>
         <p className={classes.featuresText}>
           Vacancies are checked by our experts to ensure your safety. Leave
           feedback on employers to improve our work.
         </p>
         <img src={first} alt="girl with computer"></img>
       </div>
       <div className={classes.second}>
         <p className={classes.number}>02</p>
         <h4 className={classes.featuresTitle}>
           Submit your candidacy or leave a vacancy
         </h4>
         <p className={classes.featuresText}>
           You can add your candidacy for job search on the "applicants" tab.
           You can also add your vacancy to search for workers.
         </p>
         <img src={second} alt="handshake"></img>
       </div>
       <div className={classes.third}>
         <p className={classes.number}>03</p>
         <h4 className={classes.featuresTitle}>
           Choose according to your needs
         </h4>
         <p className={classes.featuresText}>
           Select vacancies according to your criteria. Remote, for students,
           for seekers with disabilities - its on you.
         </p>
         <img src={third} alt="computer"></img>
       </div>
     </div>
   </section>
 );
}

export default About;