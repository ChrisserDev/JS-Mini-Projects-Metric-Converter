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
 
### 2. Initializing Variables:
 
These constants represent conversion factors for length, volume, and mass conversions. They are used in the conversion calculations.

### 3. handleClicks Function
This function is executed when the conversion button is clicked. It performs the following tasks:

  Retrieves the value entered by the user (baseValue) from the inputValue element.
  
  Calculates conversion results for length, volume, and mass, rounding each result to 3 decimal places using toFixed(3).
  
  Updates the content of the HTML elements (meterResult, volumeResult, massResult) to display the calculated results.
  
  If no value is entered (baseValue is falsy), it displays a warning message (warning) for 2 seconds using setTimeout.
 
### 4. Event Listener:

This line adds an event listener to the "Convert" button (convertBtn). It listens for a click event, and when the button is clicked, it triggers the handleClicks function, initiating the conversion process.
