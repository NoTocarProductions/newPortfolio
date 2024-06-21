document.addEventListener("DOMContentLoaded", function() {
  // Hide the loader and show the content when the DOM is fully loaded
  var loader = document.getElementById("loader");
  var content = document.getElementById("mainContent");

  // Check if the entire page (including images, stylesheets, etc.) is fully loaded
  window.addEventListener("load", function() {
      loader.style.display = "none";  // Hide the loader
      content.style.display = "block";  // Show the content
  });
});



document.addEventListener("scroll", function() {
  const heroTitle = document.querySelector(".hero__title");
  const scrollY = window.scrollY;

  if (scrollY > 100) {
    heroTitle.classList.add("shrink");

    // Calculate the container width
    const containerWidth = heroTitle.offsetWidth;

    // Calculate the font size based on the container width
    const fontSize = Math.min(containerWidth / 50, 120); // Adjust the division factor to control the font size

    // Apply the font size to the title
    heroTitle.style.fontSize = `${fontSize}px`;
    heroTitle.style.position = 'fixed';
  } else {
    heroTitle.classList.remove("shrink");
    heroTitle.style.fontSize = "30rem"; // Reset the font size to the original value
    
  }
});




document.addEventListener('DOMContentLoaded', function() {
  const heroTitle = document.querySelector('.hero__title');
  const aboutContent = document.querySelector('.about__content');
  const scrollSection = document.querySelectorAll('.scroll_section');
  const footer = document.querySelector('.footer');

  window.addEventListener('scroll', function() {
    const heroTitleRect = heroTitle.getBoundingClientRect();
    const aboutContentRect = aboutContent.getBoundingClientRect();
    const scrollSectionRect = scrollSection[0].getBoundingClientRect();
    const scrollSectionRectTwo = scrollSection[1].getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();

    const intersectsAbout = heroTitleRect.bottom > aboutContentRect.top && heroTitleRect.top < aboutContentRect.bottom;
    const intersectsScroll = heroTitleRect.bottom > scrollSectionRect.top && heroTitleRect.top < scrollSectionRect.bottom;
    const intersectsScrollTwo = heroTitleRect.bottom > scrollSectionRectTwo.top && heroTitleRect.top < scrollSectionRectTwo.bottom;
    const intersectsFooter = heroTitleRect.bottom > footerRect.top && heroTitleRect.top < footerRect.bottom;

    if (intersectsAbout || intersectsScroll || intersectsScrollTwo || intersectsFooter) {
      heroTitle.classList.add('black');
    } else {
      heroTitle.classList.remove('black');
    }
  });
});




//horizontal scrolling
//---------------------------------------------------------------------------------
const stickySections = [...document.querySelectorAll('.sticky')];
console.log(stickySections);

window.addEventListener('scroll', (e) => {
  for (let i = 0; i < stickySections.length; i++) {
    transform(stickySections[i])
  }
})

function transform(section) {
  const offsetTop = section.parentElement.offsetTop;
  const scrollSection = section.querySelector('.scroll_section');

  let percentage = ((window.scrollY-offsetTop) / window.innerHeight) * 100;
  percentage = percentage < 0 ? 0 : percentage > 65 ? 65 : percentage;
  scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;

}

// smoking tires
//---------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
  const cloudImageDown = document.querySelector('.scroll_section__carContainer-cloudImageOne');
  const cloudImageUp = document.querySelector('.scroll_section__carContainer-cloudImageTwo');
  let isScrolling;
  let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Determine scroll direction
    if (currentScrollTop > lastScrollTop) {
      // Scrolling down
      cloudImageUp.classList.add('hidden');
      cloudImageUp.classList.remove('visible');
      cloudImageDown.classList.remove('hidden');
      cloudImageDown.classList.add('visible');
    } else {
      // Scrolling up
      cloudImageDown.classList.add('hidden');
      cloudImageDown.classList.remove('visible');
      cloudImageUp.classList.remove('hidden');
      cloudImageUp.classList.add('visible');
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling

    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function() {
      cloudImageUp.classList.remove('visible');
      cloudImageUp.classList.add('hidden');
      cloudImageDown.classList.remove('visible');
      cloudImageDown.classList.add('hidden');
    }, 200);  // Adjust this value for delay in hiding the cloud after scroll stops
  }, false);
});








document.addEventListener("DOMContentLoaded", function() {
  const listItems = document.querySelectorAll('.otherProjects__main__right-list--row');
  const mockupImage = document.querySelector('.otherProjects__main__right-list--mockup');

  listItems.forEach(item => {
    item.addEventListener('mouseover', function() {
      const newImageSrc = this.getAttribute('data-image');
      mockupImage.src = newImageSrc;
    });
    
    item.addEventListener('mouseout', function() {
      // Optionally, you can reset the image when the mouse leaves the list item.
      // mockupImage.src = 'path/to/default/image.jpg';
    });
  });
});


//wavy title workflow
//----------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() {
  function updateText(){
    let delay = 50;
    let h1 = document.getElementById("animated");

    // Split the text content and wrap each letter in a span
    h1.innerHTML = h1.textContent.split("").map(letter => {
      return `<span>` + letter + `</span>`;
    }).join("");

    // Get the newly created spans
    let spans = Array.from(h1.children);

    // Apply the animation class to each span with a delay
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("wavy");
      }, index * 90 + delay);
    });
  }

  updateText();
});


window.addEventListener('scroll', function() {
  const footer = document.querySelector('.footer');
  const fixedText = document.querySelector('.footer__container');
  const links = document.querySelector('.footer__container-relative--second---right');
  // Get the rectangle of the footer's bounding box
  const rect = footer.getBoundingClientRect();
  
  // Calculate the visible height of the footer within the viewport
  const visibleFooterHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
  
  // Check if the visible height of the footer is greater than half of its actual height
  const isFooterVisible = visibleFooterHeight > rect.height / 1.1;
  
  // Toggle the display of fixedText based on whether scroll position is inside footer bounds
  if (isFooterVisible) {
    footer.style.zIndex = '100';
  } else {
    footer.style.zIndex = '-1';
  }
});
