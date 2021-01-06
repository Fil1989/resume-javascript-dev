const selectLang = document.querySelector('.lang__select');
selectLang.addEventListener('change', function () {
  document.location = this.value;
});
