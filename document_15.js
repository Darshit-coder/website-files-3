(function () {
  function init() {
    const form = document.getElementById('passwordForm');
    const input = document.getElementById('passwordInput');
    if (!form || !input) return;

    form.addEventListener('submit', function(e) {
      e.preventDefault();
     if (password === "21RQ5s;19@huF@%") {
      window.location.href = "https://grannyandsmith-my.sharepoint.com/personal/lb_grannyandsmith_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Flb%5Fgrannyandsmith%5Fcom%2FDocuments%2FProjekt%5FMallorca&ga=1";
    } else {
        alert("Incorrect password.");
        input.value = '';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();




