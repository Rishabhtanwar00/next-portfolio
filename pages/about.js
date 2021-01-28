import Layout from "../components/layout";

const About = () => (
  <Layout title="About">
    <div className="aboutme">
      <img className="profile-image" src="./static/myimage.png" alt="" />
      <h3>It's me</h3>
      <p className="objective">
        I'm a <span>Front-End Developer</span> and pursuing B Tech in GTBIT.
        <br />I have serious passion for UI effects, animations and creating
        intuitive,optimized and dynamic user experiences.
      </p>

      <div className="qualities">
        <div className="quality">
          <div className="hexagon">
            <img
              src="https://img.icons8.com/ios-filled/2x/fast-track.png"
              alt=""
            />
          </div>
          <h3>Fast</h3>
          <p>Fast load times and lag free interaction, my highest priority.</p>
        </div>

        <div className="quality">
          <div className="hexagon">
            <img
              src="https://img.icons8.com/ios-filled/2x/media-queries.png"
              alt=""
            />
          </div>
          <h3>Responsive</h3>
          <p>My layouts will work on any device, big or small.</p>
        </div>

        <div className="quality">
          <div className="hexagon">
            <img src="https://img.icons8.com/ios-filled/2x/easy.png" alt="" />
          </div>
          <h3>Easy</h3>
          <p>My layouts are easy to use and navigate.</p>
        </div>

        <div className="quality">
          <div className="hexagon">
            <img
              src="https://static.thenounproject.com/png/152486-200.png"
              alt=""
            />
          </div>
          <h3>Optimized</h3>
          <p>
            optimized for different devices, browsers, data speed, search
            engines, and users
          </p>
        </div>
      </div>

      <div className="skill-container" id="skill">
        <h1 className="text skill-text">SKILLS</h1>
        <section className="skills">
          <div className="skill">
            <h3 className="skill-type">JAVA</h3>
            <div className="outer-bar">
              <div className="inner-bar inner-bar-70"></div>
            </div>
          </div>
          <div className="skill">
            <h3 className="skill-type">HTML</h3>
            <div className="outer-bar">
              <div className="inner-bar inner-bar-90"></div>
            </div>
          </div>
          <div className="skill">
            <h3 className="skill-type">CSS</h3>
            <div className="outer-bar">
              <div className="inner-bar inner-bar-85"></div>
            </div>
          </div>
          <div className="skill">
            <h3 className="skill-type">JavaScript</h3>
            <div className="outer-bar">
              <div className="inner-bar inner-bar-75"></div>
            </div>
          </div>
          <div className="skill">
            <h3 className="skill-type">PYTHON</h3>
            <div className="outer-bar">
              <div className="inner-bar inner-bar-80"></div>
            </div>
          </div>
          <div className="skill">
            <h3 className="skill-type">REACT</h3>
            <div className="outer-bar">
              <div className="inner-bar inner-bar-70"></div>
            </div>
          </div>
          <div className="skill">
            <h3 className="skill-type">REDUX</h3>
            <div className="outer-bar">
              <div className="inner-bar inner-bar-60"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
    <style jsx>{`
      .aboutme {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 20px;
        width: 100%;
        text-align: center;
      }
      .aboutme .profile-image {
        border-radius: 50%;
        width: 200px;
        height: 200px;
      }
      .aboutme .objective {
        max-width: 60%;
      }
      .qualities {
        margin: 20px 0;
        display: flex;
        align-items: flex-start;
        justify-content: space-around;
        flex-wrap: wrap;
        color: #fff;
        max-width: 100%;
      }
      .quality {
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
      }
      .qualities .quality img {
        height: 80px;
        width: 80px;
      }
      .quality:nth-child(1):hover img {
        animation: shake 2s linear;
        animation-iteration-count: 4;
      }
      .quality:nth-child(2):hover img {
        animation: scaling 2s linear;
        animation-iteration-count: 4;
      }
      .quality:nth-child(3):hover img {
        animation: shakeY 2s linear;
        animation-iteration-count: 4;
      }
      .quality:nth-child(4):hover img {
        animation: rotation 2s linear;
        animation-iteration-count: 2;
      }
      @keyframes shake {
        0% {
          transform: translateX(0px);
        }
        10% {
          transform: translateX(6px);
        }
        20% {
          transform: translateX(0px);
        }
        30% {
          transform: translateX(3px);
        }
        40% {
          transform: translateX(0px);
        }
        50% {
          transform: translateX(0.5px);
        }
        100% {
          transform: translateX(0px);
        }
      }
      @keyframes shakeY {
        0% {
          transform: translateY(0px);
        }
        10% {
          transform: translateY(-4px);
        }
        20% {
          transform: translateY(0px);
        }
        30% {
          transform: translateY(-2px);
        }
        40% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-0.5px);
        }
        100% {
          transform: translateY(0px);
        }
      }
      @keyframes rotation {
        0% {
          transform: rotate(0deg);
        }
        50% {
          transform: rotate(180deg) scale(0.6);
        }
        100% {
          transform: rotate(360deg) scale(1);
        }
      }
      @keyframes scaling {
        0% {
          transform: scale(1);
        }
        25% {
          transform: scale(1.1);
        }
        50% {
          transform: scale(0.8);
        }
        75% {
          transform: scale(1.05);
        }
        100% {
          transform: scale(1);
        }
      }
      .qualities .quality h3 {
        font-weight: normal;
      }
      .qualities .quality p {
        text-align: center;
        max-width: 250px;
      }
      .hexagon {
        position: relative;
        width: 140px;
        height: 66.6px;
        background-color: #02e8e4;
        margin: 43.3px 0;
      }
      .hexagon:before,
      .hexagon:after {
        content: "";
        position: absolute;
        width: 0;
        border-left: 70px solid transparent;
        border-right: 70px solid transparent;
      }
      .hexagon:before {
        bottom: 100%;
        left: 0;
        border-bottom: 43.3px solid #02e8e4;
      }

      .hexagon:after {
        top: 100%;
        right: 0%;
        width: 0;
        border-top: 43.3px solid #02e8e4;
      }
      .hexagon img {
        position: relative;
        left: 0px;
        bottom: 10px;
      }
      .skill-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        padding-bottom: 10px;
      }
      .skills {
        display: flex;
        flex-direction: column;
        align-self: center;
        margin-bottom: 50px;
      }
      .skill {
        margin: 20px 0;
        position: relative;
        width: 80vw;
        display: flex;
        flex-direction: column;
        align-self: flex-start;
        justify-content: center;
      }
      .skill-type {
        color: #fff;
        font-weight: 300;
        font-size: 19px;
        letter-spacing: 1px;
        text-transform: uppercase;
        width: 80vw;
      }
      .outer-bar,
      .inner-bar {
        height: 15px;
        border-radius: 10px;
      }
      .outer-bar {
        margin-top: 20px;
        background: #333;
      }
      .inner-bar {
        animation: fillBar 1s forwards 0s;
        transform: scaleX(0);
        transform-origin: 0 0;
      }
      .inner-bar span {
        position: absolute;
        right: 0%;
        // top: -3px;
        font-weight: 900;
        text-align: end;
        margin-left: 3px;
        opacity: 0;
        animation: opacity 0.05s forwards linear;
        animation-delay: 1s;
      }
      @keyframes opacity {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      .inner-bar-90 {
        width: 90%;
        background: #f8a518;
        color: #f8a518;
      }
      .inner-bar-85 {
        width: 80%;
        background: rgb(3, 152, 238);
        color: rgb(3, 152, 238);
      }
      .inner-bar-75 {
        width: 75%;
        background: rgb(202, 3, 186);
        color: rgb(202, 3, 186);
      }
      .inner-bar-80 {
        width: 80%;
        background: rgb(120, 2, 238);
        color: rgb(120, 2, 238);
      }
      .inner-bar-60 {
        width: 60%;
        background: rgb(226, 211, 0);
        color: rgb(226, 211, 0);
      }
      .inner-bar-70 {
        width: 70%;
        background: rgb(22, 175, 2);
        color: rgb(22, 175, 2);
      }

      @keyframes fillBar {
        to {
          transform: scaleX(1);
        }
      }
    `}</style>
  </Layout>
);

export default About;
