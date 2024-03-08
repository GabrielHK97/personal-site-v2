import anime from "animejs";

export const HomePage = {
  do() {
    const homeIframe = document.getElementById("home-iframe");
    anime({
      targets: homeIframe,
      width: "20%",
      height: "20%",
      duration: 100,
      easing: "linear",
    });
  },
  undo() {
    const homeIframe = document.getElementById("home-iframe");
    anime({
      targets: homeIframe,
      width: "100%",
      height: "100%",
      duration: 100,
      easing: "linear",
    });
  },
};
