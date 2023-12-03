var searchMatrix = function(matrix, target) {
    return matrix.flat().includes(target);
};

console.log(searchMatrix([[1,2,3], [5,1,2], [5,2,89]], 8));