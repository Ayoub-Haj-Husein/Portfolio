import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Portfolio from './pages/Portfolio/Portfolio'
import Resume from './pages/Resume/Resume.js'
import Footer from './components/Footer/Footer.js'
import Container from '@mui/material/Container';
import './App.css';
import { Grid } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Container>
      <Grid container>
        <Grid 
          item 
          xs={12} 
          sm={12} 
          md={4} 
          lg={3}>
          <Profile />
        </Grid>
        <Grid item xs style={{'backgroundColor': 'red'}}>
          <Header />
          <Router>
            <Routes>
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/' element={<Resume />} />
            </Routes>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
