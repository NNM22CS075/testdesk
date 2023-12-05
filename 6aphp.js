document.addEventListener("DOMContentLoaded", function () {
    // This part ensures that the following code is executed only when the HTML document is fully loaded.

    const loginForm = document.getElementById("login");
    const messageContainer = document.getElementById("message");
    // Retrieve references to the HTML elements with the IDs "login" and "message".

    loginForm.addEventListener("submit", function (e) {
        // Attach an event listener to the form with the ID "login" for the "submit" event.

        e.preventDefault();
        // Prevent the default form submission behavior, which would cause a page reload.

        
        // Create a new FormData object from the form with the ID "login". This object represents the form data.

        fetch("6A.php", {
            method: "POST",
            body: formData,
        })

        
        // Use the fetch function to make a POST request to the "6A.php" server-side script.
        // The request includes the form data in the request body.

        .then((response) => {
            console.log("Response status:", response.status);
            // Log the HTTP response status to the console.

            if (!response.ok) {
                throw new Error("Network response was not ok");
                
            }
            // If the response status is not okay (e.g., 404 Not Found), throw an error.

            return response.json();
        })
        // Parse the response body as JSON. The response.json() method returns a promise.

        .then((data) => {
            console.log("Data received:", data);
            // Log the JSON data received from the server.

            if (data.success) {
                showMessage("success", "Login successful!");
            } else {
                showMessage("error", "Invalid username or password.");
            }
            // Check the 'success' property in the received data.
            // If true, show a success message; otherwise, show an error message.
        })

        .catch((error) => {
            console.error("Error:", error);
            showMessage("error", "An error occurred. Please try again later.");
        });
        // Handle any errors that occurred during the fetch operation.
    });

    function showMessage(type, text) {
        messageContainer.innerHTML = `<div class="${type}">${text}</div>`;
    }
    // Define a function called showMessage that updates the content of the HTML element with the ID "message".
});

