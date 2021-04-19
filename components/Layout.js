import Head from "next/head";
import Header from "./Header";

export default function Layout({ children, pageTitle, description }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          font-size: 1rem;
        }
        
        a {
          color: #ddd;
        }
        .content {
          max-width: 600px;
          margin: 2rem auto;
          padding: 0 1rem;
        }
      `}</style>
      <main>
        <Header />
        <div className="content">{children}</div>
      </main>
    </>
  );
}
