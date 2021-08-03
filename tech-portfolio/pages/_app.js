import "../styles/globals.scss";
import LayoutComp from "../components/Layout/LayoutComp";
import "../styles/asidebar.scss";
import HeightProvider from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <HeightProvider>
      <LayoutComp>
        <Component {...pageProps} />
      </LayoutComp>
    </HeightProvider>
  );
}

export default MyApp;
