import validateEmail from './helpers'
export default function validateUsers(users)
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