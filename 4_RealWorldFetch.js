async function getUserData() {
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    
    console.log("🌐 Calling Server...");

    try {
        // Step 1: Fetch the data (returns a promise)
        const response = await fetch(url);

        // Check if the response is okay (status 200)
        if (!response.ok) {
            throw new Error("User not found!");
        }

        // Step 2: Convert the "Stream" to JSON (also returns a promise)
        const user = await response.json();

        console.log("👤 User Name: " + user.name);
        console.log("📧 User Email: " + user.email);

    } catch (error) {
        console.log("🌐 Network Error: " + error.message);
    } finally {

    }
}

getUserData();