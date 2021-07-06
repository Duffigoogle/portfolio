import '../styles/globals.scss';
import LayoutComp from '../components/Layout/LayoutComp'
import '../styles/asidebar.scss';


function MyApp({ Component, pageProps }) {
  return (
     <LayoutComp>
        <Component {...pageProps} />
    </LayoutComp>
  );
}

export default MyApp
