const root = document.querySelector(".root");
for (let i = 1; i <= 11; i++) {
  const item = document.createElement("img");
  item.setAttribute("src", `./public/images/img${i}.jpeg`);
  item.setAttribute("alt", "img");
  item.classList.add("child", `img${i}`);
  item.style.animationName = "example";
  item.style.animationDuration = `${Math.random() * 4 + 2}s`;
  root.append(item);
}
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const img5 = document.querySelector(".img5");
const img6 = document.querySelector(".img6");
const img7 = document.querySelector(".img7");
const img8 = document.querySelector(".img8");
const img9 = document.querySelector(".img9");
const img10 = document.querySelector(".img10");
const img11 = document.querySelector(".img11");
const circle = document.querySelector(".circle");

mouse();
function mouse(e) {
  const x = e ? e.clientX : document.body.clientWidth / 2;
  const y = e?.clientY || document.body.clientHeight / 2;
  circle.style.display = e ? "unset" : "none";
  img1.style.top = `${5 + y * 0.012}%`;
  img1.style.left = `${-10 + x * 0.013}%`;
  img2.style.top = `${20 + y * 0.011}%`;
  img2.style.left = `${30 + x * 0.012}%`;
  img3.style.top = `${60 + y * 0.013}%`;
  img3.style.left = `${20 + x * 0.01}%`;
  img4.style.top = `${70 + y * 0.011}%`;
  img4.style.left = `${60 + x * 0.014}%`;
  img5.style.top = `${50 + y * 0.012}%`;
  img5.style.left = `${-15 + x * 0.012}%`;
  img6.style.top = `${65 + y * 0.014}%`;
  img6.style.left = `${85 + x * 0.01}%`;
  img7.style.top = `${55 + y * 0.014}%`;
  img7.style.left = `${35 + x * 0.012}%`;
  img8.style.top = `${-20 + y * 0.013}%`;
  img8.style.left = `${35 + x * 0.012}%`;
  img9.style.top = `${-10 + y * 0.016}%`;
  img9.style.left = `${65 + x * 0.012}%`;
  img10.style.top = `${5 + y * 0.015}%`;
  img10.style.left = `${10 + x * 0.012}%`;
  img11.style.top = `${30 + y * 0.013}%`;
  img11.style.left = `${70 + x * 0.011}%`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
}
