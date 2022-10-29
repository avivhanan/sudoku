let board;

//////check unique array
function isUnique(arr){
    newArr = []
    for(let i = 1; i <= 9 ; i++){
        //check if i(1-9) exist in the array and not in the new array
        //and push to the array only unique number
        if(arr.includes(i) && !newArr.includes(i)){
            newArr.push(i)
        }
    }
    if(newArr.length == 9){
        return true
    }
    else{
        return false
    }
}

///Check if rows is unique to check 9 rows from board
//one by one
function isRowUnique(){
    let cnt = 0;
    for(let i = 0; i < board.length; i++){
        if(isUnique(board[i]) == true){
            cnt++
        }
        else{
            return false
        }
    }
    if(cnt == 9){
        return true
    }
    else{
        return false
    }
}

function isColmunsUnique(){
    let cnt = 0;
    let colmunsArr = [];
    for(let i = 0; i < board.length; i++){
        colmunsArr.push([])
        for(let j = 0; j < board.length; j++){
            colmunsArr[i].push(board[j][i])
        }
        if(isUnique(colmunsArr[i]) == true){
            cnt++
        }
    }
    if(cnt == 9){
        return true
    }
    else{
        return false
    }
}

//check if 9 squars are unique to check 9 squares
//from board one by one
function isSquareUnique(){
    //create 9 arrays to enter 9 big squars for array to compare
    let cnt = 0;
    let squars = [];
    for(let i = 0; i < 9; i++){
        squars.push([]);
    }
    
    //enter the first big square numbers for the first array
    
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            squars[0].push(board[i][j])
        }
    }

    for(let i = 0; i < 3; i++){
        for(let j = 3; j < 6; j++){
            squars[1].push(board[i][j])
        }
    }
    

    for(let i = 0; i < 3; i++){
        for(let j = 6; j < 9; j++){
            squars[2].push(board[i][j])
        }
    }

    for(let i = 3; i < 6; i++){
        for(let j = 0; j < 3; j++){
            squars[3].push(board[i][j])
        }
    }

        for(let i = 3; i < 6; i++){
            for(let j = 3; j < 6; j++){
                squars[4].push(board[i][j])
            }
        }

        for(let i = 3; i < 6; i++){
            for(let j = 6; j < 9; j++){
                squars[5].push(board[i][j])
            }
        }

        for(let i = 6; i < 9; i++){
            for(let j = 0; j < 3; j++){
                squars[6].push(board[i][j])
            }
        }

            for(let i = 6; i < 9; i++){
                for(let j = 3; j < 6; j++){
                    squars[7].push(board[i][j])
                }
            }
            for(let i = 6; i < 9; i++){
                for(let j = 6; j < 9; j++){
                    squars[8].push(board[i][j])
                }
            }
            for(let i = 0; i < squars.length; i++){
                if(isUnique(squars[i]) == true){
                    cnt++
                }
            }

            if(cnt == 9){
                return true
            }
            else{
                return false
            }
        }

//when u click on Finish button
//it check ur board and alert u if
//board faild or sucsess
function onFinish(){
    console.log(board)
    if(isRowUnique() == true && isColmunsUnique() == true && isSquareUnique() == true){
        window.alert('Sucsess')
    }
    else{
        window.alert('failed')
    }

    // Hide / Show relevant elements
    removeAllChildNodes(document.getElementById('board'));
    document.getElementById('board-title').style.display = 'none'
    document.getElementById('board-buttons').style.display = 'none'
    document.getElementById('lvl-select').style.display = 'flex'
    // document.getElementById('main').style.background = 'none'
}
 
function getLvl(lvl) {
    // Hide / Show relevant elements
    let boardTitle = document.getElementById('board-title');
    boardTitle.style.display = 'flex'
    boardTitle.innerText = `Board lvl is ${lvl}`
    document.getElementById('lvl-select').style.display = 'none';
    document.getElementById('board-buttons').style.display = 'flex'
    document.getElementById('board-buttons').style.display = 'flex';
    // document.getElementById('main').style.background = 'red'

    //get board by lvl from button and by function the build the board
    board = generateBoard(lvl);

    // Build the UI
        let boardElement = document.getElementById('board')
    for(let i = 0; i < 9; i++){
        let row = document.createElement('div')
        row.setAttribute('class','row')
        boardElement.appendChild(row)
    for(let j = 0; j < 9; j++){
        let square = document.createElement('input')
        //set id for each square to use it later
        square.setAttribute('id', `${i}-${j}`)
        square.setAttribute('class', 'square')
        square.setAttribute('maxLength', '1')

        //set 9 big squares with bold border
        if (i % 3 == 0) {
            square.style.borderTop = '3px solid black'
        }
        if (i == 8){
            square.style.borderBottom = '3px solid black'
        }
        if(j % 3 == 0) {
            square.style.borderLeft = '3px solid black'
        }
        if(j == 8){
            square.style.borderRight = '3px solid black'
        }

        //Unchangeable original board value
        if(board[i][j] != 0){
            square.value = board[i][j]
            square.style.backgroundColor = 'lightblue'
            square.disabled = true;
        }

        //allow to use enter only numbers
        //and update the board
        square.oninput = function() {
            if(!(square.value >= '1' && square.value <= '9')){
                square.value = ''
            }
            //change the string value from input to number for the validation
            board[i][j] = Number(square.value);
        }
        row.appendChild(square)
    }
}

}

function onAgain(){
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                //call to id by get element by id to get each square
                let square = document.getElementById(`${i}-${j}`)
                //if is not disabled squares change their value to empty
                if(!square.hasAttribute('disabled')){
                    square.value = ''
                    board[i][j] = 0;
                }
            }
        }
}

// Remove all child of a specific parent
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
