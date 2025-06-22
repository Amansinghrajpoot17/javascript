// immediately invoked function execution
(
    function chai(){
        console.log(`DB CONNECTED`)
    }
    
)();  // because we have to end our iffee function to execute the new function
 
(function aurcode(){
    console.log(`db connection`)
})();
// because of global scope pollution we use  iifee 
(
    (name)=>{
        console.log(`hii,${name}`);
    }
)("AARJOO")
// we can pass parameter innarrow function also