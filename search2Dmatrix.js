var searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === target) {
                return true;
            }
        }
    }

    return false;
};

console.log(searchMatrix([[1,2,3], [5,1,2], [5,2,89]], 8));