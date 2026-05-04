//function 
function createSession(username){
    let loginCount=0;
    return function(){
            loginCount++;
            console.log(`user is ${username},Login count is${loginCount}`)
    }
};
const user1=createSession("tanvi");
user1()
user1()


console.dir(user1);

//question1
//create a function that returns a closure-based   counter function 
//which ,whne called reportedly,increments and remembers the
// count privately accross calls

//question
// //create a function createBankAccount that closeure to keep
//a private balance  and provides deposit (amount),withdraw (amount)
//and getbalacnce() methods to manage it 

//
import("./dynamicmath.js").then(()=>{
    //
    //question:
    //design  a student management  system  where you  
    //to access functions like get 
    //and implement 
})