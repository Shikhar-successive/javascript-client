export default function validateEmail(UserEmail: string): boolean {
return /^[a-zA-Z0-9+_.-]+@successive.tech+$/.test(UserEmail);
}