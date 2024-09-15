const fs = require('fs');
const path = require('path');

class UpdateJSON {
  static  updateJSON() {
    try {
      // Use Playwright to evaluate the fetch request inside the browser context
      const jsonData = await .evaluate(async () => {
        // Fetch the JSON file from the provided URL
        const response = await fetch("Resources/mock_data.json");
        const data = await response.json();

        // Check if data exists and has at least one element
        if (data.length > 0) {
          data.shift(); // Remove the top data (first object)
        }

        return data; // Return the modified data
      });

      // Log or use the modified JSON data outside the browser context
      console.log(jsonData);
      return jsonData;
      
    } catch (error) {
      console.error("Error fetching or processing the JSON file:", error);
    }
  }
}

export default UpdateJSON;