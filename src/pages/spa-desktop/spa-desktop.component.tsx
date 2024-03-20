import "./spa-desktop.style.css";
import Picture from "../..//assets/profile.png";
import { useEffect, useState } from "react";
import { PageEnum } from "../../enums/page.enum";
import { TypingEffect } from "../../components/typing-effect/typing-effect.component";
import { TypedEffect } from "../../components/typed-effect/typed-effect.component";
import ContactForm from "../contact/contact.component";

let id: string = "home";
let blob: any;

export function SPADesktop() {
  const [page, setPage] = useState(PageEnum.HOME);

  function setMarker() {
    const marker = document.getElementById("marker");
    const icon = document.getElementById(id);
    if (marker) {
      marker.style.animationName = "";
      marker.style.top = `${icon?.offsetTop}px`;
      marker.style.left = `${icon?.offsetLeft}px`;
      marker.style.animationName = "marker-fade-in";
      marker.style.backgroundColor = "#52b69a";
      marker.style.animationDuration = "500ms";
      marker.style.animationFillMode = "forwards";
      marker.style.animationDelay = "0ms";
    }
  }

  function createMarker() {
    const marker = document.createElement("div");
    marker.id = "marker";
    marker.style.borderRadius = "min(2.5vh,2.5vw)";
    marker.style.height = "min(5vh,5vw)";
    marker.style.width = "min(5vh,5vw)";
    marker.style.position = "absolute";
    marker.style.zIndex = "-1";
    marker.style.animationName = "marker-fade-in";
    marker.style.animationDelay = "1000ms";
    marker.style.animationDuration = "500ms";
    marker.style.animationFillMode = "forwards";
    const home = document.getElementById("home");
    marker.style.top = `${home?.offsetTop}px`;
    marker.style.left = `${home?.offsetLeft}px`;
    document.getElementById("page-menu")?.appendChild(marker);
  }

  useEffect(() => {
    createMarker();
    blob = document.getElementById("blob");
  }, []);

  window.addEventListener("resize", () => {
    setMarker();
  });

  window.addEventListener("pointermove", (event) => {
    const { clientX, clientY } = event;
    blob?.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 3000, fill: "forwards" }
    );
  });

  return (
    <>
      {" "}
      <div id="blob"></div>
      <div id="blur"></div>
      <div className="page">
        <svg style={{ position: "absolute", zIndex: "-1" }}>
          <defs>
            <filter id="static">
              <feTurbulence
                baseFrequency="0.7,0.8"
                seed="0"
                type="fractalNoise"
                result="static"
              >
                <animate
                  attributeName="seed"
                  values="0;50"
                  dur="2000ms"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap
                in="SourceGraphic"
                in2="static"
                scale="3"
              ></feDisplacementMap>
            </filter>
          </defs>
        </svg>
        <div id="page-menu" className="page-menu faded-box">
          <div className="icon-wrapper">
            <div id="home" className="icon">
              <svg
                viewBox="0 0 576 512"
                onClick={() => {
                  id = "home";
                  setMarker();
                  setPage(PageEnum.HOME);
                }}
              >
                <path
                  fill="currentColor"
                  d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                />
              </svg>
            </div>
          </div>
          <div className="icon-wrapper">
            <div id="skills" className="icon">
              <svg
                viewBox="0 0 576 512"
                onClick={() => {
                  id = "skills";
                  setMarker();
                  setPage(PageEnum.SKILLS);
                }}
              >
                <path
                  fill="currentColor"
                  d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                />
              </svg>
            </div>
          </div>
          <div className="icon-wrapper">
            <div id="work" className="icon">
              <svg
                viewBox="0 0 512 512"
                onClick={() => {
                  id = "work";
                  setMarker();
                  setPage(PageEnum.WORK);
                }}
              >
                <path
                  fill="currentColor"
                  d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"
                />
              </svg>
            </div>
          </div>
          <div className="icon-wrapper">
            <div id="contact" className="icon">
              <svg
                viewBox="0 0 512 512"
                onClick={() => {
                  id = "contact";
                  setMarker();
                  setPage(PageEnum.CONTACT);
                }}
              >
                <path
                  fill="currentColor"
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                />
              </svg>
            </div>
          </div>
        </div>
        {page === PageEnum.HOME && (
          <div className="page-main faded-box">
            <div className="presentation">
              {`Hello, I'm `}
              <span className="info-name">
                <TypingEffect value="Gabriel Kubota" />
              </span>
            </div>
            <div className="subtitle">{`${
              new Date().getFullYear() - 1997 - 1
            } years old ⚙️ mechanical and 💻 software engineer, 🐈 cat lover and introvert who is way too much into 🃏 card games.`}</div>
          </div>
        )}
        {page === PageEnum.SKILLS && (
          <div className="page-main faded-box">
            <div className="presentation">Skills</div>
            <div className="skills">
              <div className="experience">
                <div className="years">{`${
                  new Date().getFullYear() - 2019 - 1
                }+`}</div>
                <div className="years-info">years of experience</div>
              </div>
              <div className="skills-panel">
                <div className="skills-div skills1">
                  <div className="skills-name">Languages</div>
                  <div className="skills-content">
                    <div>Typescript</div>
                    <div>Java</div>
                    <div>Dart(Flutter)</div>
                  </div>
                </div>
                <div className="skills-div skills2">
                  <div className="skills-name">Frameworks</div>
                  <div className="skills-content">
                    <div>React</div>
                    <div>Angular</div>
                    <div>Nest</div>
                    <div>Node</div>
                    <div>Spring Boot</div>
                  </div>
                </div>
                <div className="skills-div skills3">
                  <div className="skills-name">Others</div>
                  <div className="skills-content">
                    <div>Git</div>
                    <div>Docker</div>
                  </div>
                </div>
                <div className="skills-div skills4">
                  <div className="skills-name">Idioms</div>
                  <div className="skills-content">
                    <div>English</div>
                    <div>Portuguese</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {page === PageEnum.WORK && (
          <div className="page-main faded-box">
            <div className="presentation">Work experience</div>
            <div className="content">
              <div className="work-card">
                <div className="work-title">Unavanti Bank</div>
                <div className="work-text">
                  I'm currently developing an internet banking web application
                  and a mobile application for a prominent financial
                  institution. This institution primarily targets small
                  businesses, offering tailored account services to meet their
                  unique needs.
                </div>
                <div className="work-footer">
                  <div className="work-tag">React</div>
                  <div
                    className="work-tag"
                    style={{ marginLeft: "min(1vh,1vw)" }}
                  >
                    Angular
                  </div>
                  <div
                    className="work-tag"
                    style={{ marginLeft: "min(1vh,1vw)" }}
                  >
                    Typecript
                  </div>
                  <div
                    className="work-tag"
                    style={{ marginLeft: "min(1vh,1vw)" }}
                  >
                    Java
                  </div>
                </div>
              </div>
              <div className="work-card">
                <div className="work-title">Stefanini</div>
                <div className="work-text">
                  I developed web pages as a third-party contractor for Banco do
                  Brasil, specifically focusing on the consignment department.
                </div>
                <div className="work-footer">
                  <div className="work-tag">React</div>
                  <div
                    className="work-tag"
                    style={{ marginLeft: "min(1vh,1vw)" }}
                  >
                    Angular
                  </div>
                  <div
                    className="work-tag"
                    style={{ marginLeft: "min(1vh,1vw)" }}
                  >
                    Typecript
                  </div>
                  <div
                    className="work-tag"
                    style={{ marginLeft: "min(1vh,1vw)" }}
                  >
                    Java
                  </div>
                </div>
              </div>
              <div className="work-card">
                <div className="work-title">Conmarket</div>
                <div className="work-text">
                  At this startup, I lead the development of both a web and
                  mobile application designed for the management of
                  self-checkout markets, as well as a mobile application geared
                  towards customer discounts.
                </div>
                <div className="work-footer">
                  <div className="work-tag">React</div>
                  <div
                    className="work-tag"
                    style={{ marginLeft: "min(1vh,1vw)" }}
                  >
                    Node
                  </div>
                  <div
                    className="work-tag"
                    style={{ marginLeft: "min(1vh,1vw)" }}
                  >
                    Typecript
                  </div>
                  <div
                    className="work-tag"
                    style={{ marginLeft: "min(1vh,1vw)" }}
                  >
                    Flutter
                  </div>
                </div>
              </div>
              <div className="work-card">
                <div className="work-title">Elotech</div>
                <div className="work-text">
                  I have developed functionalities for a public management
                  system, focusing specifically on the payroll component, which
                  is utilized by municipalities, government agencies, and public
                  entities.
                </div>
                <div className="work-footer">
                  <div className="work-tag">Angular</div>
                  <div
                    className="work-tag"
                    style={{ marginLeft: "min(1vh,1vw)" }}
                  >
                    Typescript
                  </div>
                  <div
                    className="work-tag"
                    style={{ marginLeft: "min(1vh,1vw)" }}
                  >
                    Java
                  </div>
                  <div
                    className="work-tag"
                    style={{ marginLeft: "min(1vh,1vw)" }}
                  >
                    Spring boot
                  </div>
                </div>
              </div>
              <div className="work-card">
                <div className="work-title">SG Systems</div>
                <div className="work-text">
                  I have specialized in the development of products tailored for
                  establishment management across web and mobile platforms,
                  leveraging a spectrum of technologies ranging from the
                  time-tested to the cutting-edge.
                </div>
                <div className="work-footer">
                  <div className="work-tag">React</div>
                  <div
                    className="work-tag"
                    style={{ marginLeft: "min(1vh,1vw)" }}
                  >
                    Angular
                  </div>
                  <div
                    className="work-tag"
                    style={{ marginLeft: "min(1vh,1vw)" }}
                  >
                    Typecript
                  </div>
                  <div
                    className="work-tag"
                    style={{ marginLeft: "min(1vh,1vw)" }}
                  >
                    Java
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {page === PageEnum.CONTACT && (
          <div className="page-main faded-box">
            <div className="contact">
              <ContactForm />
            </div>
          </div>
        )}
        <div className="page-info faded-box">
          <div className="info-location">
            <div className="location-icon">
              <svg viewBox="0 0 384 512">
                <path
                  fill="currentColor"
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                />
              </svg>
            </div>
            Location: Brazil
          </div>
          <div className="info-text">
            I am a full-stack software engineer, crafting professionally
            exceptional applications since 2019 through innovation and
            collaboration, always improving and learning new technologies.
          </div>
          <div className="info-title">
            <div className="info-grow"></div>
            <div className="icons">
              <div
                className="icon-wrapper"
                onClick={() => {
                  window.open("https://www.linkedin.com/in/gabrielkubota/");
                }}
              >
                <svg viewBox="0 0 448 512">
                  <path
                    fill="currentColor"
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
              </div>
              <div
                className="icon-wrapper"
                onClick={() => {
                  window.open("https://github.com/GabrielHK97");
                }}
              >
                <svg viewBox="0 0 448 512">
                  <path
                    fill="currentColor"
                    d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="page-sections faded-box">
          <div className="page-title">
            <TypedEffect value="GABRIELHK.DEV" />
          </div>
        </div>
        <img src={Picture} id="page-main-image" className="page-main-image" />
      </div>
    </>
  );
}
