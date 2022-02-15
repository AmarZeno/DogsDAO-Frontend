import { Navbar } from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <footer>
        <p>© Dogs Dao 2022</p>
      </footer>
    </div>
  );
}

export default MyApp;
