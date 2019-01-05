import Link from "next/link";

import Layout from "../components/Layout";
import Banner from "../components/Banner";

export default () => (
  <Layout>
    <div>
      <Banner />

      <div id="main">
        <section id="one" className="tiles">
          <article
            style={{
              backgroundImage: `url('/static/images/stringedClavier.jpg')`
            }}
          >
            <header className="major">
              <h3>Stringed Clavier</h3>
              <p>Ipsum dolor sit amet</p>
            </header>
            <Link href="/stringedClavier">
              <a className="link primary" />
            </Link>
          </article>
          <article
            style={{
              backgroundImage: `url('/static/images/theShapeOfSound.gif')`
            }}
          >
            <header className="major">
              <h3>The Shape Of Sound</h3>
              <p>feugiat amet tempus</p>
            </header>
            <Link href="/project_6">
              <a className="link primary" />
            </Link>
          </article>
          <article
            style={{
              backgroundImage: `url('/static/images/interactiveVideo2.png')`
            }}
          >
            <header className="major">
              <h3>Interactive Music Video 3D</h3>
              <p>Lorem etiam nullam</p>
            </header>
            <Link href="/project_7">
              <a className="link primary" />
            </Link>
          </article>
          <article
            style={{
              backgroundImage: `url('/static/images/shoutOutLoud.png')`
            }}
          >
            <header className="major">
              <h3>Shout Out Loud</h3>
              <p>Nisl sed aliquam</p>
            </header>
            <Link href="/project_8">
              <a className="link primary" />
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/aori.png')` }}
          >
            <header className="major">
              <h3>Aori Apple</h3>
              <p>Ipsum dolor sit amet</p>
            </header>
            <Link href="/project_c1">
              <a className="link primary" />
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/speech.png')` }}
          >
            <header className="major">
              <h3>From Voice to Text</h3>
              <p>Feugiat amet tempus</p>
            </header>
            <Link href="/project_c2">
              <a className="link primary" />
            </Link>
          </article>

          <article
            style={{
              backgroundImage: `url('/static/images/interactiveMusicVideo.gif')`
            }}
          >
            <header className="major">
              <h3>Interactive Music Video 2D</h3>
              <p>Feugiat amet tempus</p>
            </header>
            <Link href="/project_4">
              <a className="link primary" />
            </Link>
          </article>
          <article
            style={{
              backgroundImage: `url('/static/images/imagoTubaCanerent.png')`
            }}
          >
            <header className="major">
              <h3>Imago Tuba Canerent</h3>
              <p>Feugiat amet tempus</p>
            </header>
            <Link href="/project_2">
              <a className="link primary" />
            </Link>
          </article>
          <article
            style={{
              backgroundImage: `url('/static/images/alphabetKeyboard.gif')`
            }}
          >
            <header className="major">
              <h3>Alphabet Keyboard</h3>
              <p>Feugiat amet tempus</p>
            </header>
            <Link href="/project_5">
              <a className="link primary" />
            </Link>
          </article>
          <article
            style={{
              backgroundImage: `url('/static/images/theShapeOfWhistle.jpeg')`
            }}
          >
            <header className="major">
              <h3>The Shape Of Whistle</h3>
              <p>Feugiat amet tempus</p>
            </header>
            <Link href="/project_1">
              <a className="link primary" />
            </Link>
          </article>
          <article
            style={{ backgroundImage: `url('/static/images/drawing.png')` }}
          >
            <header className="major">
              <h3>Drawing</h3>
              <p>Feugiat amet tempus</p>
            </header>
            <Link href="/art">
              <a className="link primary" />
            </Link>
          </article>
        </section>
        <section id="two" />
      </div>
    </div>
  </Layout>
);
