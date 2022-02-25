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

const titleCased = () => {
  const doubleArray = tutorials.map(spaceArray)
  const cappedArray = []
  //const again = doubleArray.map(feedEachTitle)
  //console.log(again)
  //console.log('DoubleArray ',doubleArray[0])
  //const testArray = doubleArray[0].map(capitalizeFirstLetter)
  //console.log("testArray ", testArray)
  for (let title of doubleArray){
    let temp = title.map(capitalizeFirstLetter)
    temp = temp.join(" ")
    cappedArray.push(temp)
    // console.log(cappedArray)
    // //cappedArray.push(title.map(capitalizeFirstLetter))
  }
  return cappedArray
  //console.log(cappedArray[0])
  //console.log(doubleArray[0].map(capitalizeFirstLetter))
  //tutorials.map(title => title.map(spaceArray(tutorials)))
  //
  //tutorials.map(spaceArray)[0].map(capitalizeFirstLetter).join(" ")
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
// function feedEachTitle(array){
//   return array
// }

function spaceArray(array){
  const newArray = array.split(" ")
  return newArray
}

