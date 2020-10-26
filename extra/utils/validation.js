let users = [
     {
          traineeEmail : "shikhar.singh@successive.tech",
          reviewerEmail : "naresh.kumar@tcs.tech",
     },
     
     {
          traineeEmail : "niyati.pavar@tcs.tech",
          reviewerEmail : "nilesh.agarwal@successive.tech",
     },

     {
          traineeEmail : "sam.sharma@wipro.tech",
          reviewerEmail : "vimal.avasti@wipro.tech",
     },

     {
          traineeEmail : "shyam.bansal@successive.tech",
          reviewerEmail : "@successive.techamit.kumar",
     },

     {
          traineeEmail : "rohan.kumawat@google.tech",
          reviewerEmail : "suraj.kumar@google.tech",
     },

]

function validateEmail(user_email)
{
     return /^[a-zA-Z0-9+_.-]+@successive.tech+$/.test(user_email);     
}

function validateUsers(users)
{    
     let user_list = [];
     let valid_user = [];
     let invalid_user = [];
     users.forEach(function({traineeEmail:email_trainee ,reviewerEmail:email_reviewer}) 
     {
          user_list.push(email_trainee);
          user_list.push(email_reviewer);
     });
     user_list.forEach(function(user)
     {
          if(validateEmail(user)){
               valid_user.push(user);
          }
          else{
               invalid_user.push(user);
          }
     });
     console.log("\nValid user list",valid_user,"\nValid user count",valid_user.length);
     console.log("\nInvalid user list",invalid_user,"\nInvalid user count",invalid_user.length);     
}

validateUsers(users);