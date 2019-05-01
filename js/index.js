const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// all images

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// CTA image
let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent['cta']['img-src'];

// mid-page image
let middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];


// NAV content 

let navItem = document.querySelectorAll('a');

navItem[0].textContent = siteContent['nav']['nav-item-1'];
navItem[1].textContent = siteContent['nav']['nav-item-2'];
navItem[2].textContent = siteContent['nav']['nav-item-3'];
navItem[3].textContent = siteContent['nav']['nav-item-4'];
navItem[4].textContent = siteContent['nav']['nav-item-5'];
navItem[5].textContent = siteContent['nav']['nav-item-6'];


// CTA content

let ctaH1 = document.querySelector('.cta .cta-text h1');
ctaH1.textContent = siteContent['cta']['h1'];

let ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.textContent = siteContent['cta']['button'];


// Main Content

const topContent = document.querySelectorAll('.top-content .text-content h4');
topContent[0].textContent = siteContent['main-content']['features-h4'];
topContent[1].textContent = siteContent['main-content']['about-h4'];

const topContent2 = document.querySelectorAll('.top-content .text-content p');
topContent2[0].textContent = siteContent['main-content']['features-content'];
topContent2[1].textContent = siteContent['main-content']['about-content'];

const bottomContentH = document.querySelectorAll('.bottom-content .text-content h4');
bottomContentH[0].textContent = siteContent['main-content']['services-h4'];
bottomContentH[1].textContent = siteContent['main-content']['product-h4'];
bottomContentH[2].textContent = siteContent['main-content']['vision-h4'];

const bottomContentP = document.querySelectorAll('.bottom-content .text-content p');
bottomContentP[0].textContent = siteContent['main-content']['services-content'];
bottomContentP[1].textContent = siteContent['main-content']['product-content'];
bottomContentP[2].textContent = siteContent['main-content']['vision-content'];


// Contact

const contactSectionH = document.querySelectorAll('.contact h4');
contactSectionH[0].textContent = siteContent['contact']['contact-h4'];

const contactSectionP = document.querySelectorAll('.contact p');
contactSectionP[0].textContent = siteContent['contact']['address'];
contactSectionP[1].textContent = siteContent['contact']['phone'];
contactSectionP[2].textContent = siteContent['contact']['email'];


// Footer

const footerSection = document.querySelector('footer');
footerSection.textContent = siteContent['footer']['copyright'];