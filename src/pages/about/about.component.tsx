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
        (
          clickableCards.item(i) as HTMLElement
        ).style.height = `${pixelList.clientHeight}px`;
      }
    }
    const images = document.getElementById("images");
    const imgs = document.getElementsByClassName("image");
    if (images && imgs) {
      for (let i = 0; i < imgs.length; i++) {
        (imgs.item(i) as HTMLElement).style.height = `${images.clientHeight}px`;
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
      if (listView) {
        listView.style.transform = `translate(0%, ${
          scrollPercentage * offsetCards * 100
        }%)`;
      }
      if (imagesView) {
        imagesView.style.transform = `translate(${
          scrollPercentage * offsetImages * 100
        }%, 0%)`;
      }
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
          <div id="images" className="images">
            <div id="images-view" className="image-view">
              <img className="image" alt="sgsistemas" src={sgsistemas} />
              <img className="image" alt="elotech" src={elotech} />
              <img className="image" alt="conmarket" src={conmarket} />
              <img className="image" alt="stefanini" src={stefanini} />
              <img className="image" alt="unavanti" src={unavanti} />
            </div>
          </div>
          <PixelList>
            <ClickableCard>
              <div className="card-title">SG Systems</div>
              <div className="card-title">
                I worked with more than 20 products on the portfolio, developing
                all of them with a wide variety of technologies, such as
                Angular, AngularJS, NodeJs, Java Struts, Java Android, PHP and
                Flex.
              </div>
            </ClickableCard>
            <ClickableCard>teste</ClickableCard>
            <ClickableCard>teste</ClickableCard>
            <ClickableCard>teste</ClickableCard>
            <ClickableCard>teste</ClickableCard>
          </PixelList>
        </div>
      </div>
    </div>
  );
}
