const checkAtmBalance = () => {
    return new Promise((resolve, reject) => {
        console.log("🏧 Connecting to Bank...");
        
        // Dynamic Logic: 50/50 chance of connection error
        let isServerUp = Math.random() > 0.5;

        setTimeout(() => {
            if (isServerUp) {
                resolve("💰 Balance: $5000"); // Success
            } else {
                reject("❌ Connection Timed Out!"); // Failure
            }
        }, 2000);
    });
};

// Demo using .then() / .catch()
console.log("--- Promise Demo Started ---");
checkAtmBalance()
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
    .finally(() => console.log("--- Session Closed ---"));