const fs = require("fs");

class MockDataGenerator {
  constructor(filePath) {
    this.filePath = "Resources/write_credentials.json";
  }

  // Method to generate mock data with a specified count
  generateMockData(count) {
    const data = [];

    for (let i = 1; i <= count; i++) {
      data.push({
        email: `user${i}@test.com`,
        password: `password${i}`,
      });
    }

    return data;
  }

  // Method to write the generated data to a JSON file
  writeMockDataToFile(count) {
    const mockData = this.generateMockData(count);
    const jsonData = JSON.stringify(mockData, null, 2);

    // Write the JSON data to the file path provided
    fs.writeFileSync(this.filePath, jsonData, "utf-8");
    console.log(`Mock data written to ${this.filePath}`);
  }
}

export default MockDataGenerator;