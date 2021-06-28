import '../styles/globals.scss';
import LayoutComp from '../components/Layout/LayoutComp'



function MyApp({ Component, pageProps }) {
  return (
    <LayoutComp>
      <Component {...pageProps} />
    </LayoutComp>
  );
}

export default MyApp
