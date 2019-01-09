// project_3;

import Head from "next/head";

import Layout from "../components/Layout";
import Slideshow from "../components/Slider";

export default () => (
  <Layout>
    <Head>
      <title>Stringed Clavier</title>
      <meta name="description" content="Stringed Clavier" />
    </Head>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Stringed Clavier</h1>
          </header>
          <h3>1. Idea sketch </h3>
          <Slideshow
            slideImages={[
              "/static/images/sc_1.png",
              "/static/images/sc_19.png",
              "/static/images/sc_2.png",
              "/static/images/sc_4.png",
              "/static/images/sc_5.png",
              "/static/images/sc_3.png",
              "/static/images/sc_17.png",
              "/static/images/sc_18.png"
            ]}
          />

          <h3>2. Prototype </h3>
          <Slideshow
            slideImages={[
              "/static/images/sc_6_1.png",
              "/static/images/sc_6_2.png",
              "/static/images/sc_6_3.png",
              "/static/images/sc_6_4.png",
              "/static/images/sc_6_5.png",
              "/static/images/sc_install.png",
              "/static/images/sc_6_6.png",
              "/static/images/sc_6_7.png",
              "/static/images/sc_6_8.png"
            ]}
          />

          <h3>3. Video interactive design </h3>
          <p>1. Click the box below</p>
          <p>2. Type 'a, s, d, f, g' on your keyboard.</p>
          <p>3. Check a transition of strings on the image and listen to the sound.</p>

          <p>
            <canvas
              id="mycanvas"
              className="size"
              data-processing-sources="/static/images/Stringed_Clavier.pde"
              width="640"
              height="360"
            />
          </p>

          <h3>4. Installation </h3>
          <Slideshow
            slideImages={[
              "/static/images/sc_9_1.png",
              "/static/images/sc_8_1.png",
              "/static/images/sc_10_1.png",
              "/static/images/sc_11_1.png",
              "/static/images/sc_12_1.png",
              "/static/images/sc_13_1.png",
              "/static/images/sc_14_1.png",
              "/static/images/sc_7_1.png",
              "/static/images/sc_15_1.png",
              "/static/images/sc_16_1.png",
              "/static/images/sc_17_1.png",
              "/static/images/sc_18_1.png",
              "/static/images/sc_19_1.png",
              "/static/images/sc_21_1.png"
            ]}
          />

          <h3>5. Final </h3>

          <iframe
            src="https://player.vimeo.com/video/190426294?title=0&byline=0&portrait=0"
            width="640"
            height="360"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen={true}
          />
        </div>
      </section>
    </div>
  </Layout>
);
