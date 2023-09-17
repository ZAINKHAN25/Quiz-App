const megaquestions = [
    {
      subjectname: "JavaScript 1",
      totalquestions: 25,
      totaltime: "5 minutes",
      passingpercentage: "70%",
      data: [
        {
          question: "Inside which HTML element do we put the JavaScript?",
          answers: [
            "<script>",
            "<scripting>",
            "<js>",
            "<javascript>",
          ],
          correctAnswer: "<script>",
        },
        {
          question:
            "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>",
          answers: [
            'document.getElementById("demo").innerHTML = "Hello World!";',
            'document.getElement("p").innerHTML = "Hello World!";',
            'document.getElementByName("p").innerHTML = "Hello World!";',
            '#demo.innerHTML = "Hello World!";',
          ],
          correctAnswer:
            'document.getElementById("demo").innerHTML = "Hello World!";',
        },
        {
          question: "Where is the correct place to insert a JavaScript?",
          answers: [
            "Both the <head> section and the <body> section are correct",
            "The <head> section",
            "The <body> section",
          ],
          correctAnswer:
            "Both the <head> section and the <body> section are correct",
        },
        {
          question:
            'What is the correct syntax for referring to an external script called "xxx.js"?',
          answers: [
            '<script src="xxx.js">',
            '<script href="xxx.js">',
            '<script name="xxx.js">',
          ],
          correctAnswer: '<script src="xxx.js">',
        },
        {
          question:
            'The external JavaScript file must contain the <script> tag.',
          answers: ["True", "False"],
          correctAnswer: "False",
        },
        {
          question: 'How do you write "Hello World" in an alert box?',
          answers: [
            'alert("Hello World");',
            'msg("Hello World");',
            'alertBox("Hello World");',
            'msgBox("Hello World");',
          ],
          correctAnswer: 'alert("Hello World");',
        },
        {
          question: 'How do you create a function in JavaScript?',
          answers: [
            "function myFunction()",
            "function = myFunction()",
            "function:myFunction()",
          ],
          correctAnswer: "function myFunction()",
        },
        {
          question: 'How do you call a function named "myFunction"?',
          answers: ["myFunction()", "call myFunction()", "call function myFunction()"],
          correctAnswer: "myFunction()",
        },
        {
          question: 'How to write an IF statement in JavaScript?',
          answers: [
            "if i == 5 then",
            "if i = 5",
            "if (i == 5)",
            "if i = 5 then",
          ],
          correctAnswer: "if (i == 5)",
        },
        {
          question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
          answers: [
            "if i =! 5 then",
            "if (i <> 5)",
            "if (i != 5)",
            "if i <> 5",
          ],
          correctAnswer: "if (i != 5)",
        },
        {
          question: 'How does a WHILE loop start?',
          answers: [
            "while i = 1 to 10",
            "while (i <= 10; i++)",
            "while (i <= 10)",
          ],
          correctAnswer: "while (i <= 10)",
        },
        {
          question: 'How does a FOR loop start?',
          answers: [
            "for (i = 0; i <= 5)",
            "for (i = 0; i <= 5; i++)",
            "for (i <= 5; i++)",
            "for i = 1 to 5",
          ],
          correctAnswer: "for (i = 0; i <= 5; i++)",
        },
        {
          question: 'How can you add a comment in a JavaScript?',
          answers: ["'This is a comment", '<!--This is a comment-->', '//This is a comment'],
          correctAnswer: '//This is a comment',
        },
        {
          question: 'How to insert a comment that has more than one line?',
          answers: [
            '<!--This comment has more than one line-->',
            '/*This comment has more than one line*/',
            '//This comment has more than one line//',
          ],
          correctAnswer: '/*This comment has more than one line*/',
        },
        {
          question: 'What is the correct way to write a JavaScript array?',
          answers: [
            'var colors = (1:"red", 2:"green", 3:"blue")',
            'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
            'var colors = "red", "green", "blue"',
            'var colors = ["red", "green", "blue"]',
          ],
          correctAnswer: 'var colors = ["red", "green", "blue"]',
        },
        {
          question: 'How do you round the number 7.25, to the nearest integer?',
          answers: [
            'round(7.25)',
            'Math.round(7.25)',
            'rnd(7.25)',
            'Math.rnd(7.25)',
          ],
          correctAnswer: 'Math.round(7.25)',
        },
        {
          question: 'How do you find the number with the highest value of x and y?',
          answers: [
            'Math.ceil(x, y)',
            'Math.max(x, y)',
            'ceil(x, y)',
            'top(x, y)',
          ],
          correctAnswer: 'Math.max(x, y)',
        },
        {
          question: 'What is the correct JavaScript syntax for opening a new window called "w2" ?',
          answers: [
            'w2 = window.new("http://www.w3schools.com");',
            'w2 = window.open("http://www.w3schools.com");',
          ],
          correctAnswer: 'w2 = window.open("http://www.w3schools.com");',
        },
        {
          question: 'JavaScript is the same as Java.',
          answers: ["False", "True"],
          correctAnswer: "False",
        },
        {
          question: "How can you detect the client's browser name?",
          answers: ["client.navName", "navigator.appName", "browser.name"],
          correctAnswer: "navigator.appName",
        },
        {
          question: 'Which event occurs when the user clicks on an HTML element?',
          answers: ["onmouseclick", "onchange", "onmouseover", "onclick"],
          correctAnswer: "onclick",
        },
        {
          question: 'How do you declare a JavaScript variable?',
          answers: [
            "v carName;",
            "variable carName;",
            "var carName;",
          ],
          correctAnswer: "var carName;",
        },
        {
          question: 'What is the correct way to write a JavaScript object?',
          answers: [
            'var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}',
            'var person = [firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"]',
            'var person = "firstName:"John", "lastName:"Doe", "age:50", "eyeColor:"blue""',
          ],
          correctAnswer: 'var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}',
        },
        {
          question: 'How do you write a conditional statement for executing some statements only if "i" is equal to 5?',
          answers: [
            "if (i = 5)",
            "if i == 5 then",
            "if i = 5 then",
            "if (i == 5)",
          ],
          correctAnswer: "if (i == 5)",
        },
        {
          question: 'What will the following code return: Boolean(10 > 9)',
          answers: ["True", "False", "NaN"],
          correctAnswer: "True",
        },
        {
          question: 'Is JavaScript case-sensitive?',
          answers: ["Yes", "No"],
          correctAnswer: "Yes",
        },
        {
          question: 'Which HTML element is used to display a scalar measurement within a range?',
          answers: ["<measure>", "<range>", "<gauge>", "<meter>"],
          correctAnswer: "<meter>",
        },
      ],
    },
    {
      subjectname: "CSS",
      totalquestions: 4,
      totaltime: "5 minutes",
      passingpercentage: "70%",
      data: [
        {
          question: "What does CSS stand for?",
          answers: [
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Creative Style Sheets",
            "Colorful Style Sheets",
          ],
          correctAnswer: "Cascading Style Sheets",
        },
        {
          question: "Which CSS property is used to change the text color of an element?",
          answers: [
            "color",
            "text-color",
            "font-color",
            "text-style",
          ],
          correctAnswer: "color",
        },
        {
          question: "How can you include an external CSS file in your HTML document?",
          answers: [
            '<link rel="stylesheet" type="text/css" href="styles.css">',
            '<style src="styles.css">',
            '<link type="text/css" rel="stylesheet" src="styles.css">',
            '<style link="styles.css">',
          ],
          correctAnswer: '<link rel="stylesheet" type="text/css" href="styles.css">',
        },
        {
          question: "Which CSS property is used to set the background color of an element?",
          answers: [
            "background-color",
            "bgcolor",
            "color",
            "background",
          ],
          correctAnswer: "background-color",
        },
        // Add more CSS questions here...
      ],
    },
    {
      subjectname: "JavaScript 2",
      totalquestions: 4,
      totaltime: "5 minutes",
      passingpercentage: "70%",
      data: [
        {
          question: "What is a closure in JavaScript?",
          answers: [
            "A function that has access to variables from its outer function, even after the outer function has finished executing.",
            "A function that only works with closed data types.",
            "A function that has no access to external variables.",
            "A function that is closed to modification.",
          ],
          correctAnswer:
            "A function that has access to variables from its outer function, even after the outer function has finished executing.",
        },
        {
          question: "What does the 'this' keyword refer to in JavaScript?",
          answers: [
            "The current function itself",
            "The global object",
            "The object that is currently executing the function",
            "The parent object of the function",
          ],
          correctAnswer: "The object that is currently executing the function",
        },
        {
          question: "What is the purpose of the 'bind' method in JavaScript?",
          answers: [
            "To attach an event handler to an HTML element",
            "To bind a function to a particular context or object",
            "To create a new array from an existing array",
            "To concatenate two strings",
          ],
          correctAnswer: "To bind a function to a particular context or object",
        },
        {
          question: "What is the difference between 'null' and 'undefined' in JavaScript?",
          answers: [
            "'Null' represents an intentional absence of any object value, while 'undefined' indicates that a variable has been declared but has not been assigned any value.",
            "'Null' is used to represent numbers, while 'undefined' is used for strings.",
            "'Null' is a syntax error, while 'undefined' is a type error.",
            "'Null' represents a variable that has been initialized, while 'undefined' represents a variable that has not been declared.",
          ],
          correctAnswer:
            "'Null' represents an intentional absence of any object value, while 'undefined' indicates that a variable has been declared but has not been assigned any value.",
        },
        // Add more JavaScript questions here...
      ],
    },
  ];
  
  export default megaquestions;
  