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