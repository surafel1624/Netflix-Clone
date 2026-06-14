import React from 'react';
import stayles from './Footer.module.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className={stayles.outerContainer}>
      <div className={stayles.innerContainer}>
        <div className={stayles.icons}>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className={stayles.data}>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preference</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact US</li>
            </ul>
          </div>
        </div>
        <div className={stayles.serviceCode}>
          <p>Service Code</p>
        </div>
        <div className={stayles.copyWrite}>
          &copy; 1997-2026 Netflix, Inc.
        </div>
      </div>
    </div>
  )
}

export default Footer