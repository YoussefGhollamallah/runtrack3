let numbers = [7, 11, 3, 52, 27, 32, 14, 8, 98, 66]

let order = 'asc';

function tri(numbers) {

    if (order === "asc") {
        numbers.sort((a,b) => a- b)
    } else if ( order === "desc") {
        numbers.sort((a,b) => b - a)
    }
    return numbers;
}

console.log(tri(numbers));
