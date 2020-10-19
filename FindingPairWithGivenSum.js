/*
FindingPairWithGivenSum
Written 10/19/20
GitHub: Half28/FindingPairWithGivenSum

Feel free to modify as you please, all that I ask is that if you redistribute this code to give me credit.
Let me know if there's some random case that doesn't work.

This code, given an array and target sum, searches through the array for two elements who add to get the target sum.
The most common approach would be to brute-force it and add every possible combination to check for the given sum, but this is much more efficient.
It sorts the array in ascending order, then loops through as long as the first index (array[0]) is less than the last. If the sum is not found adding those two,
it will decrement the index of the highest bounds or increment the index of the lowest bounds, depending on if the result is too high or low. 
*/

function findPair(arr, sum)
{
    if (arr.length == 0)
    {
        console.log("Not enough arguments to sort"); //Empty array; not possible
        return;
    }
    else if (arr.length == 2)
    {
        if ((arr[0] + arr[1]) == sum)
        {
            console.log("Match found! (" + arr[0] + " + " + arr[1] + " = " + sum + ")"); //Edge case for only two array elements
            return;
        }
    }

    arr.sort(function(a, b) { return a-b });
    let start = 0, end = arr.length - 1;
    var result = arr[start] + arr[end];

    while (start < end)
    {
        result = arr[start] + arr[end];
        if (result == sum)
        {
            console.log("Match found! (" + arr[start] + " + " + arr[end] + " = " + sum + ")"); //Match found; print results
            return;
        }
        else if (result > sum)
        {
            end--; //Decrement the end of the array if the result is too high (this works because the array is sorted in ascending order)
        }
        else if (result < sum)
        {
            start++; //Increment the start of the array if result is too low
        }
        console.log(arr[start], arr[end]); //Log the results each iteration (NOTE: Definitely optional if it is a large array; I just did it to see what the loop was doing)
    }

    console.log("No pairs found."); //No pairs found
}

//Example

var myArr = [12, 20, 96, 83, 6, 213, 8];

findPair(myArr, 108);