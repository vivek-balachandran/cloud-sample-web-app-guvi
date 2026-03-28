// We reuse the same Promise from before
const checkAtmBalance = () => {
    return new Promise((resolve, reject) => {
        let isServerUp = Math.random() > 0.5;
        setTimeout(() => {
            isServerUp ? resolve("$5000") : reject("Bank Down");
        }, 2000);
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