import { AppContext, useAuth } from '../lib/UserContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const authState = useAuth();
  return (
    <AppContext.Provider value={authState} >
      <div>
        <Component {...pageProps} />
        <footer>
          <p>© Dogs Dao 2022</p>
        </footer>
      </div>
    </AppContext.Provider>
  );
}

export default MyApp;
