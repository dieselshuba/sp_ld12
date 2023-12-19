document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("saveBtn").addEventListener("click", function() {
      const smallestDiameter = parseFloat(document.getElementById("smallestDiameter").value);
      const largestDiameter = parseFloat(document.getElementById("largestDiameter").value);
      const numCircles = parseInt(document.getElementById("numCircles").value);
  
      const circleInfo = {
        smallestDiameter,
        largestDiameter,
        numCircles
      };

      console.log("Circle Information:", circleInfo);
  
      const outputDiv = document.getElementById("output");
      outputDiv.innerHTML = "";
  
      if (
      !isNaN(smallestDiameter) &&
      !isNaN(largestDiameter) &&
      !isNaN(numCircles) &&
      smallestDiameter > 0 &&
      largestDiameter > 0 &&
      numCircles > 0 &&
      smallestDiameter < largestDiameter
      ) {
        const diameterIncrement = (largestDiameter - smallestDiameter) / (numCircles - 1);
        let currentDiameter = smallestDiameter;
  
        for (let i = 0; i < numCircles; i++) {
          const circleDiameter = currentDiameter.toFixed(2);
          const circleArea = Math.round(Math.PI * Math.pow(circleDiameter / 2, 2));
          
          const circleOutput = `Circle ${i + 1}: Diameter = ${circleDiameter}, Area = ${circleArea}`;
          console.log(circleOutput);
          outputDiv.innerHTML += circleOutput + "<br>";
          
          currentDiameter += diameterIncrement;
        }
        saveBtn.style.backgroundColor = "#28a745";
      } else {
        outputDiv.innerHTML = "Please fill in all fields with valid numbers.";
        saveBtn.style.backgroundColor = "";
      }
    });
  });
  