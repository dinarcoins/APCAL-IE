import {
  navMenuList,
  bannerDivBottomList,
  speakerImageList,
  footerItemList,
} from "./constants.js";

var menuContainer = document.getElementById("menu");
var bannerDivBottomContainer = document.getElementById("bannerDivBottom");
var footerItemContainer = document.getElementById("footerItem");

menuContainer.innerHTML = navMenuList
  .map((item) => {
    return `
      <a href="${item.href}">${item.text}</a>
  `;
  })
  .join("");

document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".header");

  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  }

  window.addEventListener("scroll", handleScroll);
});

bannerDivBottomContainer.innerHTML = bannerDivBottomList
  .map((item) => {
    return `
      <div class="df aic">
        <i class="${item.icon} fs4 fs2-sm colorGrapeColor"></i>
        <div class="ml25">
          <div class="fs3 fwb fs1-sm">${item.number}</div>
          <div class="fs2 fs09-sm ttc">${item.text}</div>
        </div>
      </div>
  `;
  })
  .join("");

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const imagesContainer = document.getElementById("imageSpeakerContainer");

  let imagesToShow = 6;

  function checkScreenSize() {
    if (window.innerWidth <= 1024) {
      imagesToShow = 3;
    } else {
      imagesToShow = 6;
    }
    renderImages();
  }

  function renderImages() {
    imagesContainer.innerHTML = speakerImageList
      .slice(0, imagesToShow)
      .map((item) => {
        return `
          <div class="image-item">
            <img src="${item.img}" alt="${item.alt}" class="brtl30 brtr30 brbl30 w1 db ha">
          </div>
        `;
      })
      .join("");
  }

  window.addEventListener("resize", checkScreenSize);
  checkScreenSize();
});

footerItemContainer.innerHTML = footerItemList
  .map((item, index) => {
    return `
      <div class="df fdc">
        <div>${item.text}</div>
         ${
           !item.only &&
           `  
       <a href="${item.href1}">${item.text1}</a>
       <a href="${item.href2}">${item.text2}</a>
       <a href="${item.href3}">${item.text3}</a>`
         }
      </div>
  `;
  })
  .join("");
