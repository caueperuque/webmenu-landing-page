import './App.css';
import AboutUs from './components/about/AboutUs';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import MenuWeb from './components/menu-web/MenuWeb';

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <AboutUs />
      <MenuWeb />
      <Form />
      <Footer />
    </>
  );
}

export default App;
