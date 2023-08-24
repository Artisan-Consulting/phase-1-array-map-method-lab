const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function titleCased() {

  const newArray = tutorials.map((tutorial) => {
      
    const wordsArray = tutorial.split (" "); 
       for (let i=0; i < wordsArray.length; i++) {
          wordsArray[i] = wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
       }
       const wordsNewArray = wordsArray.join(" ");
       return wordsNewArray
  }); //map iteration ends
  
  return newArray
  
  }; // function
  //console.log (titleCased())
