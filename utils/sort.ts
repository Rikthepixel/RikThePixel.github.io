type CompareFunc<T> = (val: T, pivot: T) => boolean;

const quickSort = <T>(array: T[], compare: CompareFunc<T>): T[] => {
    if (array.length <= 1) {
        return array;
    } else {
        var left: T[] = [];
        var right: T[] = [];
        var newArray: T[] = [];
        var pivot = array.pop()!;
        var length = array.length;
        for (var i = 0; i < length; i++) {
            if (compare(array[i], pivot)) {
                left.push(array[i]);
            } else {
                right.push(array[i]);
            }
        }
        return newArray.concat(quickSort(left, compare), pivot, quickSort(right, compare));
    }
};

export const QuickSort = <T>(array: T[], compare: CompareFunc<T>): T[] => {
    return quickSort([...array], compare);
};