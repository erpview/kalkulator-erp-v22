import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navigation } from './components/Navigation';
import { Calculator } from './pages/Calculator';
import { Implementation } from './pages/Implementation';
import { Cost } from './pages/Cost';
import { Systems } from './pages/Systems';
import { Footer } from './components/Footer';
import { Toaster } from 'react-hot-toast';
import { UsersProvider } from './context/UsersContext';
import { MetaTags } from './components/MetaTags';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <UsersProvider>
        <MetaTags />
        <Toaster position="top-center" />
        <Navigation />
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/wdrozenie-erp" element={<Implementation />} />
          <Route path="/koszt-wdrozenia-erp" element={<Cost />} />
          <Route path="/systemy-erp" element={<Systems />} />
        </Routes>
        <Footer />
      </UsersProvider>
    </HelmetProvider>
  );
};

export default App;