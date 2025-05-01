import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs';
import Services from './components/services';
import HowItWorks from './components/HowItWorks';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import SignupForm from './components/signup'
import CreateAccount from './components/CreateAccount';
import BookaFreeConsultation from './components/BookaFreeConslation';
import ExploreServices from './components/ExploreServices';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Homepage />
            <AboutUs />
            <Services />
            <HowItWorks />
            <Blog />
            <ContactUs />
          </>
        } />
        <Route path="/login-form" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/Home" element={<Homepage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/BookfreeFor" element={<BookaFreeConsultation />} />
        <Route path="/explore-services" element={<ExploreServices />} />

      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
