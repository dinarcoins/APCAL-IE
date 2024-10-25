import {
  bannerDivBottomList,
  footerItemList,
  instructList,
  speakerImageList,
} from "./constants.js";

var menuContainer = document.getElementById("menu");
var bannerDivBottomContainer = document.getElementById("bannerDivBottom");
var footerItemContainer = document.getElementById("footerItem");
var instructItemContainer = document.getElementById("instructItem");
var openMenuBtn = document.querySelector(".openMenu");
var closeMenuBtn = document.querySelector(".closeMenu");
var imageSpeakercontainer = document.getElementById("imageSpeakerContent");

document
  .getElementById("emailInputSubmit")
  .addEventListener("click", function () {
    alert("Đã nhận được thông tin email!");
  });

document.addEventListener("DOMContentLoaded", () => {
  openMenuBtn.addEventListener("click", () => {
    menuContainer.style.right = 0;
  });
  closeMenuBtn.addEventListener("click", () => {
    menuContainer.style.right = "-100%";
  });
});

imageSpeakercontainer.innerHTML = speakerImageList
  .map((item) => {
    return `
    <div class="image-item ml5 mr5 mt5 mb5 bsbb mb50-md">
      <img src="${item.img}" alt="${item.alt}" class="${item.border} w1 db ha">
    </div>
  `;
  })
  .join("");

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

footerItemContainer.innerHTML = footerItemList
  .map((item, index) => {
    return `
      <div class="df fdc">
        <div class="fwb lh25">${item.text}</div>
       <a href="${item.href1}" class="lh25">${item.text1}</a>
       <a href="${item.href2}" class="lh25">${item.text2}</a>
       <a href="${item.href3}" class="lh25">${item.text3}</a>
      </div>
  `;
  })
  .join("");

instructItemContainer.innerHTML = instructList
  .map((item) => {
    return `
    <div class="w1 w33-sm brtl25 brtr25 brbl25 bgcf pl35 pr35 pt35 pb35">
      <i class="${item.icon} fs2 fs1-xs colorGrapeColor mb15"></i>
      <div class="fs12 fs1-xs fwb mb15">${item.title}</div>
      <div class="fs12">${item.text}</div>
    </div>
    `;
  })
  .join("");
