var config = {
    apiKey: "AIzaSyBJLmdoaAnTj-Eae2lm3NO0Nc2l3-9ygK4",
    authDomain: "bloodbank-2d530.firebaseapp.com",
    databaseURL: "https://bloodbank-2d530.firebaseio.com",
    projectId: "bloodbank-2d530",
    storageBucket: "",
    messagingSenderId: "935545542203"
  };
  firebase.initializeApp(config);


var Btn=document.getElementById("signInBtn")
Btn.addEventListener("click",()=>{
    // let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    // let type=document.getElementById("type").value
//  alert("")



  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((succees)=>{
    window.location="./select1.html"    
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
    // ...
  });

        
        
    // })
    });
    
