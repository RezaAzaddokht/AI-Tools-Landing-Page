import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div style={{ zoom: 0.75 }} className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;