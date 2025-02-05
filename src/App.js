import React from 'react';
import Sidebar from '../src/Sidebar/Sidebar';
import Header from '../src/Header/Header';
import Footer from '../src/Footer/Footer';
import Corpo from './Main/Main';

const App = () => {
  return (
    <>
      <Sidebar />
      <Header />
      <Corpo />
      <Footer />
    </>
  );
};

export default App;
