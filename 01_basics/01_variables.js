const accountId=1265748;
let accountEmail="rachna@google.com";
var accountPassword="Rachna@123";
accountCity="Delhi";  /* we should not decalre a varibale without var or let or const because it will 
create a global variable and it will create a problem in the code and it will
 be difficult to debug the code and it will be difficult to maintain the code so we should always declare a variable with var 
 or let or const and we should not use var because it will create a function scoped variable and it will create a problem in the code and it will be difficult to debug the code and  */
 let accountState;
// accountId=2737774
console.log(accountId);
accountEmail="peterparker@gmail.com";
accountPassword="Peter@123";
accountCity="Mumbai";
console.table([accountId,accountEmail,accountPassword,accountCity]);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/* so do not use the var because it will create the function scoped and block scoped error and this will 
cause issues in the code and the var is function scoped so whenever we use the same 
variable and chage it somewhere else it will change in every varbale value so this 
is not oky in programming an dlet willonly chnaged fro particular block */
