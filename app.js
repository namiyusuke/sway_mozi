const Nav = {
  hov(el) {
    let speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
    if (speed < 0.1) return;
    const timer = 250;
    const acceleration = 0.1;
    const random = {
      x: (Math.random() * 2 - 1) * 30 * speed * 2.2,
      y: (Math.random() * 2 - 1) * 25 * speed * 2.2,
    };
    const text = el.getAttribute("data-text");
    const shadow = document.createElement("div");
    shadow.classList.add("l-nav_main__link-deco");
    shadow.textContent = text;
    shadow.style.top = `calc(40% + ${random.y * 0.1}rem)`;
    shadow.style.left = `calc(50% + ${random.x * 0.1}rem)`;
    shadow.style.color = Math.random() < 0.6 ? "#c81101" : null;
    el.appendChild(shadow);

    setTimeout(() => {
      el.removeChild(shadow);
    }, 250);
    setTimeout(() => {
      this.hov(el, speed * acceleration);
    }, timer);
  },
  event() {
    const navLinks = document.querySelectorAll(".js-nav_link");
    navLinks.forEach((link) => {
      link.addEventListener("mousemove", (event) => {
        this.hov(event.currentTarget);
      });
    });
  },
  init() {
    this.event();
  },
};
Nav.init();
