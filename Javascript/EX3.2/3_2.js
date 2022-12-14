/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.
    Submit the file to Hive
*/

// From function declarations to explicit and implicit return functions (one of each).
function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}
//exlipcit
const welcomeExp = function(){
   return 'welcome to Appleseeds Bootcamp'
} 
//implicit
console.log(welcomeExp());

const welcomeImp = () =>{
    return 'welcome to Appledeeds Bootcamp';
}
console.log(welcomeImp());


function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}
//explicit
const powerExp = a => Math.pow(a, 2);
console.log(powerExp(2,2));

//implicit
const powerImp = (a) => {
    return Math.pow(a, 2);
}
console.log(powerImp(2));

// From function expressions to IIFE functions.
const squareRoot = a => Math.sqrt(a);

(function(a){
   return Math.sqrt(a);
})();



const randomNumbers = (a, b) => Math.random() * (a - b) + b;

((a,b)=>{
   return Math.random()*(a-b)+b
  
})();

