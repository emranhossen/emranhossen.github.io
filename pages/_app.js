import Layout from "../components/Layout";
import './../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Layout pageTitle="Blog" description="My Personal Blog">
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
