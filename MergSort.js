// Function to perform merge sort
function mergeSort(array) {
    // Base case: if the array has one or zero elements, it's already sorted
    if (array.length <= 1) {
        return array;
    }

    // Find the middle index of the array
    const middle = Math.floor(array.length / 2);

    // Split the array into left and right halves
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // Recursively sort both halves and merge them
    return merge(mergeSort(left), mergeSort(right));
}

// Function to merge two sorted arrays
function merge(left, right) {
    let result = []; // Array to hold the merged result
    let leftIndex = 0; // Pointer for the left array
    let rightIndex = 0; // Pointer for the right array

    // Compare elements of both arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Concatenate any remaining elements from both arrays to the result
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage
const array = [12,8,9,3,11,5,4];

console.log(mergeSort(array));
