//dom queries
const chatList = document.querySelector(".chat-list");
const newChatForm = document.querySelector(".new-chat");
const newNameForm = document.querySelector(".new-name");
const updateMessage = document.querySelector(".update-mssg");
const rooms = document.querySelector(".chat-rooms");
//add a new chat
newChatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = newChatForm.message.value.trim();
  chatroom
    .addChat(message)
    .then(() => newChatForm.reset())
    .catch((err) => console.log(err));
});
//update username
newNameForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);
  //reset form
  newNameForm.reset();
  //show then hide after few sec
  updateMessage.innerText = `Your name is updated to ${newName}`;
  setTimeout(() => (updateMessage.innerText = ""), 3000);
});
//update chat room
rooms.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    chatUI.clear();
    chatroom.updateRoom(e.target.getAttribute("id"));
    chatroom.getChats((chat) => {
      chatUI.render(chat);
    });
  }
});
//check local storage for a name
const username = localStorage.username ? localStorage.username : "anon";
//class instance
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom("gaming", username);

//get chats and render
chatroom.getChats((data) => chatUI.render(data));
