
//did not time

let fs = require('fs') , filename = 'calibDoc.txt'
let totalSum = 0;

fs.readFile(filename, 'utf8', function(err, data) {
    
    //split text file by new line
    const lines = data.split("\n");

    
    for(i=0; i<lines.length; i++){
        
        let line = lines[i]
        let reversedLine = line.split('').reverse().join('')


        //get numbers in string
        let firstNum = line.match(/\d+/)[0].slice(0,1)
        let lastNum = reversedLine.match(/\d+/)[0].slice(0,1)

        let num = parseInt(firstNum+lastNum, 10)

        totalSum += num
        console.log(totalSum)

    }


  
  });

  