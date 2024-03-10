import { useEffect } from "react";
import { ClickableCard } from "../../components/clickable-card/clickable-card.component";
import { PixelList } from "../../components/pixel-list/pixel-list.component";
import "./about.style.css";
import conmarket from "./images/conmarket.jpg";
import elotech from "./images/elotech.jpg";
import sgsistemas from "./images/sgsistemas.jpg";
import stefanini from "./images/stefanini.jpg";
import unavanti from "./images/unavanti.jpg";
import anime from "animejs";

export function About() {
  function resize() {
    const pixelList = document.getElementById("pixel-list");
    const clickableCards = document.getElementsByClassName("clickable-card");
    if (pixelList && clickableCards) {
      for (let i = 0; i < clickableCards.length; i++) {
        (clickableCards.item(i) as HTMLElement).style.height = `${
          pixelList.clientHeight + 1
        }px`;
      }
    }
    const images = document.getElementById("images");
    const imgs = document.getElementsByClassName("image");
    if (images && imgs) {
      for (let i = 0; i < imgs.length; i++) {
        (imgs.item(i) as HTMLElement).style.height = `${
          images.clientHeight - 1
        }px`;
        (imgs.item(i) as HTMLElement).style.left = `${
          images.clientWidth * i
        }px`;
      }
    }
  }

  window.addEventListener("resize", () => {
    resize();
  });

  useEffect(() => {
    resize();
  });

  let scrollPercentage: number = 0;

  function scroll(e: any) {
    const list = document.getElementById("list");
    const listView = document.getElementById("list-view");
    const images = document.getElementById("images");
    const imagesView = document.getElementById("images-view");
    const imgs = document.getElementsByClassName("image");
    const pixel = document.getElementById("pixel");
    const clickableCards = document.getElementsByClassName("clickable-card");
    let offsetCards: number = 0;
    let trackCards: number = 0;
    let offsetImages: number = 0;
    if (list && listView && list.clientHeight < listView.clientHeight) {
      offsetCards =
        (listView.clientHeight - list.clientHeight) / listView.clientHeight;
    }
    if (images && imgs) {
      offsetImages = imgs.length - 1;
    }
    if (list && pixel) {
      trackCards = (list.clientHeight - pixel.clientHeight) / list.clientHeight;
    }
    if (offsetCards > 0 && offsetImages > 0) {
      if (Math.sign(e.deltaY) === 1) {
        scrollPercentage -= 5 / 100;
      } else {
        scrollPercentage += 5 / 100;
      }
      if (scrollPercentage < -1) {
        scrollPercentage = -1;
      }
      if (scrollPercentage >= 0) {
        scrollPercentage = 0;
      }
      // if (listView) {
      //   listView.style.transform = `translate(0%, ${
      //     scrollPercentage * offsetCards * 100
      //   }%)`;
      // }
      anime({
        targets: listView,
        translateY:
          scrollPercentage *
          offsetCards *
          5 *
          clickableCards.item(1)!.clientHeight,
        duration: 200,
        easing: "linear",
      });
      anime({
        targets: imagesView,
        translateX: scrollPercentage * offsetImages * imgs.item(1)!.clientWidth,
        duration: 200,
        easing: "linear",
      });
      anime({
        targets: pixel,
        top: `${scrollPercentage * trackCards * -100}%`,
        duration: 0,
        easing: "linear",
      });
    }
  }

  window.addEventListener("wheel", (e) => {
    scroll(e);
  });

  return (
    <div className="about">
      <div className="about-wrapper">
        <div className="about-label">WORK EXPERIENCE</div>
        <div className="info">
          <div className="column">
            <div id="images" className="images">
              <div id="images-view" className="image-view">
                <img className="image" alt="sgsistemas" src={sgsistemas} />
                <img className="image" alt="elotech" src={elotech} />
                <img className="image" alt="conmarket" src={conmarket} />
                <img className="image" alt="stefanini" src={stefanini} />
                <img className="image" alt="unavanti" src={unavanti} />
              </div>
            </div>
            <div className="buttons">
              <button className="button">{"<"}</button>
              <button className="button" style={{ marginLeft: "min(1vh,1vw)" }}>
                {">"}
              </button>
            </div>
          </div>
          <PixelList>
            <ClickableCard>
              <div className="card-title">
                <div className="card-company">SG Systems</div>
                <div className="tech">Java</div>
                <div className="tech" style={{ marginLeft: "min(1vh,1vw)" }}>
                  React
                </div>
                <div className="tech" style={{ marginLeft: "min(1vh,1vw)" }}>
                  Angular
                </div>
                <div className="tech" style={{ marginLeft: "min(1vh,1vw)" }}>
                  Typescript
                </div>
              </div>
              <div className="card-text">
                I have specialized in the development of products tailored for
                establishment management across web and mobile platforms,
                leveraging a spectrum of technologies ranging from the
                time-tested to the cutting-edge.
              </div>
            </ClickableCard>
            <ClickableCard>
              <div className="card-title">
                <div className="card-company">Elotech</div>
                <div className="tech">Spring Boot</div>
                <div className="tech" style={{ marginLeft: "min(1vh,1vw)" }}>
                  Java
                </div>
                <div className="tech" style={{ marginLeft: "min(1vh,1vw)" }}>
                  Angular
                </div>
                <div className="tech" style={{ marginLeft: "min(1vh,1vw)" }}>
                  Typescript
                </div>
              </div>
              <div className="card-text">
                I have developed functionalities for a public management system,
                focusing specifically on the payroll component, which is
                utilized by municipalities, government agencies, and public
                entities.
              </div>
            </ClickableCard>
            <ClickableCard>
              <div className="card-title">
                <div className="card-company">Conmarket</div>
                <div className="tech">Flutter</div>
                <div className="tech" style={{ marginLeft: "min(1vh,1vw)" }}>
                  Node.js
                </div>
                <div className="tech" style={{ marginLeft: "min(1vh,1vw)" }}>
                  React
                </div>
                <div className="tech" style={{ marginLeft: "min(1vh,1vw)" }}>
                  Typescript
                </div>
              </div>
              <div className="card-text">
                At this startup, I lead the development of both a web and mobile
                application designed for the management of self-checkout
                markets, as well as a mobile application geared towards customer
                discounts.
              </div>
            </ClickableCard>
            <ClickableCard>
              <div className="card-title">
                <div className="card-company">Stefanini</div>
                <div className="tech">Java</div>
                <div className="tech" style={{ marginLeft: "min(1vh,1vw)" }}>
                  React
                </div>
                <div className="tech" style={{ marginLeft: "min(1vh,1vw)" }}>
                  Angular
                </div>
                <div className="tech" style={{ marginLeft: "min(1vh,1vw)" }}>
                  Typescript
                </div>
              </div>
              <div className="card-text">
                I developed web pages as a third-party contractor for Banco do
                Brasil, specifically focusing on the consignment department.
              </div>
            </ClickableCard>
            <ClickableCard>
              <div className="card-title">
                <div className="card-company">Unavanti</div>
                <div className="tech">Nest.js</div>
                <div className="tech" style={{ marginLeft: "min(1vh,1vw)" }}>
                  Java
                </div>
                <div className="tech" style={{ marginLeft: "min(1vh,1vw)" }}>
                  Angular
                </div>
                <div className="tech" style={{ marginLeft: "min(1vh,1vw)" }}>
                  Typescript
                </div>
              </div>
              <div className="card-text">
                I'm currently involved in the development of both an internet
                banking web application and a mobile application for a prominent
                financial institution. This institution primarily targets small
                businesses, offering tailored account services to meet their
                unique needs.
              </div>
            </ClickableCard>
          </PixelList>
        </div>
      </div>
    </div>
  );
}
