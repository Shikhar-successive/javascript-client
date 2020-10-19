// Initialization of object
let user = {
     id : "",
     name : "",
     status : "",

     details : function()
     {
          console.log(this.id+" "+this.name+" "+this.status);
          
     }
};

user.id = 1;
user.name = "jeff";
user.status = "active";
user.details();

// Create Object

const obj = Object.create(user);
obj.id = 3;
obj.name = "trump";
obj.status = "active";
obj.details();

// Object Entries

const user3 = {
     name : "obama",
     status : "inacticve",
};

for (const [key,value] of Object.entries(user3))
{
     console.log([key]+": "+[value]);
}

// Object freez
user3.name = "putin";
user3.status = "active";
Object.freeze(user3);
user3.name = "Modi";
user3.status = "active";
console.log(user3.name)

for (const [key,value] of Object.entries(user3))
{
     console.log([key]+": "+[value]);
}

// Check if object is Frozen

console.log(Object.isFrozen(user3));

// Define Properties

let user2 = {};
Object.defineProperties(user2,{
     'property1':
     {
          value: "property 1",
     },

     'property2':
     {
          value: "ID property",
     }
});
console.log(user2.property1);
console.log(user2.property2);

// Assign values of Object From entries(array) to defined object

let user4 = {
     id : "",
     name : "",
     status : "",

     details : function()
     {
          console.log(this.id+" "+this.name+" "+this.status);
          
     }
};

const user4_arr = [["id",1] , ["name","Bush"] , ["status","inactive"]];
const user4_obj = Object.fromEntries(user4_arr);
Object.assign(user4,user4_obj)
user4.details();

// Print Object Keys

console.log(Object.keys(user4));

// Object is Extensible , Prevent Extensions

console.log(Object.isExtensible(user4));
Object.preventExtensions(user4);
console.log(Object.isExtensible(user4));

// Comparing Object 

console.log(Object.is(user,user4));
console.log(Object.is(user,user));