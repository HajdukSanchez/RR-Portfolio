// Developed by Jozek Andrzej Hajduk Sánchez

// Body
const $body = document.querySelector('body');
// Theme and Language mode
const $btn_swicth_theme = document.getElementById('switch-theme');
const $btn_swicth_lang = document.getElementById('switch-lang');

$btn_swicth_theme.addEventListener('click', () => {
  /* Change theme */
  $body.classList.toggle('ligth-mode');
  $btn_swicth_theme.classList.toggle('active');
  // Add selection to localStorage
  const theme_mode = ($body.classList.contains('ligth-mode')) ? 'true' : 'false';
  localStorage.setItem('ligth-mode', theme_mode);
});

// TODO: Add language mode changing
$btn_swicth_lang.addEventListener('click', () => {
  /* Change language */
  $btn_swicth_lang.classList.toggle('active');
  // Add selection to localStorage
  const lang_mode = ($body.classList.contains('lang-es')) ? 'true' : 'false';
  localStorage.setItem('lang-es', lang_mode);
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
  // Evaluate language
  function evaluateLanguage() {
    if (localStorage.getItem('lang-es') === 'true') {
      $btn_swicth_lang.classList.add('active');
    } else {
      $btn_swicth_lang.classList.remove('active');
    }
  }

  evaluateTheme();
  evaluateLanguage();
})()