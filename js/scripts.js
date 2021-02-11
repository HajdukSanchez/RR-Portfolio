// Developed by Jozek Andrzej Hajduk Sánchez

// Body
const $body = document.querySelector('body');
// Theme mode
const $btn_swicth_theme = document.getElementById('switch-theme');

$btn_swicth_theme.addEventListener('click', () => {
  /* Change theme */
  $body.classList.toggle('ligth-mode');
  $btn_swicth_theme.classList.toggle('active');
  // Add selection to localStorage
  const theme_mode = ($body.classList.contains('ligth-mode')) ? 'true' : 'false';
  localStorage.setItem('ligth-mode', theme_mode);
});

// Function to show the company information
function viewInfo(id) {
  const $company = document.getElementById(`${id}`);
  /* Add class active to show company information */
  $company.classList.toggle('active');
}

// Function For fade effect
window.addEventListener('scroll', () => {
  function fadeIn(direction) {
    // Fade objects
    const $fade = document.querySelectorAll(`.fade--${direction}`);
    for (let i = 0; i < $fade.length; i++) {
        // 1/4 parts of the window heigth screen
      let window_heigth = window.innerHeight / 1.4;
      let distance = $fade[i].getBoundingClientRect().top;
      $fade[i].classList.add(`fade--${direction}`);
      if (distance <= window_heigth) {
        $fade[i].classList.add('appear');
      } else {
        $fade[i].classList.remove('appear');
      }
    }
  }
  fadeIn('up');
  fadeIn('up-40');
  fadeIn('down');
  fadeIn('down-200');
  fadeIn('rigth');
  fadeIn('left');
});

// Function to excecuted on load
(function onLoad() {
  // Evaluate theme mode
  function evaluateTheme() {
    if (localStorage.getItem('ligth-mode') === 'true') {
      $body.classList.add('ligth-mode');
      $btn_swicth_theme.classList.add('active');
    } else {
      $body.classList.remove('ligth-mode');
      $btn_swicth_theme.classList.remove('active');
    }
  }
  evaluateTheme();
})()