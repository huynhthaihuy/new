var userArrays = new Array();

var user = {
    setUser: function(userName, userPassword, userPhone, userAddress) {
        this.userName = userName;
        this.userPassword = userPassword;
        this.userPhone = userPhone;
        this.userAddress = userAddress;
    },
    getUserName: function() {
        return userName;
    },
    getPassword: function() {
        return userPassword;
    }
}

function setThreeUserToLocalStorage() {
    var userOne = new user.setUser("HuyML", "huyBoLao", "2222222222", "Trung Nu Vuong");
    var userTwo = new user.setUser("DienML", "dienBoLao", "2222222222", "Trung Nu Vuong");
    var userThree = new user.setUser("NghiaDepZai", "NghiaXinhDep", "2222222222", "Trung Nu Vuong");
    userArrays.push(userOne);
    userArrays.push(userTwo);
    userArrays.push(userThree);
    window.localStorage.setItem("userArrays", JSON.stringify(userArrays));
}

$(document).ready(function() {
    setThreeUserToLocalStorage();
    $("#register").click(function() {
        let username = $("#username").val();
        let password = $("#password").val();
        let confirmps = $("#confirmps").val();
        let phone = $("#phone").val();
        let address = $("#address").val();
        if (username == null || username == "" || username.length < 6 || username.length > 20) {
            $("#errorname").innerHTML = "Username Không được để trống";
            return false;
        }
        if (password.length < 6 || password.length > 20 || password == "") {
            $("#errorpass").innerHTML = "PassWord không chính xác";
            return false;
        }
        if (confirmps !== password) {
            $("#errorconfirm").innerHTML = "Sai thông tin";
            return false;
        }
        if (phone.length !== 10) {
            $("#errorphone").innerHTML = "Cần phải 10 số";
        }
        if (address.length <= 20) {
            $("#erroraddress").innerHTML = "Cần phải hơn 20 ký tự";
        }
        let newUser = new user.setUser(username, password, phone, address);
        userArrays.push(newUser);
        localStorage.clear();
        localStorage.setItem('userArrays', JSON.stringify(userArrays));
    });
    $("#login").click(function() {
        let username = $("#usernameLogin").val();
        let password = $("#passwordLogin").val();
        let flag = userArrays.find(user => {
            return user.userName === username && user.userPassword === password
        });
        if (flag.userName !== undefined) {
            var text = $("#welcomeMessage").text();
            $("#welcomeMessage").text("Hello " + flag.userName);
            $("#logout").text("Logout");
            $("#close").click();
        }
    });
    $("#logout").click(function() {
        var text = $("#welcomeMessage").text();
        $("#welcomeMessage").text("Login/Register");
        $("#logout").text("");
    });
});

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}