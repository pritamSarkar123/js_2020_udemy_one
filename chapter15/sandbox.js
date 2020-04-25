const list = document.querySelector("ul");
const form = document.querySelector("form");
const button = document.querySelector("button");
const addRecipe = (recipe, id) => {
  let time = recipe.created_at.toDate();
  let html = `
        <li data-id="${id}">
            <div>${recipe.title}</div>
            <div>${time}</div>
            <button class="btn btn-danger btn-sm my-2">delete</button>
        </li>
    `;
  list.innerHTML += html;
};
const deleteRecipe = (id) => {
  const recipes = document.querySelectorAll("li");
  recipes.forEach((recipe) => {
    if (recipe.getAttribute("data-id") === id) {
      recipe.remove();
    }
  });
};
/////////////////////////////////////// get docs
// db.collection("recipies")
//   .get()
//   .then((snapshot) => {
//     snapshot.docs.forEach((doc) => {
//       //console.log(doc.data().created_at.toDate());
//       //console.log(doc.id);
//       addRecipe(doc.data(), doc.id);
//     });
//   })
//   .catch((err) => console.log(err));
///////////////////////////// realtime event listener
const unsub = db.collection("recipies").onSnapshot((snapshot) => {
  //console.log(snapshot.docChanges());
  snapshot.docChanges().forEach((change) => {
    const doc = change.doc;
    if (change.type === "added") {
      addRecipe(doc.data(), doc.id);
    } else if (change.type === "removed") {
      deleteRecipe(doc.id);
    }
  });
});

//add documents
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const now = new Date();
  const recipe = {
    title: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now),
  };
  db.collection("recipies")
    .add(recipe)
    .then(() => {
      console.log("recipy added");
    })
    .catch((err) => {
      console.log(err);
    });
});
//deleting data
list.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const id = e.target.parentElement.getAttribute("data-id");
    db.collection("recipies")
      .doc(id)
      .delete()
      .then(() => {
        console.log("recipe deleted");
      })
      .catch((err) => console.log(err));
  }
});
//unsub from db changes
button.addEventListener("click", () => {
  unsub();
  console.log("unsubscribed from db");
});
