const footerHTML = `
  <hr>All rights reserved to Alper KUM, 2023
`;

function footer() {
  var footer = document.getElementById("footer-container");
  footer.innerHTML = footerHTML;
}

window.onload = function() {
  footer();
}