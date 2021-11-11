function middleBody() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var reading = document.getElementById("reading");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    reading.innerHTML = "Read more";
    moreText.style.display = "none";  
  } else {
    dots.style.display = "none";
    reading.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function read() {
  var dot = document.getElementById("dot");
  var moreTexts = document.getElementById("mores");
  var readValue = document.getElementById("readValue");

  if (dot.style.display === "none") {
    dot.style.display = "inline";
    readValue.innerHTML = "Read More";
    moreTexts.style.display = "none";
  } else {
    dot.style.display = "none";
    readValue.innerHTML = "Read Less";
    moreTexts.style.display = "inline";
  }
}


//popup signin js

var userData=JSON.parse(localStorage.getItem("userDataHM")) || [];
  document.getElementById("signup").addEventListener("click",signUp);
  function signUp(){
    document.getElementById("container").style.visibility="hidden";
    document.getElementById("container2").style.display="block";
    document.getElementById("container2").style.position="absolute";
    document.getElementById("container2").style.visibility="visible";

  }
  document.getElementById("x").addEventListener("click",close);
  function close(){
    document.getElementById("container").style.visibility="hidden";
    document.getElementById("container2").style.visibility="hidden";
  }
  document.getElementById("X").addEventListener("click",close);
  function close(){
    document.getElementById("container").style.visibility="hidden";
    document.getElementById("container2").style.visibility="hidden";
  }
  document.getElementById("beMember").addEventListener("click",beMember);
  function beMember(){
    var email=document.getElementById("memail").value;
    var password=document.getElementById("mpassword").value;
    var dob=document.getElementById("dobalert").value;
  
    if(email=="" && password=="" || dob==""){
      document.getElementById("emailalert").textContent="Enter email address";
      document.getElementById("passwordalert").textContent="please enter a password";
      document.getElementById("dobalert").textContent="You have to enter a valid birthdate";
    }
    else if(email=="" && password==""){
      document.getElementById("emailalert").textContent="Enter email address";
      document.getElementById("passwordalert").textContent="please enter a password";
    }else if(email==""){
      document.getElementById("emailalert").textContent="Enter email address";
    }else if(password==""){
      document.getElementById("passwordalert").textContent="please enter a password";
    }
    else{
    var data={
      email:email,
      password:password,
    }
    userData.push(data);
    localStorage.setItem("userDataHM",JSON.stringify(userData));
    console.log(userData);
    alert("You're now a member!")
    window.location.href="kid.html"
  }
  }
  document.getElementById("back").addEventListener("click", back);
function back(){
  document.getElementById("container").style.position="absolute";
  document.getElementById("container").style.visibility="visible";
    document.getElementById("container2").style.visibility="hidden";
}
document.getElementById("signin").addEventListener("click",signin);

function signin(){
  var flag=0;
  var email=document.getElementById("semail").value;
  var password=document.getElementById("spassword").value;
  for(var i=0;i<userData.length;i++){
    if(userData[i].email==email && userData[i].password==password){
      flag=1;
      check=1;
      checksignin="signed";
      window.location.href="kid.html";
      document.getElementById("signinmain").textContent="My Account";
    }
  }
  if(flag==0){
    document.getElementById("alert").style.display="block";
  }
}


//signin for kids page

document.getElementById("signinmain").addEventListener("click",signinmain);
function signinmain(event){
  console.log("signned in main");
  document.getElementById("container").style.position="absolute";
  document.getElementById("container").style.visibility="visible";
  document.getElementById("container").style.display="block";
}

document.getElementById("signinmain").style.backgroundColor="transparent";
document.getElementById("signinmain").style.border="none";

document.getElementById("addmore").addEventListener("click",addmore);
function addmore(){
  var more=document.getElementById("moreDetails").style.display;
  
  if(more=="none"){
  document.getElementById("moreDetails").style.display="grid";
  document.getElementById("plus").style.display="none";
  document.getElementById("minus").style.display="inline-block";
  document.getElementById("container2").style.height="1670px";
  document.getElementById("changecolor").style.color="red";
}else{
  document.getElementById("moreDetails").style.display="none";
  document.getElementById("plus").style.display="inline-block";
  document.getElementById("minus").style.display="none";
  document.getElementById("container2").style.height="1110px";
  document.getElementById("changecolor").style.color="black";
}
}
