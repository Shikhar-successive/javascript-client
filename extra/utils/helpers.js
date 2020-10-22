export default function validateEmail(user_email)
{
     return /^[a-zA-Z0-9+_.-]+@successive.tech+$/.test(user_email);     
}