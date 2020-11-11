
let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]

largestSubarraySum = (array) => {
 // code to write here
 let largestSum = 0
 let solutionArray = []
 for(let i=0; i<array.length; i++){
   for(let j=(i+1); j<array.length; j++){
     let selected = arr.slice(i,(j+1))
     const reducer = (accumulator, currentValue) => accumulator + currentValue
     console.log(arr.reduce(reducer))
   }
 }
}

largestSubarraySum(array)
