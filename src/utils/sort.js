const quickSort = (array, compare) => {
    if (array.length <= 1) {
        return array;
    } else {
        var left = [];
        var right = [];
        var newArray = [];
        var pivot = array.pop();
        var length = array.length;
        for (var i = 0; i < length; i++) {
            if (compare(array[i], pivot)) {
                left.push(array[i]);
            } else {
                right.push(array[i]);
            }
        }
        return newArray.concat(QuickSort(left, compare), pivot, QuickSort(right, compare));
    }
};

export const QuickSort = (array, compare) => {
    return quickSort([...array], compare);
};