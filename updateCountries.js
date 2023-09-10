const fs = require('fs');

// Read the JSON file
const readFile = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading the JSON file:', error);
    return [];
  }
};

// Write the JSON data back to the file
const writeFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    console.log('Data has been written to the file:', filePath);
  } catch (error) {
    console.error('Error writing the JSON data to the file:', error);
  }
};

// Function to add an empty "documents" array to each country
const addEmptyDocuments = (countries) => {
  return countries.map((country) => {
    // Add an empty "documents" array to each country
    country.documents = [];
    return country;
  });
};

// Specify the path to the JSON file
const filePath = 'countries.json';

// Read the JSON data from the file
const countriesData = readFile(filePath);

// Add empty "documents" arrays
const countriesDataWithEmptyDocuments = addEmptyDocuments(countriesData);

// Write the updated data back to the file
writeFile(filePath, countriesDataWithEmptyDocuments);
