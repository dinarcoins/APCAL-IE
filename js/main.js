import {
  bannerDivBottomList,
  footerItemList,
  instructList,
  programNavigationData,
  newsItemList,
  sponsorshipList,
} from "./constants.js";

var bannerDivBottomContainer = document.getElementById("bannerDivBottom");
var footerItemContainer = document.getElementById("footerItem");
var instructItemContainer = document.getElementById("instructItem");
var programNavigationTitleContainer = document.getElementById(
  "programNavigationTitle"
);
var programNavigationTabContainer = document.getElementById(
  "programNavigationTab"
);

var newContentContainer = document.getElementById("newContent");

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
      <div class="df aic w1-xs">
        <i class="${item.icon} fs4 fs2-md colorGrapeColor"></i>
        <div class="ml25">
          <div class="fs3 fwb fs1-md">${item.number}</div>
          <div class="fs2 fs09-md ttc">${item.text}</div>
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


footerItemContainer.innerHTML = footerItemList
  .map((item, index) => {
    return `
      <div class="df fdc w1-sm">
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
    <div class="w1 w30-sm brtl25 brtr25 brbl25 bgcf pl35 pr35 pt35 pb35 pt10-xs pb10-xs">
      <i class="${item.icon} fs2 fs1-xs colorGrapeColor mb15"></i>
      <div class="fs12 fs1-xs fwb mb15">${item.title}</div>
      <div class="fs12 fs09-sm ">${item.text}</div>
    </div>
    `;
  })
  .join("");

function renderProgramNavigationTabs() {
  programNavigationTitleContainer.innerHTML = programNavigationData
    .map((tab, index) => {
      return `<div class="tab-button cpi wfc fs2 fs09-sm" data-index="${index}">${tab.tabName}</div>`;
    })
    .join("");

  renderProgramNavigationTabContent(0);

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", function () {
      const tabIndex = parseInt(this.getAttribute("data-index"));
      renderProgramNavigationTabContent(tabIndex);
    });
  });
}

function renderProgramNavigationTabContent(tabIndex) {
  const selectedTab = programNavigationData[tabIndex];
  programNavigationTabContainer.innerHTML = selectedTab.content
    .map((item) => {
      return `
          <div class="tab-item w1 pl50 pt50 pr50 pb50 brtl30 brtr30 brbl30 df fww mb25 pt15-xs pb15-xs pr5-xs pl5-xs">
            <div class="df gap10">
              <div class="mr50 mr0-xs fs15 fs09-xs fwb">${item.date}</div>
              <div class="fs15 fs09-xs fwb ">${item.title}</div>
            </div>
            <div class="additional-description fs10 hiddenDecs mt25">${item.decs}</div>
          </div>
        `;
    })
    .join("");

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.remove("active");
  });
  document.querySelectorAll(".tab-button")[tabIndex].classList.add("active");
  document.querySelectorAll(".tab-item").forEach((item) => {
    item.addEventListener("click", function () {
      document.querySelectorAll(".additional-description").forEach((desc) => {
        desc.classList.add("hiddenDecs");
      });

      const description = this.querySelector(".additional-description");
      description.classList.toggle("hiddenDecs");
    });
  });
}

renderProgramNavigationTabs();

document.addEventListener("DOMContentLoaded", function () {
  newContentContainer.innerHTML = newsItemList
    .map((item, index) => {
      return `
    <div class="w30 w1-sm newItem">
      <img src="${item.img}" alt="newitem1" class="${
        index === 0 && `brtl25 brtr25 brbl25`
      } ${index === 1 && `brtl25 brtr25`} ${
        index === 2 && `brtl25 brtr25 brbr25`
      } mb25 w1">
      <div class="newItemTitle fs12 fs1-md fwb mb15 lh16">${item.title}</div>
      <div class="fs10 fwn lh16 fs09-md">${item.desc}</div>
    </div>
    `;
    })
    .join("");
});

function renderSponsorship() {
  const sponsorshipContainer = document.getElementById("sponsorship");

  sponsorshipContainer.innerHTML = sponsorshipList
    .map(
      (item) => `

      <div class="sponsorshipItem w20 df aic jcc">
      <img src="${item.img}" alt="${item.alt}" class="w1 w50-sm" />
    </div>
     `
    )
    .join("");

  updateVisibleItems();
}

function updateVisibleItems() {
  const children = document.querySelectorAll(".sponsorshipItem");

  if (window.innerWidth <= 768) {
    children.forEach((child, index) => {
      if (index < 3) {
        child.classList.add("show");
      } else {
        child.classList.remove("show");
      }
    });
  } else {
    children.forEach((child) => {
      child.classList.add("show");
    });
  }
}

window.addEventListener("resize", updateVisibleItems);

renderSponsorship();


document.getElementById("emailInputSubmit").addEventListener("click", function() {
  alert("Đã nhận được thông tin email!");
});