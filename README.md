# 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
## Description
This project went through many drafts and iterations to get to where it is today. At the top of the JavaScript code, you will see that four arrays have been created. This is to be able to pull from based on user input. The passwords can have any combination of the following: lowercase letters, uppercase letters, numbers, and special characters. Each of these have their own var specified and have an array to follow with the contents for each. The password must be between 8 and 128 characters. This was set up by using a function called "generatePassword" followed by a window.prompt that allowed users to input how long they wanted their password. This is followed by an if else statement. This checks to make sure that the user has put in an answer that follows the constraints. If the user does, it will continue to ask questions about the what they would like their password to contain (again lowercase, uppercase, numbers, and special characters). As these questions are asked, the user's answers are recorded using the console log function. There is then a check to make sure that user has selected at least one character type for their password. Then the program is written to check for every possible option for combination of elements included in the password. This is then logged and saved as passwordInformation. The concat function is used to take the information from the respective arrays and combine them in a list to pull from for the password. This is done by using a series of "else if" statements for each possibility. Then, a function is written called "writePassword" is used in conjunction with a placeholder password that is used to manipulate the user input and get the correct amount of characters and a variety from the selected elements from the user. In the for loop, Math.random and Math.floor are used. The math random selects a number 0-1 that can be 0, but will never be 1 and the math floor gives an integer that is a whole number when multiplied by the math.random * passwordInformation.length. The push method is what allows us to get the password at the length the user wants. Finally, the join element is used to concatenate the placeholder password with the password.

## Built With 
* HTML
* CSS
* JavaScript

## Website
[Jeri Smith Professional Portfolio](https://jerismith32.github.io/challenge-2-advanced-css-professional-portfolio/)

## Website Screenshots
![Jeri Smith Portfolio Screenshot]

## Contributions
Contributions made by Jeri Smith

## References
https://www.w3schools.com/jsref/jsref_push.asp

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.