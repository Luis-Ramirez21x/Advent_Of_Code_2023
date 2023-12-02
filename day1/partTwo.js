
//failed to complete in thirty mins

let fs = require('fs') , filename = 'calibDoc.txt'

const wordList = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', '1', '2', '3', '4', '5', '6', '7', '8', '9'] // nasty 
let totalSum = 0;

fs.readFile(filename, 'utf8', function(err, data) {
    
    const lines = data.split("\n");

    for(i=0; i<lines.length; i++){
        
        let line = lines[i] 

        let [firstWord, lastWord] = getFirstAndLast(line)

        
        firstWord = getNumAsString(firstWord)
        lastWord = getNumAsString(lastWord)

        let calibValue = parseInt(firstWord+lastWord, 10)

        totalSum += calibValue
        console.log(totalSum)
        console.log('------------')

    }
  
  });


  function getFirstAndLast(line){

        let firstWordIndx = line.length
        let firstWord = null //should no longer null, if i have all items in array

        let lastWordIndx = -1 //now we compare to lowest value
        let lastWord = null

        
        for(y=0; y < wordList.length; y++ ){
            
            const indx = line.indexOf(wordList[y])
            const lastIndx = line.lastIndexOf(wordList[y]) //goofed me, needed this to catch dupe values e.g. 'eightsdadsa9adsadaseightasdsada'
            
            if (indx > -1 ){
                if (indx < firstWordIndx) {
                    firstWordIndx = indx
                    firstWord =  wordList[y]
                }
                
                if(lastIndx > lastWordIndx){
                    lastWordIndx = lastIndx
                    lastWord = wordList[y]
                }
            }
            
        
        }
        
        return [firstWord, lastWord]
  }


  function getNumAsString(str){


    if(str.length === 1) return str

    let indx = wordList.indexOf(str) 
    
    return (indx+1).toString() 
  }