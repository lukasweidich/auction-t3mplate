import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import DefaultSEO from "../components/meta/DefaultSEO";
import "../i18n";
import "../styles/globals.css";

import { Provider } from "react-redux";
import store from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider {...{ store }}>
      <DefaultSEO />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </Provider>
  );
}

export default MyApp;
