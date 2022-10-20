var firebaseConfig = {
    apiKey: "AIzaSyA1XEU7LeJoHrhd_eGR2O7cKrk9rMIzjS0",
    authDomain: "kwitter-8d3c3.firebaseapp.com",
    databaseURL: "https://kwitter-8d3c3-default-rtdb.firebaseio.com",
    projectId: "kwitter-8d3c3",
    storageBucket: "kwitter-8d3c3.appspot.com",
    messagingSenderId: "1081603511444",
    appId: "1:1081603511444:web:4554b20723f73f30035081"
  };
  
 
  firebase.initializeApp(firebaseConfig);

  function addUser(){
    var username=document.getElementById("name").value;
    firebase.database().ref("/").child(username).update({
        purpose:"adding User......."
    })
  }