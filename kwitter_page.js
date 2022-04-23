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
    console.log(firebase_message_id);
    console.log(message_data);
    var name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'> </h4>";
    message_with_tag = "<h4 class='message_h4'>" + message +"</h4>";
    like_button = "<button class='btn btn-warning' id="+ firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon thumbs-up'>Like: "+like+"</span> </button> <hr>";

    row = name_with_tag  + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML = row;

//End code
      } });  }); }


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

      getData();
}

function updateLike(message_id){
      console.log("click on like button " + message_id);
      button_id = message_id;
      likes=document.getElementById(button_id).value;
      updated_likes = Number(likes)+1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes

      });
}
