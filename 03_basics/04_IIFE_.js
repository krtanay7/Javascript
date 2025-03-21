
// Immediately Invoked Function Expressions (IIFE)
// IIFEs prevent pollution of the global JS scope.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();      // '()' works as chai()


( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TO ${name}`);
} )('Tanay')