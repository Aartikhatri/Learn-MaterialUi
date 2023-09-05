
import './App.css';
import Navbar from './component/Navbar';

// setting theme
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { Container } from '@mui/material';

import HeroComponent from './component/HeroComponent'
import CakeSection from './component/CakeSection';
import ContactUS from './component/ContactUS';

const theme = createTheme({
    palette: {
        primary: {
            main: "#CF8691"  ,
        },
        secondary: {
            main: green[500],
        },
    },
});


function App() {
  return (
    <>
      <ThemeProvider theme={theme} >
        <Navbar />
        <Container >
          <HeroComponent />
          <CakeSection />
          <ContactUS />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
