// reloadPage.js
// This script ensures the page reloads when navigated back to from cache
  window.addEventListener('pageshow', function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  });