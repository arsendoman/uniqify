
function uniqueArrayElements(inputArray, caseSensitive = true, customComparator = null) {
    if (!Array.isArray(inputArray)) {
        throw new Error('Input must be an array.');
    }

    // Default comparison function based on case sensitivity
    const compare = (a, b) => caseSensitive ? a === b : a.toLowerCase() === b.toLowerCase();

    // Custom comparison function takes precedence
    const comparator = customComparator || compare;

    // Set to keep track of unique elements
    const uniqueSet = new Set();

    // Result array
    const resultArray = [];

    inputArray.forEach((element) => {
        let isUnique = true;

        // Check if the element is already in the set
        uniqueSet.forEach((uniqueElement) => {
            if (comparator(uniqueElement, element)) {
                isUnique = false;
            }
        });

        // If unique, add to set and result array
        if (isUnique) {
            uniqueSet.add(element);
            resultArray.push(element);
        }
    });

    return resultArray;
}
