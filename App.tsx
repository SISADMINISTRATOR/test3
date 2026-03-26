import TopBar from './components/TopBar';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <TopBar ./>
      <Header ./>
      <Navbar ./>
      <main className="flex-grow">
        <Hero ./>
        <NewsSection ./>
      <./main>
      <Footer ./>
    <./div>
  );
}

export default App;
