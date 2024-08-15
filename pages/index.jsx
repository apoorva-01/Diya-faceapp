// Import dependencies
import React, { useRef, useEffect } from "react";
import Head from 'next/head'
import Layout from '../Layout/Layout'
import VideoComponent from '../components/VideoComponent'

function App() {
  


  return (
    <>
      <Layout>
      <Head>
        <title> Project</title>
        <meta name="description" content=" Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="App">
        <header className="App-header">
          <VideoComponent/>
   
        </header>
      </div>

      </Layout>

    </>
  );
}

export default App;
