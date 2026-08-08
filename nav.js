const languageButton = document.querySelector('.lang-toggle');
const languageLabel = languageButton?.querySelector('span');
function refreshLanguageButton() {
  if (languageLabel) languageLabel.textContent = (localStorage.getItem('gs-lang') || 'en').toUpperCase();
}
refreshLanguageButton();
languageButton?.addEventListener('click', () => setTimeout(refreshLanguageButton, 0));
