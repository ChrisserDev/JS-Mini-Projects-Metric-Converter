# Metric/Unit Converter

## Overview:

The Metric/Unit Converter project is a web application that facilitates the conversion between metric and imperial units for length, volume, and mass. 

It provides a user-friendly interface with input fields for value entry, a conversion button, and result sections for displaying converted values. 

The project utilizes HTML for structure, CSS for styling, and JavaScript for dynamic content and interactivity.

## Project Summary: 

### HTML Structure:

The HTML file defines includes input fields, buttons, and result sections for length, volume, and mass conversions.

### CSS Styling:
The styling is done using CSS, with a background image and color schemes for different sections.
The page is responsive, adjusting its layout for mobile screens using media queries.

## JavaScript Explained:

### 1. DOM Elements

Grabbing the elements using the DOM method, this fetches various HTML elements and assigns them to corresponding variables:
  inputValue: The input field where the user enters the value to be converted.
  convertBtn: The button that triggers the conversion process.
  meterResult, volumeResult, massResult: Paragraph elements where the conversion results are displayed.
  warning: A paragraph element for displaying a warning message.
  
![image](https://github.com/ChrisserDev/Mini-JS-Projects-Metric-Converter/assets/126911205/84ce9a7c-6aa4-4f4a-873a-14bb8931d4c0)
 
### 2. Initializing Variables:
 
These constants represent conversion factors for length, volume, and mass conversions. They are used in the conversion calculations.

![image](https://github.com/ChrisserDev/Mini-JS-Projects-Metric-Converter/assets/126911205/e4ed78b0-f625-42e7-bfd3-ea38bc70c800)

### 3. handleClicks Function
This function is executed when the conversion button is clicked. It performs the following tasks:

  Retrieves the value entered by the user (baseValue) from the inputValue element.
  
  Calculates conversion results for length, volume, and mass, rounding each result to 3 decimal places using toFixed(3).
  
  Updates the content of the HTML elements (meterResult, volumeResult, massResult) to display the calculated results.
  
  If no value is entered (baseValue is falsy), it displays a warning message (warning) for 2 seconds using setTimeout.
  
![image](https://github.com/ChrisserDev/Mini-JS-Projects-Metric-Converter/assets/126911205/6cf373da-1fad-4c75-85aa-d1e7b1c1fc27)
 
### 4. Event Listener:

This line adds an event listener to the "Convert" button (convertBtn). It listens for a click event, and when the button is clicked, it triggers the handleClicks function, initiating the conversion process.

![image](https://github.com/ChrisserDev/Mini-JS-Projects-Metric-Converter/assets/126911205/47b6e69b-5f48-4a8a-9f7e-d2da7524ed0e)
