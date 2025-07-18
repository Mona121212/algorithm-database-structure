var isValidSudoku = function(board) {
    const seen = new Set();

    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            const number = board[i][j];

            if(number !== ".") {
                const rowKey = `${number} in row ${i}`;
                const colKey = `${number} in column ${j}`;
                const blockKey = `${number} in block ${Math.floor( i / 3)}-${Math.floor(j / 3)}`;


            if(seen.has(rowKey) || seen.has(colKey) || seen.has(blockKey)) {
                return false;
            }

            seen.add(rowKey);
            seen.add(colKey);
            seen.add(blockKey);

                
            }
        }
    }
    return true;
}