var config = {
  apiKey: "AIzaSyBJLmdoaAnTj-Eae2lm3NO0Nc2l3-9ygK4",
  authDomain: "bloodbank-2d530.firebaseapp.com",
  databaseURL: "https://bloodbank-2d530.firebaseio.com",
  projectId: "bloodbank-2d530",
  storageBucket: "",
  messagingSenderId: "935545542203"
};
firebase.initializeApp(config);
var firebaseDb = firebase.database();

window.addEventListener("load", function() {
  var users = document.getElementById("data");
  firebaseDb.ref(`Exeptor-Data`).on("child_added", snap => {
    users.innerHTML += user(snap.val(), snap.key);
    // this.console.log(firebase.auth().currentUser.group)

    // this.console.log(snap.val().type.currentUser)
    // this.alert(a)
    // let data=localStorage.setItem("user-data",JSON.stringify(userObj))
    // let get=localStorage.getItem("user-data").name
    // JSON.parse(get)
    let get = JSON.parse(localStorage.getItem("user-data"));
    console.log(get.name);
    document.getElementById("l2").innerHTML = get.name;
  });
});
function user(snap, key) {
  //   if(snap.val().type==="Donor"){
  //   // window.location="./index.html";

  // alert("")}
  // return
  return `
    <div class="person">
    <div class="card1">
    <img
    src="https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png"
    class="card-img-top"
    alt="..."
    
    />
    <div class="card-body"><h5 class="card-title">${snap.name.toUpperCase()}</h5></div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">Blood Type: ${snap.type}</li>
    <li class="list-group-item">Blood Group: ${snap.group}</li>
    <li class="list-group-item">ADDRESS: ${snap.address}</li>
    <li class="list-group-item">Contact: ${snap.num}</li>
    </ul>
    </div>
    </div>
    
    `;
}
function logout() {
  firebase
    .auth()
    .signOut()
    .then(function() {
      // Sign-out successful.
      localStorage.setItem("user-data", JSON.stringify({ user: "null" }));
      window.location = "./signIn.html";
    })
    .catch(function(error) {
      // An error happened.
      let message = error.message;
      alert(message);
    });
}
