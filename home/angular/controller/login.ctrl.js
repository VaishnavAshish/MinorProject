angular.module("starter",[])
 .controller("indexCtrl", function () {
    var login = this;
    login.SignUp = function(reg){
        console.log("fun called");
        var user = new Parse.User();
        user.set("username", reg.usr_n);
        user.set("email", reg.ema_u);
        user.set("number", reg.mob_u);
        user.set("password", reg.pas_u);
       


user.signUp(null, {
  success: function(user) {
    // Hooray! Let them use the app now.
    console.log("Sucessful login");
  },
  error: function(user, error) {
    // Show the error message somewhere and let the user try again.
    alert("Error: " + error.code + " " + error.message);
  }
});
    }
    })