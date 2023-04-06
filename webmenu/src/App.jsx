import './App.css';
import AboutUs from './components/about/AboutUs';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <AboutUs />
      <Form />
      <Footer />
    </>
  );
}

export default App;
