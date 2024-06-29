import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
export const resumeData = {
  name: 'Ayoub Is Coding',
  title: 'Full Stack Developer',
  birthday: '17 / 2 / 1996',
  email: 'ayoub@gmail.com',
  address: 'Zarqa',
  phone: '0788386721',
  socials: {
    Facebook: {
      link: 'https://www.facebook.com',
      text: 'AyoubIsCoding',
      icon: <FacebookIcon />
    },
    Twitter: {
      link: 'https://www.twitter.com',
      text: 'MyTwitter',
      icon: <TwitterIcon />
    },
    LinkedIn: {
      link: 'https://www.linkedin.com',
      text: 'MyLinkedIn',
      icon: <LinkedInIcon />
    },
    GitHub: {
      link: 'https://www.github.com',
      text: 'MyGithub',
      icon: <GitHubIcon />
    }
  }
}