const javascriptQuestions = [
    {
        question: 'What does the acronym "DOM" stand for in web development?',
        options: ['Document Object Model', 'Data Object Model', 'Dynamic Output Management', 'Document Order Mechanism'],
        correctOption: 0,
    },
    {
        question: 'Which keyword is used to declare a variable in JavaScript?',
        options: ['var', 'let', 'const', 'variable'],
        correctOption: 2,
    },
    {
        question: 'What is the purpose of the "console.log()" function in JavaScript?',
        options: ['Prints a message to the console', 'Creates a new log file', 'Logs an error message', 'Displays an alert'],
        correctOption: 0,
    },
    {
        question: 'How do you comment out a single line in JavaScript?',
        options: ['/* Comment */', '// Comment', '# Comment', '<!-- Comment -->'],
        correctOption: 1,
    },
    {
        question: 'What is the result of the expression: 5 + "5"?',
        options: ['10', '55', 'Error', 'NaN'],
        correctOption: 1,
    },
    {
        question: 'Which method is used to add an element to the end of an array?',
        options: ['push()', 'pop()', 'shift()', 'unshift()'],
        correctOption: 0,
    },
    {
        question: 'What does the term "callback function" refer to in JavaScript?',
        options: ['A function that calls another function', 'A function passed as an argument to another function', 'A function with no parameters', 'A function that returns a callback'],
        correctOption: 1,
    },
    {
        question: 'What is the purpose of the "addEventListener" method?',
        options: ['To remove an event listener', 'To add a new HTML element', 'To handle events like clicks or keypresses', 'To modify the document structure'],
        correctOption: 2,
    },
    {
        question: 'How do you declare a function in JavaScript?',
        options: ['function myFunction()', 'def myFunction()', 'void myFunction()', 'myFunction() = function'],
        correctOption: 0,
    },
    {
        question: 'What does the term "scope" refer to in JavaScript?',
        options: ['The visibility of a variable within the code', 'The shape of a function', 'The time it takes for a function to execute', 'The hierarchy of HTML elements'],
        correctOption: 0,
    },
    {
        question: 'Which operator is used for strict equality comparison in JavaScript?',
        options: ['==', '!=', '===', '!=='],
        correctOption: 2,
    },
    {
        question: 'What is the purpose of the "return" statement in a function?',
        options: ['To terminate the function', 'To output a value from the function', 'To print a message to the console', 'To declare a variable'],
        correctOption: 1,
    },
    {
        question: 'What is an example of a falsy value in JavaScript?',
        options: ['0 (number)', '"false" (string)', 'true (boolean)', 'null'],
        correctOption: 3,
    },
    {
        question: 'Which built-in method is used to convert a string to uppercase?',
        options: ['toUpperCase()', 'toUppercase()', 'upperCase()', 'uppercase()'],
        correctOption: 0,
    },
    {
        question: 'What is the purpose of the "setTimeout" function in JavaScript?',
        options: ['To set a timer for delayed execution', 'To set a recurring timer', 'To measure the time taken by a function', 'To stop the execution of the script'],
        correctOption: 0,
    },
    {
        question: 'How do you create a comment block in JavaScript?',
        options: ['<!-- Comment -->', '/** Comment */', '## Comment ##', '/* Comment */'],
        correctOption: 1,
    },
    {
        question: 'What is the purpose of the "this" keyword in JavaScript?',
        options: ['It refers to the previous function', 'It refers to the current function', 'It refers to the global object', 'It refers to the HTML document'],
        correctOption: 1,
    },
    {
        question: 'Which method is used to remove the last element from an array?',
        options: ['pop()', 'shift()', 'remove()', 'delete()'],
        correctOption: 0,
    },
    {
        question: 'What does the term "AJAX" stand for in web development?',
        options: ['Asynchronous JavaScript and XML', 'Advanced JavaScript and XML', 'Asynchronous JavaScript and XHTML', 'Automated JavaScript and XML'],
        correctOption: 0,
    },
    {
        question: 'What is the purpose of the "JSON.parse()" method in JavaScript?',
        options: ['To convert a JSON string to an object', 'To convert an object to a JSON string', 'To parse an HTML document', 'To create a new JSON object'],
        correctOption: 0,
    },
    {
        question: 'Which statement is used to exit a switch statement in JavaScript?',
        options: ['break', 'exit', 'return', 'continue'],
        correctOption: 0,
    },
    {
        question: 'What is the purpose of the "typeof" operator in JavaScript?',
        options: ['To check the type of a variable or expression', 'To create a new variable', 'To concatenate two strings', 'To compare two values'],
        correctOption: 0,
    },
    {
        question: 'What is the result of the expression: "5" - 2?',
        options: ['7', '3', '52', 'Error'],
        correctOption: 1,
    },
    {
        question: 'What is the purpose of the "Math.random()" method in JavaScript?',
        options: ['To generate a random number between 1 and 10', 'To generate a random integer', 'To generate a random floating-point number between 0 and 1', 'To round a number to the nearest integer'],
        correctOption: 2,
    },
    {
        question: 'How do you declare a constant variable in JavaScript?',
        options: ['const myVar', 'let myVar', 'var myVar', 'constant myVar'],
        correctOption: 0,
    },
    {
        question: 'What is the purpose of the "Array.isArray()" method in JavaScript?',
        options: ['To check if a variable is an array', 'To create a new array', 'To reverse the elements of an array', 'To remove an element from an array'],
        correctOption: 0,
    },
    {
        question: 'Which function is used to convert a string to a number in JavaScript?',
        options: ['parseInt()', 'toFloat()', 'convertToNumber()', 'stringToNumber()'],
        correctOption: 0,
    },
    {
        question: 'What is the purpose of the "localStorage" object in JavaScript?',
        options: ['To store data that has no expiration time', 'To store data with a short expiration time', 'To store data on the server', 'To store data in cookies'],
        correctOption: 0,
    },
    {
        question: 'How do you create a loop in JavaScript?',
        options: ['for (let i = 0; i < 10; i++)', 'while (i < 10) { i++ }', 'do { i++ } while (i < 10)', 'All of the above'],
        correctOption: 3,
    },
];
   
