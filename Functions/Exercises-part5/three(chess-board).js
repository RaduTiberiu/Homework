function chessBoard(columns, rows) {
    for (k = 0; k < rows; k++) {
        var output = '';
    for (i = 0; i < columns; i++) {
        output += ' #';
        }
        console.log(output);
        output = '';
    for (j = 0; j < columns; j++) {
        output += '# '
    }
    console.log(output)
};
};

chessBoard(8, 4);
