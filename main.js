function login()
    
    {
        let username=document.getElementById("name").value;
        let user_password=document.getElementById("pwd").value;
        if (username === "" || user_password === "") {
            document.getElementById("message").innerHTML = "Please fill in all fields.";
            return false;
        }

        return true;
        
    }

    


