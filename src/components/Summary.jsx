import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGithub, faHtml5, faJs, faLinkedin, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';

const Summary = () => {
  return (
    <div className='flex p-40 justify-around'>
      <div className='flex-col'>
        <h1 className="text-7xl text-center py-2">Software Engineer 👨‍💻</h1>
        <h1 className="text-2xl text-center py-2">
              I am a junior-level Fullstack Engineer looking <br /> to excel and become an asset to a 
            company that is <br/> fast-paced giving opportunity for growth.
        </h1>
        <div className='flex justify-center py-2'>
          <Link to='https://github.com/Cal9233' className='mx-2'>
            <FontAwesomeIcon icon={faGithub} className="fa-brands fa-github fa-2xl"/> 
          </Link>
          <Link to='https://www.linkedin.com/in/calmalagon/' className='mx-2'>
            <FontAwesomeIcon icon={faLinkedin} className="fa-brands fa-linkedin fa-2xl"/>
          </Link>
        </div>
        <div className='flex py-10 justify-evenly'>
          <h1 className='text-lg font-bold'>Tech Stack</h1>
          <p className='text-lg'>|</p>
          <FontAwesomeIcon color='lightblue' icon={faReact} className="fa-brands fa-react fa-2xl"/>
          <p className='text-lg'>|</p>
          <FontAwesomeIcon color='yellow' icon={faJs} className="fa-brands fa-js fa-2xl bg-black"/>
          <p className='text-lg'>|</p>
          <FontAwesomeIcon color='orange' icon={faHtml5} className="fa-brands fa-html2 fa-2xl"/>
          <p className='text-lg'>|</p>
          <FontAwesomeIcon color='blue' icon={faCss3} className="fa-brands fa-css3 fa-2xl"/>
          <p className='text-lg'>|</p>
          <FontAwesomeIcon color='green' icon={faNodeJs} className="fa-brands fa-nodejs fa-2xl"/>
        </div>
      </div>
      <div className='flex-col'>
        <img id='blob' />
      </div>
    </div>
  )
}

export default Summary