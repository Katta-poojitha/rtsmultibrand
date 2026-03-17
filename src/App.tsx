import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Intro } from './pages/Intro';
import { Home } from './pages/Home';
import { Service } from './pages/Service';
import { ServiceDetail } from './pages/ServiceDetail';
import { Applications } from './pages/Applications';
import { CallUs } from './pages/CallUs';
import { AnimatePresence, motion } from 'motion/react';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/:type" element={<ServiceDetail />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/call-us" element={<CallUs />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  );
}
