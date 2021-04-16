  function christmasTree(rows) {
    for (i = 0; i < rows; i++) {
        var output = '';
        for(j = 1; j < rows - i; j++) {
            output += ' '
        };
        for (k = 1; k <= (2*i+1); k++) {
            output += '#';
        };
        console.log(output);
    };
};

christmasTree(7);