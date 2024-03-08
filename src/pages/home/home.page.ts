import anime from "animejs";

export const HomePage = {
  do() {
    const homeIframe = document.getElementById("home-iframe");
    anime({ targets: homeIframe, width: "20%", height: "20%", delay: 50 });
  },
  undo() {},
};
