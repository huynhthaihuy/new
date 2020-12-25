$(function(){
  register()
})
  function register(){
  let username = $("#username").val();
  let password = $("#password").val();
  let confirmps = $("#confirm").val();
  let phone = $("#phone").val();
  let address = $("#address").val();
  if(username==null || username == "" || username.length<6 || username.length>20){
    $("#errorname").innerHTML="Username Không được để trống";
    return false;
  }
  if(password.length<6 || password.length>20 || password==""){
    $("#errorpass").innerHTML ="PassWord không chính xác";
    return false;
  }
  if(confirmps !== password){
    $("#errorconfirm").innerHTML = "Sai thông tin";
    return false;
  }
  if(phone.length !== 10){
    $("#errorphone").innerHTML = "Cần phải 10 số";
  }
  if(address.length <= 20){
    $("#erroraddress").innerHTML = "Cần phải hơn 20 ký tự";
  }
  let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('student')) : [];

  students = {
     'Fullname': username,
     'Password': password,
     'Confirmps': confirmps,
     'Phone': phone,
     'Address': address
   }
   let json = JSON.stringify(students)
   localStorage.setItem('students',json)
  }
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
  