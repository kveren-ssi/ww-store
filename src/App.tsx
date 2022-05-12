// Modules
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

// Components
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

// CSS
import './App.css';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />

      <Container maxWidth="lg">
        <Header />
        <Main />
        <Footer />
      </Container>

    </React.Fragment>
  );
}

export default App;
