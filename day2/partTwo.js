
//completed in time, big dubs

let fs = require('fs') , filename = 'gameLog.txt'
let colors = [ 'red', 'green', 'blue']
let colorsMax = { 'red':1, 'green':1, 'blue':1 } //set to one so that when calculating power it does not affect 
let totalSum = 0;

fs.readFile(filename, 'utf8', function(err, data) {

    const gameLogs = data.split("\n")  //['Game 100: 2 blue, 8 green, 12 red; 2 green, 13 red; 2 red, 4 green; 2 green, 7 red; 10 green, 5 red, 1 blue'];

    gameLogs.forEach( gameLog =>{


        let gameRounds = getGameRoundsArr(gameLog) 

        gameRounds.forEach( round => {

            let scoresArr = round.split(',')
            scoresArr.forEach( score =>{

                let colorFound = colors.find(color => score.includes(color))
                let colorCnt = score.replace(colorFound, '')

                colorCnt = parseInt(colorCnt)

                if(colorsMax[colorFound] < colorCnt) colorsMax[colorFound] = colorCnt

            })

        })

        let power = colorsMax['red'] * colorsMax['green'] * colorsMax['blue']
        
        totalSum += power

        colorsMax = { 'red':1, 'green':1, 'blue':1 } //reset max's, was affecting the next rounds results

    })
    
    

})



function getGameRoundsArr(gameLog){
    
    let logRounds = gameLog.replaceAll(' ', '').slice(gameLog.indexOf(':'))

    logRounds = logRounds.split(';')

    return logRounds

}

