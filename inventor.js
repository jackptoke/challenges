const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
const display = document.querySelector(".inventor-table");
const lnk1500 = document.querySelector("#bornIn1500s");
const lnkAll = document.querySelector("#all-inventors");
const lnkBirthAsc = document.querySelector("#sort-birth-asc");
const lnkBirthDes = document.querySelector("#sort-birth-des");
const lnkYearLivedAsc = document.querySelector("#sort-yearsLived-asc");
const lnkYearLivedDes = document.querySelector("#sort-yearsLived-des");
const lnkLastnameAsc = document.querySelector("#sort-lastname-asc");
const lnkLastnameDes = document.querySelector("#sort-lastname-des");
// const btnShow = document.querySelector(".btnShow");

  function displayInventors(inventorsList){
    display.innerHTML = "";
    let head = document.createElement("tr");
    head.innerHTML = "<th>First Name</th><th>Last Name</th><th>Year of Birth</th><th>Year of Death</th><th>No. Years Lived</th>";

    display.appendChild(head);
    for(let inventor of inventorsList){
        let row = document.createElement("tr");
        row.innerHTML = `<td>${inventor["first"]}</td><td>${inventor["last"]}</td><td>${inventor["year"]}</td><td>${inventor["passed"]}</td><td>${Number(inventor["passed"])-Number(inventor["year"])}</td>`;
        display.appendChild(row);
        // console.log(row);
    }
  };

  function filter1500s(inventor){
      return (inventor["passed"] <= 1599 && inventor["passed"] >= 1500) || (inventor["year"] >= 1500 && inventor["year"] < 1590);
  }

  function display1500Inventors(){
    displayInventors(inventors.filter(filter1500s));
  }

  function displayAll(){
    displayInventors(inventors);
  }
  
  function sortBirthAsc(){
    displayInventors(inventors.sort((inventorA, inventorB)=>{
      return inventorA["year"] - inventorB["year"];
    }));
  }

  function sortBirthDes(){
    displayInventors(inventors.sort((inventorA, inventorB)=>{
      return inventorB["year"] - inventorA["year"];
    }));
  }

  function sortYearLivedAsc(){
    let inventorsC = inventors.sort((inventorA, inventorB)=>{
      return (inventorA["passed"]-inventorA["year"])-(inventorB["passed"]-inventorB["year"]);
    });
    displayInventors(inventorsC);
  }

  function sortYearLivedDes(){
    let inventorsC = inventors.sort((inventorA, inventorB)=>{
      return (inventorB["passed"]-inventorB["year"])-(inventorA["passed"]-inventorA["year"]);
    });
    displayInventors(inventorsC);
  }

  function sortLastnameAsc(){
    displayInventors(inventors.sort((a, b)=>{
      return a["last"].localeCompare(b["last"]);
    }));
  }

  function sortLastnameDes(){
    displayInventors(inventors.sort((a, b)=>{
      return b["last"].localeCompare(a["last"]);
    }));
  }

displayInventors(inventors);

lnk1500.addEventListener("click", display1500Inventors);
lnkAll.addEventListener("click", displayAll);
lnkBirthAsc.addEventListener("click", sortBirthAsc);
lnkBirthDes.addEventListener("click", sortBirthDes);
lnkYearLivedAsc.addEventListener("click", sortYearLivedAsc);
lnkYearLivedDes.addEventListener("click", sortYearLivedDes);
lnkLastnameAsc.addEventListener("click", sortLastnameAsc);
lnkLastnameDes.addEventListener("click", sortLastnameDes);

