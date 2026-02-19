import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Statistics from './components/Statistics';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <About />
        <Services />
        <Statistics />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
