const users = [
  { name: "pritam", premium: true },
  { name: "esani", premium: false },
  { name: "rahul", premium: false },
  { name: "rishika", premium: true },
];
/*export const getPremUsers = (users) => {
  return users.filter((user) => user.premium);
};
export default users;*/
const getPremUsers = (users) => {
  return users.filter((user) => user.premium);
};

export { getPremUsers, users as default };
