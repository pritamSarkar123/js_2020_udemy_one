//////// new syntactical way ///////////
/*class User {
  constructor(username, email, score = 0) {
    this.username = username;
    this.email = email;
    this.score = score;
  }
  login() {
    console.log(`${this.username} logged in `);
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
  iccScore() {
    this.score += 1;
    console.log(`${this.username} scored ${this.score}`);
    return this;
  }
}
class Admin extends User {
  constructor(username, email, title) {
    super(username, email);
    this.title = title;
  }
  deleteUser(user) {
    //users accesable scope
    users = users.filter((u) => u.username !== user.username);
  }
}
const userOne = new User("pritam", "p@s");
const userTwo = new User("pratush", "p@s");
const userThree = new Admin("pradip", "p@s", "fuck-u");
let users = [userOne, userTwo, userThree];
console.log(users);
userThree.deleteUser(userTwo);
console.log(users);*/
/////// classical way /////
/*function User(username, email) {
  this.username = username;
  this.email = email;
  this.login = function () {
    console.log(`${this.username} has logged in `);
  };
}
const userOne = new User("pritam", "p@s");
const userTwo = new User("pratush", "p@s");

console.log(userTwo, userOne);
userOne.login();*/

////////////__proto__/////////
function User(username, email) {
  this.username = username;
  this.email = email;
}
User.prototype.login = function () {
  console.log(`${this.username} has logged in `);
  return this;
};
User.prototype.logout = function () {
  console.log(`${this.username} has logged out `);
  return this;
};
function Admin(username, email, title) {
  User.call(this, username, email);
  this.title = title;
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function () {};
const userOne = new User("pritam", "p@s");
const userTwo = new User("pratush", "p@s");
const userThree = new Admin("prabir", "p@s", "fk");

console.log(userTwo, userOne, userThree);
userOne.login().logout();
