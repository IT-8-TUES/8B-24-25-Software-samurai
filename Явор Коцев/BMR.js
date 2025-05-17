 class BMRCalculator {
        constructor(weight, height, age, gender) {
            this.weight = weight;
            this.height = height;
            this.age = age;
            this.gender = gender;
        }

        calculateBMR() {
            let bmr = 0;

            if (this.gender === "male") {
                bmr = 88.36 + (13.4 * this.weight) + (4.8 * this.height) - (5.7 * this.age);
            } else if (this.gender === "female") {
                bmr = 447.6 + (9.2 * this.weight) + (3.1 * this.height) - (4.3 * this.age);
            }

            return bmr.toFixed(2);  
        }
    }

    document.getElementById("dataForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value);
        const age = parseInt(document.getElementById("age").value);
        const gender = document.getElementById("gender").value;

        document.getElementById("loading").style.display = "block";
        document.getElementById("resultContainer").style.display = "none";

        const calculator = new BMRCalculator(weight, height, age, gender);
        const bmrResult = calculator.calculateBMR();

        setTimeout(function() {
            document.getElementById("loading").style.display = "none";
            document.getElementById("responseMessage").innerText = `Your BMR is: ${bmrResult} kcal/day`;
            document.getElementById("resultContainer").style.display = "block";
        }, 1000); 
    });