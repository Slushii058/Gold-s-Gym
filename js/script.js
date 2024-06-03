function callUs() {
    alert("Call us at: 123-456-7890");
}

function emailUs() {
    window.location.href = "mailto:info@fitness.com";
}

function calculateBMI(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get the weight and height values from the input fields
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    // Validate the inputs
    if (weight && height && !isNaN(weight) && !isNaN(height)) {
        // Convert height from cm to meters
        const heightInMeters = height / 100;
        
        // Calculate BMI
        const bmi = weight / (heightInMeters * heightInMeters);
        
        // Display the result
        const resultDiv = document.getElementById('bmi-result');
        resultDiv.innerHTML = `<h2>Your BMI is ${bmi.toFixed(2)}</h2>`;
        
        // Provide some interpretation of the result
        if (bmi < 18.5) {
            resultDiv.innerHTML += "<p>You are underweight.</p>";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            resultDiv.innerHTML += "<p>You have a normal weight.</p>";
        } else if (bmi >= 25 && bmi < 29.9) {
            resultDiv.innerHTML += "<p>You are overweight.</p>";
        } else {
            resultDiv.innerHTML += "<p>You are obese.</p>";
        }
    } else {
        // Display an error message if inputs are invalid
        alert("Please enter valid weight and height values.");
    }
}

// Add event listener to the form
document.getElementById('bmi-form').addEventListener('submit', calculateBMI);
