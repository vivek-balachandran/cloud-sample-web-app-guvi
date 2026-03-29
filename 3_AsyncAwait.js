// We reuse the same Promise from before
const checkAtmBalance = () => {
    return new Promise((resolve, reject) => {
        let isServerUp = Math.random() > 0.5;
        setTimeout(() => {
            isServerUp ? resolve("$5000") : reject("Bank Down");
        }, 5000);
    });
};

// THE MODERN WAY
async function showBalanceApp() {
    console.log("📱 Opening App...");
    
    try {
        // Await pauses the code here
        const balance = await checkAtmBalance();
        console.log("✅ Your balance is: " + balance);
    } catch (error) {
        // If the promise rejects, we teleport here
        console.log("🚨 Error: " + error);
    } finally {
        console.log("🏁 Thank you for using our App.");
    }
}

showBalanceApp();
showBalanceApp();


const anyCallBackFn = function() {
    console.log("Any Call Back Function is calling...");
}

const newPromise = new Promise( (resolve, reject) => {
    console.log("Promise is calling");
    resolve("Success");
});

setTimeout(anyCallBackFn, 3000);


--------------------------

console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

async function asyncFunc() {
  console.log("Async");
  await Promise.resolve();
  console.log("Await");
}

asyncFunc();
console.log("End");





