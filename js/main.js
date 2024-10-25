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
      header.style.background = "#fff";
    } else {
      header.style.background = "transparent";
    }
  }

  window.addEventListener("scroll", handleScroll);
  bannerDivBottomContainer.innerHTML = bannerDivBottomList
    .map((item) => {
      return `
      <div class="df aic mb15">
        <i class="${item.icon} fs4 fs2-md colorGrapeColor"></i>
        <div class="ml25">
          <div data-target="${item.dataTarget}" class="fs2 fwb fs1-md ${
        item.counters ? "counter" : "counterPlus"
      }">${item.number}</div>
          <div class="fs1 fs09-md ttc">${item.text}</div>
        </div>
      </div>
    `;
    })
    .join("");

  function animateCounter(element, endTime, suffix = "") {
    const target = +element.getAttribute("data-target");
    const increment = target / (endTime / 16);

    const update = () => {
      const current = +element.innerText.replace(suffix, "");

      if (current < target) {
        element.innerText = Math.ceil(current + increment) + suffix;
        setTimeout(update, 16);
      } else {
        element.innerText = target + suffix;
      }
    };
    update();
  }

  document
    .querySelectorAll(".counter")
    .forEach((counter) => animateCounter(counter, 3500));
  document
    .querySelectorAll(".counterPlus")
    .forEach((counter) => animateCounter(counter, 5000, "+"));
});

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
    <div class="w1 w30-sm brtl25 brtr25 brbl25 bgcf pl35 pr35 pt35 pb35 pt10-xs pb10-xs mb15">
      <i class="${item.icon} fs2 fs1-xs colorGrapeColor mb15"></i>
      <div class="fs1 fs1-xs fwb mb15">${item.title}</div>
      <div class="fs1 fs09-sm ">${item.text}</div>
    </div>
    `;
    })
    .join("");
});

function renderProgramNavigationTabs() {
  programNavigationTitleContainer.innerHTML = programNavigationData
    .map((tab, index) => {
      return `<div class="tab-button bbw2 bbss bbcf pb10 cpi wfc fs15 fs1-sm" data-index="${index}">${tab.tabName}</div>`;
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
            <div class="df">
              <div class="mr50 mr0-xs fs15 fs09-xs fwb">${item.date} - </div>
              <div class="fs15 fs09-xs fwb ">${item.title}</div>
            </div>
            <div class="additional-description fs10 dn mt25">${item.decs}</div>
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
        desc.style.display = "none"
          ? (desc.style.display = "none")
          : (desc.style.display = "block");
      });

      const description = this.querySelector(".additional-description");
      description.style.display = "none"
        ? (description.style.display = "block")
        : (description.style.display = "none");
    });
  });
}

renderProgramNavigationTabs();

document.addEventListener("DOMContentLoaded", function () {
  newContentContainer.innerHTML = newsItemList
    .map((item, index) => {
      return `
    <a href="#" class="w30 w1-sm newItem mb15">
      <img src="${item.img}" alt="newitem1" class="${
        index === 0 && `brtl25 brtr25 brbl25`
      } ${index === 1 && `brtl25 brtr25`} ${
        index === 2 && `brtl25 brtr25 brbr25`
      } mb25 w1">
      <div class="newItemTitle fs12 fs1-md fwb mb15 lh16">${item.title}</div>
      <div class="fs10 fwn lh16 fs09-md">${item.desc}</div>
    </a>
    `;
    })
    .join("");
});

function renderSponsorship() {
  const sponsorshipContainer = document.getElementById("sponsorship");

  sponsorshipContainer.innerHTML = sponsorshipList
    .map(
      (item) => `
      <a href="#" class="sponsorshipItem w20 df aic jcc">
        <img src="${item.img}" alt="${item.alt}" class="w1 w50-sm" />
      </a>
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
        child.style.display = "flex";
      } else {
        child.style.display = "none";
      }
    });
  } else {
    children.forEach((child) => {
      child.style.display = "flex";
    });
  }
}

window.addEventListener("resize", updateVisibleItems);

renderSponsorship();

document
  .getElementById("emailInputSubmit")
  .addEventListener("click", function () {
    alert("Đã nhận được thông tin email!");
  });
