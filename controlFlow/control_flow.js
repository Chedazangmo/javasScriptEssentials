let userRole="admin";
let accessLevel;
let isLoggedIn=true;
let userMessage;
let userType="subscriber";
let userCategory;


if (userRole == "admin"){
    accessLevel = "Full access granted";
}else if (userRole == "manager"){
    accessLevel
 = "Limite access granted";
}else{
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

if (isLoggedIn){
    if (userRole == "admin"){
        userMessage= "welcome, admin!";
    }else{
        userMessage="welcome,User!";
    }
}else{
    userMessage="Please log in to access the syetm.";
}

console.log("User Message:", userMessage);

switch (userType){
    case "admin":
        userCategory = "Admistrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
    }

console.log("User Category:", userCategory);