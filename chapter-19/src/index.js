import { contact, styleBody, addTitle } from "./dom";
import u, { getPremUsers } from "./data";

console.log("index file");
addTitle("test 2");
styleBody();
console.log(contact);
//console.log(u);
const premUsers = getPremUsers(u);
console.log(u, premUsers);
