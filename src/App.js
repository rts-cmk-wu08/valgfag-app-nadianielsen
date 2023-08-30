import React from 'react';
import './App.css';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';

function App() {

  const location = useLocation()

  return (
    <>
    <AnimatePresence mode='popLayout'>
    <motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{
      type: "tween",
      duration: 0.20
  }} >
    <Header />
     <main className=''>
        <Outlet />
      </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
    </>
  );
}

export default App;
