// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBVdWRmdVp4uic-VDpkRnqC6ZkVrgz26nE",
      authDomain: "kwitter-dde1b.firebaseapp.com",
      databaseURL: "https://kwitter-dde1b-default-rtdb.firebaseio.com",
      projectId: "kwitter-dde1b",
      storageBucket: "kwitter-dde1b.appspot.com",
      messagingSenderId: "563660377415",
      appId: "1:563660377415:web:5d6c0df95fd58cd2885062"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

var user_name  = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");

function send(){
      var msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name , 
            message: msg ,
            like: 0
      });
      document.getElementById("msg").value = "";
}
