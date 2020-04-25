const ul = document.querySelector(".persons");
let people = [
  "pritam",
  "eshani",
  "rahul",
  "rishika",
  "napcha",
  "jaguli",
  "vusha",
];
let html = ``;

/*#################Demo 1########################*/
//people.forEach(function (person) {
//  html += `<li style="color:red;">${person}</li>`;
//});
/*#################Demo 2########################*/
//people.forEach((person, index) => {
//  html += `<li style="color:red;">${person} is at ${index}</li>`;
//});
/*#################Demo 3########################*/
const listItemCreator = (person, index) => {
  html += `<li style="color:red;">${person} is at ${index}</li>`;
};
people.forEach(listItemCreator);
ul.innerHTML = html;
