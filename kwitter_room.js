
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyCIoTpkn4wkmbCJ2AGRwyg7cFnmspA_ry8",
      authDomain: "kwitter2-f92fd.firebaseapp.com",
      databaseURL: "https://kwitter2-f92fd-default-rtdb.firebaseio.com",
      projectId: "kwitter2-f92fd",
      storageBucket: "kwitter2-f92fd.appspot.com",
      messagingSenderId: "814436838922",
      appId: "1:814436838922:web:a669c7292c6163e969f9f3"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Bienvenido "+ user_name + "!"

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       //Inicio del código
       console.log("room name: "+Room_names);
       row = "<div class='room_name' id="+Room_names+ " onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
       document.getElementById("output").innerHTML +=row;


      //Final del código
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}