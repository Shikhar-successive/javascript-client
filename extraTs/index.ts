import { diamond, equlatral_triangle } from './patterns';
import { hasPermissions, validateUsers } from './utils';
import { users } from './constants';


console.log('>>Diamond function with 4 rows');
diamond(4);

console.log('\n\n>> Equilatral Triangle function with 4 rows');
equlatral_triangle(4);

console.log("\n\n>> hasPermission function with (getUsers','head-trainer','read) arguments");
console.log(hasPermissions('getUsers', 'head-trainer', 'read'));

console.log("\n\n>> hasPermission function with ('getUsers','trainee','write') arguments");
console.log(hasPermissions('getUsers', 'trainee', 'write'));

console.log('\n\n>> validateUsers function');
validateUsers(users);