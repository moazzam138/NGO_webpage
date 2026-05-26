import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Impact from "../components/Impact";
import Volunteer from "../components/Volunteer";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Impact />
      <Volunteer />
      <Footer />
    </div>
  );
}

export default Home;
