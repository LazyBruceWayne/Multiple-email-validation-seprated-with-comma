var emails = emailList.replace(/\s/g,'').split(",");
var valid = true;
var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

for (var i = 0; i < emails.length; i++) {
     if( emails[i] == "" || ! regex.test(emails[i])){
         valid = false;
     }
}
