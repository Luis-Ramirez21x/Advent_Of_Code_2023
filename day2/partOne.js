
//completed in timeish

let fs = require('fs') , filename = 'gameLog.txt'
let colors = [ 'red', 'green', 'blue']
let colorLimit = { 'red':12, 'green':13, 'blue':14 }
let totalSum = 0;

fs.readFile(filename, 'utf8', function(err, data) {

    const gameLogs = data.split("\n") 

    gameLogs.forEach( gameLog =>{

        let isPossible = true;

        let gameRounds = getGameRoundsArr(gameLog) 

        gameRounds.forEach( round => {

            let scoresArr = round.split(',')
            scoresArr.forEach( score =>{

                let colorFound = colors.find(color => score.includes(color))
                let colorCnt = score.replace(colorFound, '')
                let max = colorLimit[colorFound]

                if( colorCnt > max) isPossible =false
            })

        })

        //only add to total if game is possible
        if(isPossible){
            let logId = getGameId(gameLog)
            totalSum += logId
        }   


    })
    

})

function getGameId(gameLog){

    let logTitle = gameLog.split(':')[0]

    logTitle = logTitle.replace(' ', '')
    logTitle = logTitle.slice(4)

    return parseInt(logTitle, 10)

}

function getGameRoundsArr(gameLog){
    
    let logRounds = gameLog.replaceAll(' ', '').slice(gameLog.indexOf(':'))

    logRounds = logRounds.split(';')

    return logRounds

}




