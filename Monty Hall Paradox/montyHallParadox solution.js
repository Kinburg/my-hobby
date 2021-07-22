
function montyHallParadox (change) {
    const winBoxIndex = Math.floor(Math.random() * 3);
    const firstOpenBoxIndex = Math.floor(Math.random() * 3);
    const secondOpenBoxIndex = getLastBox(firstOpenBoxIndex, change);

    if (checkWin(winBoxIndex, parseInt(secondOpenBoxIndex))) {
        console.log(`Win`);
        return 1;
    }
    console.log(`Lose`);

    return 0;
}

function getLastBox(firstOpenBoxIndex, change) {
    if (change) {
        const allIndexes = '012';
        const remainIndexes = allIndexes.replace(firstOpenBoxIndex, '');

        return remainIndexes[Math.floor(Math.random() * 2)];
    }

    return parseInt(firstOpenBoxIndex);
}

function checkWin(winBoxIndex, selectedBoxIndex) {
    return winBoxIndex === selectedBoxIndex;
}

function resultsAnalyze(resultsChange, resultsNotChange) {
    const changeResults = {win: 0, lose: 0};
    const notChangeResults = {win: 0, lose: 0};

    for (const res of resultsChange) {
        switch (res) {
            case 0: {
                changeResults.lose++;
                break;
            }
            case 1: {
                changeResults.win++;
                break;
            }
        }
    }

    for (const res of resultsNotChange) {
        switch (res) {
            case 0: {
                notChangeResults.lose++;
                break;
            }
            case 1: {
                notChangeResults.win++;
                break;
            }
        }
    }

    return {
        change: changeResults,
        notChange: notChangeResults
    }
}

function printResults(results) {
    console.log('------------------------CHANGE------------------------');
    console.log(JSON.stringify(results.change));
    console.log(`Win percents: ${(results.change.win/results.change.lose) / 100}%`);
    console.log('----------------------------------------------------------');
    console.log('--------------------------NOT CHANGE--------------------------');
    console.log(JSON.stringify(results.notChange));
    console.log(`Win percents: ${((results.notChange.win + results.notChange.lose) / 100) * results.notChange.win}%`);
    console.log('----------------------------------------------------------');
}

const runs = 100;
const resultsChange = [];
const resultsNotChange = [];

console.log('change');
for (let i = 0; i < runs; i++){
    resultsChange.push(montyHallParadox(true));
}

console.log('not change');
for (let i = 0; i < runs; i++){
    resultsNotChange.push(montyHallParadox(false));
}

printResults(resultsAnalyze(resultsChange, resultsNotChange));


/*------------------------NOT CHANGE------------------------
    {"winFirst":0,"winSecond":333198,"loose":666802}
----------------------------------------------------------
    --------------------------CHANGE--------------------------
    {"winFirst":0,"winSecond":333991,"loose":666009}
----------------------------------------------------------*/
