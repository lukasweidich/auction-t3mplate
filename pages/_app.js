import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import DefaultSEO from "../components/meta/DefaultSEO";
import "../i18n";
import "../styles/globals.css";
import "../node_modules/antd/dist/antd.css";
import "../node_modules/flag-icon-css/css/flag-icon.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";

import { Provider } from "react-redux";
import store from "../store";

import { Container } from "react-bootstrap";

function MyApp({ Component, pageProps }) {
  return (
    <Provider {...{ store }}>
      <DefaultSEO />
      <Header />
      <main>
        <Container>
          <Component {...pageProps} />
        </Container>
      </main>
      <Footer />
    </Provider>
  );
}

export default MyApp;