const htmlQuestions = [
    {
        question: 'What does HTML stand for?',
        options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyperlink and Text Markup Language', 'Home Tool Markup Language'],
        correctOption: 0,
    },
    {
        question: 'Which HTML tag is used for creating a hyperlink?',
        options: ['<link>', '<a>', '<href>', '<hyperlink>'],
        correctOption: 1,
    },
    {
        question: 'What is the purpose of the HTML "DOCTYPE" declaration?',
        options: ['To declare the document type and version of HTML', 'To define a new HTML element', 'To create a document title', 'To declare a function in HTML'],
        correctOption: 0,
    },
    {
        question: 'Which HTML element is used for the largest heading?',
        options: ['<h1>', '<heading>', '<h6>', '<header>'],
        correctOption: 0,
    },
    {
        question: 'What is the correct way to comment out multiple lines in HTML?',
        options: ['<!-- Comment -->', '<!-- Comment', '/* Comment */', '// Comment'],
        correctOption: 0,
    },
    {
        question: 'In HTML, which tag is used for creating an ordered list?',
        options: ['<ul>', '<li>', '<ol>', '<dl>'],
        correctOption: 2,
    },
    {
        question: 'Which attribute is used to specify the URL of an image in HTML?',
        options: ['src', 'url', 'img', 'link'],
        correctOption: 0,
    },
    {
        question: 'What does the HTML tag "<br>" stand for?',
        options: ['Break', 'Bold', 'Block', 'Buffer'],
        correctOption: 0,
    },
    {
        question: 'Which HTML tag is used to define an internal style sheet?',
        options: ['<style>', '<css>', '<head>', '<link>'],
        correctOption: 0,
    },
    {
        question: 'What is the purpose of the HTML "alt" attribute in the "<img>" tag?',
        options: ['To specify the alignment of the image', 'To define alternate text for the image', 'To set the border of the image', 'To link the image to another page'],
        correctOption: 1,
    },
    {
        question: 'Which HTML element is used for creating a table?',
        options: ['<table>', '<tr>', '<td>', '<th>'],
        correctOption: 0,
    },
    {
        question: 'What is the correct way to create an external link in HTML?',
        options: ['<external>', '<a href="external.html">', '<link src="external.html">', '<a external="external.html">'],
        correctOption: 1,
    },
    {
        question: 'In HTML, which tag is used for creating an unordered list?',
        options: ['<ul>', '<li>', '<ol>', '<dl>'],
        correctOption: 0,
    },
    {
        question: 'What is the purpose of the HTML "target" attribute in the "<a>" tag?',
        options: ['To specify the source of the link', 'To define the layout of the link', 'To set the target window or frame for the link', 'To create a tooltip for the link'],
        correctOption: 2,
    },
    {
        question: 'Which HTML tag is used for creating a hyperlink?',
        options: ['<link>', '<a>', '<href>', '<hyperlink>'],
        correctOption: 1,
    },
    {
        question: 'What is the purpose of the HTML "id" attribute?',
        options: ['To define a class for an element', 'To specify inline styles for an element', 'To uniquely identify an element within a document', 'To link to an external stylesheet'],
        correctOption: 2,
    },
    {
        question: 'Which HTML tag is used for creating a form?',
        options: ['<form>', '<input>', '<button>', '<label>'],
        correctOption: 0,
    },
    {
        question: 'What does the HTML tag "<em>" represent?',
        options: ['Emphasis', 'Embed', 'Enclosure', 'End'],
        correctOption: 0,
    },
    {
        question: 'Which HTML attribute is used to provide additional information about an element?',
        options: ['extra', 'meta', 'info', 'title'],
        correctOption: 3,
    },
    {
        question: 'What is the purpose of the HTML "span" tag?',
        options: ['To create a line break', 'To group inline elements and apply styles', 'To define a division or section', 'To insert a horizontal rule'],
        correctOption: 1,
    },
    {
        question: 'In HTML, which tag is used for creating a horizontal rule?',
        options: ['<hr>', '<line>', '<rule>', '<break>'],
        correctOption: 0,
    },
    {
        question: 'What is the correct way to create a comment in HTML?',
        options: ['// Comment', '<!-- Comment -->', '/** Comment */', '# Comment'],
        correctOption: 1,
    },
    {
        question: 'Which HTML element is used for creating a hyperlink?',
        options: ['<link>', '<a>', '<href>', '<hyperlink>'],
        correctOption: 1,
    },
    {
        question: 'What does the HTML tag "<strong>" represent?',
        options: ['Strong importance', 'Styling text in bold', 'Strikethrough text', 'Setting the text color'],
        correctOption: 0,
    },
    {
        question: 'Which HTML tag is used for creating a line break?',
        options: ['<br>', '<lb>', '<break>', '<line>'],
        correctOption: 0,
    },
    {
        question: 'What is the purpose of the HTML "colspan" attribute in a table?',
        options: ['To define the color of a column', 'To combine multiple table cells into one column', 'To create a span across multiple rows', 'To set the column width'],
        correctOption: 1,
    },
    {
        question: 'Which HTML element is used for creating a drop-down list?',
        options: ['<dropdown>', '<select>', '<list>', '<menu>'],
        correctOption: 1,
    },
    {
        question: 'What is the purpose of the HTML "placeholder" attribute in an input field?',
        options: ['To set the default value of the input', 'To specify a brief hint that describes the expected value of the input', 'To disable the input field', 'To control the width of the input field'],
        correctOption: 1,
    },
];

