const headerHTML = `
<div class="container-fluid header">
  <div class="row">
    <div class="col text-center">
      <h1>Alper KUM</h1>
      <h4>A software developer with bright ideas.</h4>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <form action="biography.html"><button class="btn btn-primary btn-block">Biography</button></form>
    </div>
    <div class="col">
      <form action="skills.html"><button class="btn btn-primary btn-block">Skills</button></form>
    </div>
    <div class="col">
      <form action="reps.html"><button class="btn btn-primary btn-block">Repositories</button></form>
    </div>
    <div class="col">
      <form action="howto.html"><button class="btn btn-primary btn-block">How-To's</button></form>
    </div>
  </div>
  <br>
</div>
<hr>
`;

const footerHTML = `
  <hr>All &copy; rights reserved to Alper KUM, 2023
`;


function headerAndFooter() {
  var header = document.getElementById("header-container");
  var footer = document.getElementById("footer-container");
  header.innerHTML = headerHTML;
  footer.innerHTML = footerHTML;
}

window.onload = function() {
  headerAndFooter();
}