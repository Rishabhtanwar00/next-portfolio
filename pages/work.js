import Layout from "../components/layout";
import Link from "next/link";

const Work = () => (
  <Layout title="Projects" className="work-container">
    <div className="projects">
      <div className="project">
        <img
          className="projectimage"
          src="https://image.freepik.com/free-vector/blood-donation-isometric-illustration-donor-hand-with-red-drop-injured-persons-blue_1284-28491.jpg"
          alt=""
        />
        <div className="content">
          <h3 className="title">RH+ Web App</h3>
          <h3 className="technology">Technology used:</h3>
          <p className="description">
            React, css, Python , Django, RESTful APIs,PostgreSQL etc.
          </p>
          <Link>
            <a href="https://rhpositive.herokuapp.com">
              <button className="viewbutton button">View</button>
            </a>
          </Link>
        </div>
      </div>
      <div className="project">
        <img
          className="projectimage"
          src="https://cdn.searchenginejournal.com/wp-content/uploads/2020/08/how-to-dominate-ecommerce-this-year-featured-5f4d42d979559-1520x800.png"
          alt=""
        />
        <div className="content">
          <h3 className="title">An E-commerce Website</h3>
          <h3 className="technology">Technology used:</h3>
          <p className="description">
            Html,Sass, React, Redux, Firebase, Stripe etc.
          </p>
          <Link>
            <a href="https://royal-clothing-livee.herokuapp.com/">
              <button className="viewbutton button">View</button>
            </a>
          </Link>
        </div>
      </div>
      <div className="project">
        <img
          className="projectimage"
          src="https://image.freepik.com/free-vector/list-new-normal-post-pandemic-concept-businessman-holding-pencil-writing-check-list-virus-pathogen_212586-82.jpg"
          alt=""
        />
        <div className="content">
          <h3 className="title">A To-do-list Web App</h3>
          <h3 className="technology">Technology used:</h3>
          <p className="description">
            Html, Css, JavaScript, Session Storage etc.
          </p>
          <Link>
            <a href="https://letsgetitdone.netlify.app/">
              <button className="viewbutton button">View</button>
            </a>
          </Link>
        </div>
      </div>
      <div className="project">
        <img
          className="projectimage"
          src="https://image.freepik.com/free-vector/programmer-working-with-man-desk-office_23-2148284689.jpg"
          alt=""
        />
        <div className="content">
          <h3 className="title">A freelancer website template</h3>
          <h3 className="technology">Technology used:</h3>
          <p className="description">
            Html,Css,Bootstrap,JavaScript, Wow.js,Google Maps API etc.
          </p>
          <Link>
            <a href="https://webmagic.netlify.app/">
              <button className="viewbutton button">View</button>
            </a>
          </Link>
        </div>
      </div>

      <div className="project">
        <img
          className="projectimage"
          src="https://aca.edu.au/resources/number-games-algorithm/dt_home_number_games_algorithm.jpg"
          alt=""
        />
        <div className="content">
          <h3 className="title">Speak Number guessing Game</h3>
          <h3 className="technology">Technology used:</h3>
          <p className="description">
            Html, Css, JavaScript, Speech Recognition API etc.
          </p>
          <Link>
            <a href="https://rishabhtanwar00.github.io/SpeakNumberGuessingGame/">
              <button className="viewbutton button">View</button>
            </a>
          </Link>
        </div>
      </div>
      <div className="project">
        <img
          className="projectimage"
          src="https://image.freepik.com/free-vector/vector-illustration-kid-listening-musi_29937-21.jpg"
          alt=""
        />
        <div className="content">
          <h3 className="title">Lyrics finder project</h3>
          <h3 className="technology">Technology used:</h3>
          <p className="description">
            Html, Css, JavaScript, Lyrics.ovh API etc.
          </p>
          <Link>
            <a href="https://rishabhtanwar00.github.io/SearchLyricsHere/">
              <button className="viewbutton button">View</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
    <div className="blog-container" id="blog">
      <h1 className="contact-text">BLOGS</h1>
      <div className="blogs">
        <div className="blog">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h2>Node.js and it's popularity</h2>
            <p>
              Node.js is an open-source JavaScript runtime environment which
              uses V8 JavaScript engine...
            </p>
            <Link>
              <a
                href="https://medium.com/@rishabhtanwar2000/what-is-node-js-and-why-it-is-so-popular-e094b82294f"
                className="btn"
              >
                see blog
              </a>
            </Link>
          </div>
        </div>
        <div className="blog">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h2>Python and it's powerful libraries</h2>
            <p>
              I think there is no one who did not hear the term Python in tech
              field. As python is the fastest growing...
            </p>
            <Link>
              <a
                href="https://medium.com/@rishabhtanwar2000/python-and-its-powerful-libraries-fc13890b0aaf"
                className="btn"
              >
                see blog
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .projects {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        align-items: center;
        justify-content: center;
        grid-gap: 10px;
        color: #ffffff;
        margin: 0px;
        width: 100%;
        padding: 20px;
      }
      .project {
        box-sizing: border-box;
        height: 300px;
        width: 430px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
        box-shadow: 4px 2px;
        box-shadow: 6px -6px 5px rgba(0, 0, 0, 1),
          -6px -6px 5px rgba(0, 0, 0, 0.1);
        position: relative;
        transition: border-radius 1s ease-out;
        z-index: 1;
        margin: 20px 0 0 20px;
      }
      .project:nth-child(2) {
        box-shadow: -6px 6px 5px rgb(0, 0, 0);
      }
      .project:nth-child(4) {
        box-shadow: -6px 6px 5px rgb(0, 0, 0);
      }
      .project:nth-child(6) {
        box-shadow: -6px 6px 5px rgb(0, 0, 0);
      }
      .project:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0%;
        background-color: rgba(255, 255, 255, 0.5);
        transition: all 0.3s;
        border-radius: 0px;
        z-index: -1;
      }

      .project:hover::before {
        height: 100%;
      }
      .project:nth-child(1):hover {
        border-radius: 200% 200% 200% 00%/ 200% 200% 200% 200%;
        box-shadow: inset -6px -6px 0px rgba(0, 0, 0, 1),
          inset -6px 6px 0px rgba(0, 0, 0, 0.5);
      }
      .project:nth-child(2):hover {
        border-radius: 200% 200% 200% 200%/ 200% 200% 200% 200%;
        box-shadow: inset -6px -6px 0px rgba(0, 0, 0, 1),
          inset 6px -6px 0px rgba(0, 0, 0, 0.5);
      }
      .project:nth-child(3):hover {
        border-radius: 200% 200% 00% 200%/ 200% 200% 200% 200%;
        box-shadow: inset 6px -6px 0px rgba(0, 0, 0, 1),
          inset 6px 6px 0px rgba(0, 0, 0, 0.5);
      }
      .project:nth-child(4):hover {
        border-radius: 200% 200% 200% 00%/ 200% 200% 200% 200%;
        box-shadow: inset -6px -6px 0px rgba(0, 0, 0, 1),
          inset -6px 6px 0px rgba(0, 0, 0, 0.5);
      }
      .project:nth-child(5):hover {
        border-radius: 200% 200% 200% 200%/ 200% 200% 200% 200%;
        box-shadow: inset -6px -6px 0px rgba(0, 0, 0, 1),
          inset 6px -6px 0px rgba(0, 0, 0, 0.5);
      }
      .project:nth-child(6):hover {
        border-radius: 200% 200% 00% 200%/ 200% 200% 200% 200%;
        box-shadow: inset 6px -6px 0px rgba(0, 0, 0, 1),
          inset 6px 6px 0px rgba(0, 0, 0, 0.5);
      }
      .projectimage {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        height: 100%;
        width: 100%;
        opacity: 1;
        transition: all 250ms linear 0.2s;
      }
      .project:hover.project .projectimage {
        opacity: 0;
      }
      .project:hover.project .content {
        opacity: 1;
      }

      .project .content {
        color: #000;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        top: -280px;
        opacity: 0;
        padding: 20px;
        transition: opacity 250ms ease-in;
      }
      .project .content .title {
        font-size: 25px;
        padding: 0px 20px 20px 20px;
        max-width: 340px;
        text-align: center;
        font-weight: 600px;
      }
      .project .content .technology {
        padding: 3px 5px;
        margin-top: -30px;
      }
      .project .content .description {
        font-size: 18px;
        padding-bottom: 5px;
        max-width: 350px;
        text-align: center;
        margin-top: -15px;
      }
      .project .content button {
        padding: 15px 20px;
        font-size: 18px;
        background-color: rgba(255, 8, 0, 0.794);
        color: white;
        outline: none;
        border: none;
        transition: 0.3s ease-in;
        cursor: pointer;
      }
      .project .content button:active {
        transform: scale(0.8);
        transition: 0.3s all ease-in-out;
      }
      .blog-container {
        padding: 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .blogs {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
        grid-gap: 40px;
        align-items: center;
        justify-content: center;
        max-width: 100%;
        margin: 20px 0;
      }
      .blog {
        width: 500px;
        height: 350px;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        border-radius: 10px;
        background-color: transparent;
        box-shadow: inset 4px 4px rgba(0, 0, 0, 1);
      }
      .blog span {
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        transition: all 1s;
        border-radius: 5px;
      }
      .blog:nth-child(1) span {
        background-image: url("../static/nodejs.png");
      }
      .blog:nth-child(2) span {
        background-image: url("../static/pythoncover1.png");
      }
      .blog span:nth-child(1) {
        width: 25%;
        z-index: 6;
        transition-delay: 0s;
      }
      .blog span:nth-child(2) {
        width: 50%;
        z-index: 5;
        transition-delay: 0.2s;
      }
      .blog span:nth-child(3) {
        width: 75%;
        z-index: 4;
        transition-delay: 0.4s;
      }
      .blog span:nth-child(4) {
        width: 100%;
        z-index: 3;
        transition-delay: 0.6s;
      }
      .blog:hover span {
        transform: translateY(-103%);
      }
      .blog:hover span:nth-child(1) {
        transition-delay: 0.6s;
      }
      .blog:hover span:nth-child(2) {
        transition-delay: 0.4s;
      }
      .blog:hover span:nth-child(3) {
        transition-delay: 0.2s;
      }
      .blog:hover span:nth-child(4) {
        transition-delay: 0s;
      }
      .blog .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 0 30px;
        text-transform: uppercase;
        text-align: center;
        transform: translateY(100%);
        transition: all 1s linear 0.3s;
        color: #fff;
      }
      .blog .content p {
        margin: 20px 0 30px;
        color: #fff;
      }
      .blog .content a {
        text-decoration: none;
        color: #fff;
        padding: 10px 20px;
        border: 3px solid #fff;
        transition: all 0.3s ease-in;
        font-weight: bolder;
      }
      .blog .content a:active {
        transform: scale(0.8);
        transition: 0.3s all ease-in-out;
      }
      .blog .content a:hover {
        color: #fff;
        background: #000;
        transition: all 0.3s ease-in;
      }
      .blog:hover .content {
        transform: translateY(0);
      }
    `}</style>
  </Layout>
);
export default Work;
