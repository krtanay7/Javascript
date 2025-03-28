console.log("promises");

//The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//A Promise is in one of these states:

            // pending: initial state, neither fulfilled nor rejected.
            // fulfilled: meaning that the operation was completed successfully.
            // rejected: meaning that the operation failed.


// A Promise in JavaScript is a way to handle asynchronous operations. 
// This means when a task takes time to complete (like fetching data from an API, reading a file, or database queries), instead of waiting for it, JavaScript moves on and handles it using Promises.

//************FETCH API***************************************************************************************

//The Fetch API provides an interface for fetching resources (including across the network). 
//It is a more powerful and flexible replacement for XMLHttpRequest.

//The Fetch API uses Request and Response objects (and other things involved with network requests), as well as related concepts such as CORS and the HTTP Origin header semantics.

//A fetch() promise only rejects when the request fails, for example, because of a badly-formed request URL or a network error.
//A fetch() promise does not reject if the server responds with HTTP status codes that indicate errors (404, 504, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.