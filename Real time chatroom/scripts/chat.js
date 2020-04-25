//adding new chat documents
//setting up a real-time listener to get new chats
//updating the username
//updating the room
class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection("chats");
    this.unsub;
  }
  async addChat(message) {
    //format a chat obj
    const now = new Date();
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now),
    };
    //save the chatroom
    const response = await this.chats.add(chat);
    return response;
  }
  getChats(callback) {
    this.unsub = this.chats
      .where("room", "==", this.room)
      .orderBy("created_at")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            //the updates ui
            callback(change.doc.data());
          }
        });
      });
  }
  updateName(username) {
    this.username = username;
    localStorage.setItem("username", username);
  }
  updateRoom(room) {
    this.room = room;
    console.log("room updated");
    if (this.unsub) {
      this.unsub();
    }
  }
}

// chatroom
//   .addChat("hello world")
//   .then(() => console.log("chat added"))
//   .catch((err) => console.log(err));

// setTimeout(() => {
//   chatroom.updateRoom("gaming"); //unsubscribe
//   chatroom.updateName("gandu");
//   chatroom.getChats((data) => {//subscribe
//     console.log(data);
//   });
//   chatroom.addChat("hello world 2");
// }, 3000);
