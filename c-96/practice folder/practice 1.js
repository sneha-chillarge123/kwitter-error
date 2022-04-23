
var firebaseConfig = {
    apiKey: "AIzaSyBVdWRmdVp4uic-VDpkRnqC6ZkVrgz26nE",
    authDomain: "kwitter-dde1b.firebaseapp.com",
    databaseURL: "https://kwitter-dde1b-default-rtdb.firebaseio.com",
    projectId: "kwitter-dde1b",
    storageBucket: "kwitter-dde1b.appspot.com",
    messagingSenderId: "563660377415",
    appId: "1:563660377415:web:5d6c0df95fd58cd2885062"
  };
  
  
firebase.initializeApp(firebaseConfig);

    function add_user(){
        var username = document.getElementById("user_name").value;
        console.log(username);
        firebase.database().ref("/").child(username).update({
            purpose: "adding user"
        });
    }