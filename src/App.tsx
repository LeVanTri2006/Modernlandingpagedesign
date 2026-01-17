import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { Discography } from './components/Discography';
import { UpcomingEvents } from './components/UpcomingEvents';
import { BlogNews } from './components/BlogNews';
import { Footer } from './components/Footer';
import './styles/globals.css';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <HeroSection />
        <Discography />
        <UpcomingEvents />
        <BlogNews />
        <Footer />
      </main>
    </div>
  );
}
