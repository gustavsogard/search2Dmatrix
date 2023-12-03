var searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].filter(el => el === target).length > 0) {
            return true;
        }
    }

    return false;
};

console.log(searchMatrix([[1,2,3], [5,1,2], [5,2,89]], 8));