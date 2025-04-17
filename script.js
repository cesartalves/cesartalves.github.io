const langButtons = document.querySelectorAll('.lang-btn');
  const content = { 'pt': document.querySelectorAll('.pt'), 'en': document.querySelectorAll('.en'), 'jp': document.querySelectorAll('.jp')};
  
  const avatar = document.querySelector('.avatar');
  const originalSrc = avatar.src;
  const spinSrc = "https://cesartalves.github.io/images/t.png"; // Replace with your desired spin image

  function switchLanguage(lang) {
    document.body.classList.add('fade');
    localStorage.setItem('preferredLang', lang);

    const showClass = ['pt', 'en', 'jp'].filter(l => l == lang)[0]
    const hiddenLanguages =  ['pt', 'en', 'jp'].filter(l => l != lang)
 
    hiddenLanguages.forEach(language => {
      content[language].forEach(element => element.classList.remove('active'));
    });

    langButtons.forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

    setTimeout(() => {
      content[showClass].forEach(el => {
        el.classList.add('active');
      });

      document.body.classList.remove('fade');
    }, 500);


 
    
  }

  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;
      switchLanguage(lang);
    });

    
  });

  function Animate() {
    avatar.addEventListener('mouseenter', () => {
    avatar.classList.add('spin-y');
    avatar.classList.add('fade-out');

    avatar.addEventListener('transitionend', () => {
      avatar.src = spinSrc;
      avatar.classList.remove('fade-out');
      avatar.classList.add('fade-in');
    }, { once: true });

    avatar.addEventListener('animationend', () => {
      avatar.classList.remove('spin-y');
      avatar.classList.remove('fade-in');

      setTimeout(() => {
        avatar.classList.add('fade-out');
        avatar.addEventListener('transitionend', () => {
          avatar.src = originalSrc;
          avatar.classList.remove('fade-out');
          avatar.classList.add('fade-in');
        }, { once: true });
      }, 100);
    }, { once: true });
  });
  }

  window.addEventListener('DOMContentLoaded', () => {
    const storedLang = localStorage.getItem('preferredLang');
    const browserLang = navigator.language.startsWith('pt') ? 'pt' : navigator.language.startsWith('en') ? 'en' : 'jp';
    
    const initialLang = storedLang || browserLang;

    switchLanguage(initialLang);
    Animate();
  });

  const backToTopButton = document.getElementById('jung');

  // Show button after scrolling down
  window.addEventListener('scroll', () => {
    if (window.scrollY > 700) {
      backToTopButton.classList.add('alive');
    } else {
      backToTopButton.classList.remove('alive');
    }
  });
  
  // Smooth scroll to top on click
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  window.addEventListener('load', () => {
    // Wait a bit for LINE script to inject the iframe
    const tryFixLINEButton = () => {
      const iframe = document.querySelector('iframe[src*="line.me"]');
      
      if (iframe) {

        const wrapper = document.createElement('div')
        wrapper.innerHTML = iframe;
        iframe.style.width = '100%';
        iframe.style.height = '50px'; // Or whatever height works for you
       
        iframe.removeAttribute('width');
        iframe.removeAttribute('height');
      } else {
        // Retry after a short delay if not found yet
        setTimeout(tryFixLINEButton, 300);
      }
    };

    tryFixLINEButton();
  });
