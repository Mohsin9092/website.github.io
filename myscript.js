// ------------------------------validation for login form using javascript ----------------------------------------------------------
function call()
{
    var username =document.getElementById('name').value
    var paskey=document.getElementById("password").value
    
    // else{
    //     alert( username +  " Log In Sucessful");
    // }
    var usernamePattern = /^[a-z]{3,12}$/;
    var paskeyPattern = /^[0-9]{3,8}$/;
    if (!usernamePattern.test(username))
        {
        alert(  " Username Must Be 3-12 Characters");
        // return false;
         }
    if (!paskeyPattern.test(paskey))
        {
        alert(  " Password Must Be 6-8 Digit Only");
        // return false;
        }
        if(username==="mohsin" && paskey==="123456")
        {    alert(username+" Login Successful");
        // return true;
        }
        else
        {
            alert("Check Your Username and Password");
            // return false;
        }
}

// Coding for form onsubmit-------------------------------------------------
function logincheck()
{
    var username = document.getElementById('name').value
    var password = document.getElementById('password').value
    if (username==="mohsin" && password==="123456")
    {
        window.location.href="Courses.html";
        return false;
    }
    else
    {
        alert("You need to login first with correct credintials");
        return false;
    }
}
