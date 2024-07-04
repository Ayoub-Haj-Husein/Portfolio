import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useLocation } from 'react-router-dom';
import { HomeRounded, Telegram } from '@mui/icons-material';
import { resumeData } from '../../utils/ResumeData';
import CustomButton from '../Button/Button';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <Navbar expand="lg" sticky='top' className="header">
      {/* Home Links */}
      <Nav.Link as={NavLink} to='/' className='header_navlink'>
        <Navbar.Brand className='header_home'>
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className='header_left'>
          {/* Resume Link */}
          <Nav.Link as={NavLink} to='/' className={pathName === '/' ? 'header_link_active' : 'header_link'}>Resume</Nav.Link>
          {/* Portfolio Link */}
          <Nav.Link as={NavLink} to='/portfolio' className={pathName === '/portfolio' ? 'header_link_active' : 'header_link'}>Portfolio</Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a key={key} href={resumeData.socials[key].link} target='_blank' rel='noreferrer'>{resumeData.socials[key].icon}</a>
          ))}
          <CustomButton text='Hire Me' icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
