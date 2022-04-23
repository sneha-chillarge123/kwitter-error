
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
      
      var user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome  "  + user_name + "  !!";

      function add_room(){
         var room_name = document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
               purpose: "adding roomname"
         });
         localStorage.setItem("room_name" , room_name);
         window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room name- " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_name" , name);
   window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}
