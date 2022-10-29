function generateBoard(lvl) {
    let defaultBoard = [
        [7, 3, 5, 6, 1, 4, 8, 9, 2],
        [8, 4, 2, 9, 7, 3, 5, 6, 1],
        [9, 6, 1, 2, 8, 5, 3, 7, 4],
        [2, 8, 6, 3, 4, 9, 1, 5, 7],
        [4, 1, 3, 8, 5, 7, 9, 2, 6],
        [5, 7, 9, 1, 2, 6, 4, 3, 8],
        [1, 5, 7, 4, 9, 2, 6, 8, 3],
        [6, 9, 4, 7, 3, 8, 2, 1, 5],
        [3, 2, 8, 5, 6, 1, 7, 4, 9],
    ]

    //create array with 81 number this is the 81 positions(indexes) the board have
    let positions = []
    for (let i = 0; i < 81; i++) {
        positions.push(i);
    }

    //create the holes define by the lvl to hide the holes
    let holes;
    if (lvl == 'easy') {
        holes = Math.floor(81 * 0.25); // Hide 25%
    }
    if (lvl == 'medium') {
        holes = Math.floor(81 * 0.5); // Hide 50%
    }
    if (lvl == 'hard') {
        holes = Math.floor(81 * 0.7); // Hide 75%
    }

    //run on the numbers of the holes to hide them
    for (let i = 0; i < holes; i++) {
        // Get NUMBER from positions array
        let randomNum = Math.floor(Math.random() * positions.length) // get index from position arr
        let number = positions[randomNum] //get the number by the position from the arr

        // Convert the position to (i-j) format
        let x = Math.floor(number / 9)// position of i in the board
        let y = number % 9//position of the j in the board

        // Update the defaultBoard at the random position to 0
        defaultBoard[x][y] = 0;//set the board value in the position to 0

        // Remove the POSITION of the random number from the positions array
        positions.splice(randomNum, 1)
    }

    return defaultBoard;
}

// // Fill board
    // for(let i = 0; i < 9; i++){
    //     for(let j = 0; j < 9; j++){
    //         defaultBoard[i][j] = getAvailableNumber(defaultBoard, i, j);
    //     }
    // }