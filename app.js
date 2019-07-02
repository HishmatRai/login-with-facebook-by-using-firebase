function facebookLogin(){
    // alert("facecook")
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
        'display': 'popup'
      });
      firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log("result====>", result )
      }).catch(function(error) {
          console.log("error======>", error)
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // var email = error.email;
        // var credential = error.credential;
        // ...
      });
}
