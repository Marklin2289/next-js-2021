import Layout from "../components/Layout";
import "../styles/globals.css";

// you can add layout components such as nav bar

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
