// This function simulates a long task (like a database query)
function startTask(taskName, callback) {
    console.log(`⏳ Starting: ${taskName}`);
    
    let taskFinishedFn = () => {
        console.log(`✅ Finished: ${taskName}`);
        callback(); 
    };

    // setTimeout is asynchronous
    setTimeout(taskFinishedFn, 3000); // 3 seconds delay
}

console.log("1. I am opening the shop.");

startTask("Cleaning the floor", () => {
    console.log("3. The floor is now sparkling!");
});

console.log("2. I am drinking coffee while the floor is being cleaned.");
// Note for students: Notice how "2" prints BEFORE "3"!



function fetchData(callback) { 
    setTimeout(() => {
        console.log("Data fetched!");
        callback(); // Execute callback after fetching data 
    }, 2000);
}


let callBackFn = function() {
    console.log("Processing data..."); 
};

fetchData(callBackFn);



let step3Fn = () => {
    console.log("Step 2"); 
    
    setTimeout(() => {
        console.log("Step 3"); 
    }, 1000);
}

let step2Fn = () => { 
    console.log("Step 1"); 
    setTimeout(step3Fn, 1000); 
}

setTimeout(step2Fn, 1000);






