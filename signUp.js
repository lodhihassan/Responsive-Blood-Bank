var config = {
    apiKey: "AIzaSyBJLmdoaAnTj-Eae2lm3NO0Nc2l3-9ygK4",
    authDomain: "bloodbank-2d530.firebaseapp.com",
    databaseURL: "https://bloodbank-2d530.firebaseio.com",
    projectId: "bloodbank-2d530",
    storageBucket: "",
    messagingSenderId: "935545542203"
  };
  firebase.initializeApp(config);

var firebasedb=firebase.database()
var Btn=document.getElementById("signUpBtn")
Btn.addEventListener("click",()=>{
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let address=document.getElementById("address").value;
    let group=document.getElementById("bloodGrp").value;
    let type=document.getElementById("type").value;
    let num=document.getElementById("number").value
    // let data=localStorage.setItem("user-data",JSON.stringify(userObj))
    // let get=localStorage.getItem("user-data")
    // JSON.parse(get)
    var count=0;

    // document.getElementById("loaders").style.display="block";
    if(name===""||name===" "){
        document.getElementById("p1").style="block";
        document.getElementById("p1").innerHTML="*Please Fill this input"
    }
    else{
        document.getElementById("p1").innerHTML="";
        // document.getElementById("p1").style="none";
    }
    if(address===""||address===" "){
        document.getElementById("p2").style="block";
        document.getElementById("p2").innerHTML="*Please Fill this input"
    }
    else{
        document.getElementById("p2").innerHTML="";
    }
    if(email===""||email===" "){
        document.getElementById("p3").style="block";
        document.getElementById("p3").innerHTML="*Please Fill this input"
    }
    else{
        document.getElementById("p3").innerHTML="";
        // document.getElementById("p1").style="none";
    }
    if(password===""||password===" "){
        document.getElementById("p4").style="block";
        document.getElementById("p4").innerHTML="*Please Fill this input"
    }
    else if(password.length<8){
        document.getElementById("p4").style="block";
        document.getElementById("p4").innerHTML="*Please Enter Minimum 8 digit "
    }
    else{
        document.getElementById("p4").innerHTML="";
        // document.getElementById("p1").style="none";
    }
    if(num===""||num===" "){
        document.getElementById("p5").style="block";
        document.getElementById("p5").innerHTML="*Please Fill this input"
    }
    else if(num.length!==11){
        document.getElementById("p5").style="block";
        document.getElementById("p5").innerHTML="*Please Valid Number"
        // document.getElementById("p1").style="none";
    }
    else{
        document.getElementById("p5").innerHTML="";

    }
    if(group===""||group===" "){
        document.getElementById("p6").style="block";
        document.getElementById("p6").innerHTML="*Please Select Anyone"
    }
    else{
        document.getElementById("p6").innerHTML="";
        // document.getElementById("p1").style="none";
    }

    if(type===""||type===" "){
        document.getElementById("p7").style="block";
        document.getElementById("p7").innerHTML="*Please Select Anyone"
    }
    else{
        document.getElementById("p7").innerHTML="";
        // document.getElementById("p1").style="none";
    }    
    
    //  alert("")
    if(name!==""&& address!==""&&email!==""&& password!==""&&password.length
>7&& num.length===11 &&type!==""&&group!==""){
    alert("m")

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((success)=>{
            
            const userId = firebase.auth().currentUser.uid;
            let userObj={
                name,
                email,
                address,
                group,
                type,
                num,
                userId,
        
                
            }
            let data=localStorage.setItem("user-data",JSON.stringify(userObj))
    let get=localStorage.getItem("user-data")
    JSON.parse(get)
    if(type==="Doner"){

        
        firebase.database().ref("Doner-Data/")
        .push(userObj)
    }
    else{
        firebase.database().ref("Exeptor-Data/")
        .push(userObj)
    }
    })
    .then((success)=>{
        document.getElementById("loaders").style.display="none";
        swal({
            title: "Welcome",
            text: "You can use this email to procceed further features",
            icon: "success",
            button: "Done",
        })
        .then(() => {
            window.location = './signIn.html'
        })
    })

    

        .catch(function(error) {
            // Handle Errors here.
            document.getElementById("loaders").style.display="none";
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            swal({
                title: "Error",
                text: errorMessage,
                icon: "failed",
                button: "Done",
            })
            
            
        })
    
    }
    // else{
    //     firebase.auth().createUserWithEmailAndPassword(email, password)
    //     .then((success)=>{
            
    //         const userId = firebase.auth().currentUser.uid;
    //         let userObj={
    //             name,
    //             email,
    //             address,
    //             group,
    //             type,
    //             num,
    //             userId,
        
                
    //         }
    //         let data=localStorage.setItem("user-data",JSON.stringify(userObj))
    // let get=localStorage.getItem("user-data")
    // JSON.parse(get)
    //         firebase.database().ref("Exeptor-Data/")
    //             .push(userObj)
    //     })
    //     .then((success)=>{
    //         document.getElementById("loaders").style.display="none";
    //         swal({
    //             title: "Welcome",
    //             text: "You can use this email to procceed further features",
    //             icon: "success",
    //             button: "Done",
    //         })
    //         .then(() => {
    //             window.location = './signIn.html'
    //         })
    //     })

    

    //     .catch(function(error) {
    //         // Handle Errors here.
    //         document.getElementById("loaders").style.display="none";
    //         var errorCode = error.code;
    //         var errorMessage = error.message;
    //         // ...
    //         swal({
    //             title: "Error",
    //             text: errorMessage,
    //             icon: "failed",
    //             button: "Done",
    //         })
            
            
    //     })
        
    // }
});
 