const cssQuestions = [
    {
        question: 'What does CSS stand for?',
        options: ['Counter Style Sheet', 'Computer Style Sheet', 'Creative Style Sheet', 'Cascading Style Sheet'],
        correctOption: 3,
    },
    {
        question: 'Which CSS property is used to change the text color of an element?',
        options: ['color', 'text-color', 'font-color', 'text-style'],
        correctOption: 0,
    },
    {
        question: 'What is the purpose of the CSS "box-sizing" property?',
        options: ['To define the size of the outer box', 'To include/exclude borders and padding from the element\'s total width and height', 'To set the box shadow', 'To control the layout of the box'],
        correctOption: 1,
    },
    {
        question: 'Which CSS property is used to set the background color of an element?',
        options: ['bgcolor', 'background-color', 'color-background', 'bg-color'],
        correctOption: 1,
    },
    {
        question: 'How do you select an element with the id "header" in CSS?',
        options: ['#header', '.header', 'element:header', 'header{}'],
        correctOption: 0,
    },
    {
        question: 'What is the purpose of the CSS "display" property?',
        options: ['To define the width and height of an element', 'To control the visibility of an element', 'To define the spacing between elements', 'To specify the display behavior of an element'],
        correctOption: 3,
    },
    {
        question: 'Which CSS property is used to add shadows to an element?',
        options: ['text-shadow', 'shadow', 'box-shadow', 'element-shadow'],
        correctOption: 2,
    },
    {
        question: 'What is the purpose of the CSS "margin" property?',
        options: ['To set the inner spacing of an element', 'To create space outside the border of an element', 'To set the background color of an element', 'To set the font size of an element'],
        correctOption: 1,
    },
    {
        question: 'How can you include an external CSS file in an HTML document?',
        options: ['<style src="styles.css">', '<link href="styles.css" rel="stylesheet">', '<css src="styles.css">', '<script src="styles.css"></script>'],
        correctOption: 1,
    },
    {
        question: 'What does the CSS property "position: relative" do?',
        options: ['Positions an element relative to its normal position', 'Makes an element invisible', 'Sets the background image of an element', 'Flips the element horizontally'],
        correctOption: 0,
    },
    {
        question: 'Which CSS property is used to control the order of overlapping elements?',
        options: ['z-index', 'order', 'position', 'layer'],
        correctOption: 0,
    },
    {
        question: 'What does the CSS property "float" do?',
        options: ['Adds a shadow to an element', 'Moves an element to the left or right, allowing content to flow around it', 'Changes the opacity of an element', 'Enlarges or reduces the size of an element'],
        correctOption: 1,
    },
    {
        question: 'Which CSS property is used to control the spacing between lines of text?',
        options: ['line-spacing', 'letter-spacing', 'text-spacing', 'line-height'],
        correctOption: 3,
    },
    {
        question: 'What is the purpose of the CSS "border-radius" property?',
        options: ['To set the border width of an element', 'To round the corners of an element', 'To define the style of the element\'s border', 'To create a shadow around an element'],
        correctOption: 1,
    },
    {
        question: 'How do you comment out multiple lines in CSS?',
        options: ['/* Comment */', '<!-- Comment -->', '// Comment', '# Comment'],
        correctOption: 0,
    },
    {
        question: 'Which CSS pseudo-class is used to select and style the first child element of another element?',
        options: [':first-child', ':first-element', ':child-first', ':element-first'],
        correctOption: 0,
    },
    {
        question: 'What does the CSS property "overflow: hidden" do?',
        options: ['Hides the element completely', 'Hides the overflow content of an element', 'Shows the overflow content of an element', 'Enlarges the element to fit its content'],
        correctOption: 1,
    },
    {
        question: 'Which CSS property is used to set the text alignment of an element?',
        options: ['text-align', 'align-text', 'text-position', 'position-text'],
        correctOption: 0,
    },
    {
        question: 'What is the purpose of the CSS "opacity" property?',
        options: ['To set the color of an element', 'To control the transparency of an element', 'To set the width of an element', 'To define the font style of an element'],
        correctOption: 1,
    },
    {
        question: 'Which CSS property is used to create a border around an element?',
        options: ['border-color', 'border-style', 'border-width', 'border'],
        correctOption: 3,
    },
    {
        question: 'How do you center an element horizontally in CSS?',
        options: ['text-align: center', 'margin: auto', 'align: center', 'center: horizontal'],
        correctOption: 1,
    },
    {
        question: 'What is the purpose of the CSS "transition" property?',
        options: ['To create a smooth transition between different styles', 'To change the font size of an element', 'To move an element to the left or right', 'To apply a gradient background'],
        correctOption: 0,
    },
    {
        question: 'Which CSS property is used to set the font size of an element?',
        options: ['font-size', 'text-size', 'size', 'font'],
        correctOption: 0,
    },
    {
        question: 'What is the purpose of the CSS "background" property?',
        options: ['To set the background color of an element', 'To add a background image to an element', 'To control the background positioning', 'All of the above'],
        correctOption: 3,
    },
    {
        question: 'How do you select all elements with the class "example" in CSS?',
        options: ['.example', '#example', 'element.example', 'example{}'],
        correctOption: 0,
    },
    {
        question: 'What does the CSS property "box-shadow" do?',
        options: ['Adds a shadow to an element', 'Sets the background color of an element', 'Defines the size of the element', 'Moves the element to the front'],
        correctOption: 0,
    },
    {
        question: 'Which CSS property is used to set the width of an element?',
        options: ['width', 'element-width', 'size', 'width-size'],
        correctOption: 0,
    }
];