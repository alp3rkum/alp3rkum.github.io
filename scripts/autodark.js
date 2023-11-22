const html = document.querySelector("html");

function isNightTime() {
    var now = new Date();
    var hour = now.getHours();
    return hour >= 20 || hour < 8;
}

function toggleDarkMode(){
    if (isNightTime()) {
        const buttons = document.getElementsByClassName("btn");
        const table_a = document.getElementsByClassName("a-table");
        const tds = document.getElementsByTagName("td");
        const tdbios = document.getElementsByClassName("td-bio");
        const tableHeads = document.querySelectorAll('.table-head th');
        html.classList.add("dark-mode");
        document.body.classList.add("dark-mode");
        document.getElementById("header-container").style.backgroundColor = "#222"; // -> does work :)
        //document.getElementById("header-container").classList.add("dark-mode-header"); -> doesn't work :(
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.add("dark-table");
              }
              for (let i = 0; i < table_a.length; i++) {
                table_a[i].classList.add("dark-table");
              }
              for (let i = 0; i < tds.length; i++) {
                tds[i].classList.add("dark-table");
              }
              for (let i = 0; i < tdbios.length; i++) {
                tdbios[i].classList.add("dark-table-light");
              }
              for (let i = 0; i < tableHeads.length; i++) {
                tableHeads[i].classList.add("dark-table");
              }
    } else {
        const buttons = document.getElementsByClassName("btn"); //to ensure header and footer loads and DOM element loading is successful
        const table_a = document.getElementsByClassName("a-table");
        const tds = document.getElementsByTagName("td");
        const tdbios = document.getElementsByClassName("td-bio");
        const tableHeads = document.querySelectorAll('.table-head th');
        html.classList.remove("dark-mode");
        document.body.classList.remove("dark-mode");
        document.getElementById("header-container").style.backgroundColor = "rgb(66,132,210)";
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].classList.remove("dark-table");
        }
        for (let i = 0; i < table_a.length; i++) {
          table_a[i].classList.remove("dark-table");
        }
        for (let i = 0; i < tds.length; i++) {
          tds[i].classList.remove("dark-table");
        }
        for (let i = 0; i < tdbios.length; i++) {
          tdbios[i].classList.remove("dark-table-light");
        }
        for (let i = 0; i < tableHeads.length; i++) {
          tableHeads[i].classList.remove("dark-table");
        }
    }
}