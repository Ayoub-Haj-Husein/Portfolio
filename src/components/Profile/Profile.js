import { Typography } from '@mui/material'
import React from 'react'
import './Profile.css' 
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline'
import { resumeData }  from '../../utils/ResumeData'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CustomButton from '../Button/Button' 
import GetAppIcon from '@mui/icons-material/GetApp';

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className='timeline_content'>
      {link ? (
        <Typography className='timelineItem_text'>
          <span>{ title }:</span>{ " " }
          <a href={ link } target='_blank' rel="noreferrer">
            { text }
          </a>
        </Typography>
      ) : (
        <Typography className='timelineItem_text'>
          <span>{ title }:</span> { text }
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
)

const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className="profile_name">
        <Typography className='name'>{ resumeData.name }</Typography>
        <Typography className='title'>{ resumeData.title }</Typography>
      </div>

      <figure className='profile_image'>
        <img src={require('../../assets/images/me.png')} alt="" />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={ <PersonOutlineOutlinedIcon /> }>
          <CustomTimelineItem title='Name' text={ resumeData.name }/>
          <CustomTimelineItem title='Title' text={ resumeData.title }/>
          <CustomTimelineItem title='Email' text={ resumeData.email }/>
          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem title={key} text={ resumeData.socials[key].text} link={ resumeData.socials[key].link } />
          ))}
        </CustomTimeline>
        <br />
        <div className="btn_container">
          <CustomButton text={"Download Cv"} icon={ <GetAppIcon /> }/>
        </div>
      </div>
    </div>
  )
}

export default Profile