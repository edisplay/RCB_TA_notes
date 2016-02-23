### Sorting Algorithms

#### Objectives:
**After this students should be able to:**
- sort an array using insertion sort algorithm
- use pseudo code to help understand algorithm implementation

#### Introduction
- Why sorting algorithms
  - An easy understanable intro to basic algorithms with data representations / data structures we are already familiar with
  - Easily understanadle solutions
  - Simple introduction to pesudo code

- What is a sorting algorithm?
  - takes an array of data and sorts it

- Where are soring algorithms used?
  - javascript's Array.sort:
  ```
  var monkey = [3,1,18373,7,8,9,2,4,2];
  console.log( monkey.sort() );
  ```
  - this in an implementaion of the quick sort algorithm
  - https://en.wikipedia.org/wiki/Quicksort

#### Insertion Sort: Introduction:
- http://www.sorting-algorithms.com/insertion-sort
- https://en.wikipedia.org/wiki/Insertion_sort
- start at the beggining of the array
- move into a loop
- compare only 2 values
- swap if left is more than right
- repeat until this current value is less than the right value OR the value is at the far right of the array
- pseudo code:
```
for i ← 1 to length(A) - 1
    j ← i
    while j > 0 and A[j-1] > A[j]
        swap A[j] and A[j-1]
        j ← j - 1
    end while
end for
```
#### Insertion Sort: Execution (pairing exercise) 

- teacher uses english pseudo code above and postit notes, passes them out to students
- students write down each step of the algorithm on a piece of paper
- students write a series of numbers on 5 post-it notes - these represent an array
- students run through the algorithm one step at a time, keeping track of the value of `i` and `j` for each step

#### Insertion Sort Exercise: Debrief 
- check for understanding
- the pseudo code notation for algorithms gives you a good idea of what kind of code you need to write
- DONT just try to translate the pseudo code directly into code- you MUST understand the algorithm first

#### Insertion sort: Implementation: (pairing exercise)
- teacher demos insertion sort code, animation of sorting
- stay in the same pairs
- open the index.html file (this is in the students dir)
- open / run the file with the debug console on
- you will get an error that says "Uncaught ReferenceError: insertionSort is not defined"
- define a function called insertionSort
- IMPORTANT: don't write a `swap` function: one has been provided for you.
- use the english pseudo code to implement insertion sort function
- if you finish early with this exercise, implement a recursive insertion sort: 
```
function sort( A, i ){
  if A.length == i
    return A

  A = swapValues( A, i )

  return sort( A, i+1 )
}

function swapValues( A, index ){
  if A[i] is more than or equal to A[i-1] or we are at the left-most index
    return A

  swap A[i-1] with A[i]

  return swapValues( A, i-1 )
}
```

#### Insertion Sort Implementation: Debrief:
- answer any questions
- what is the complexity ( Big-O ) of this algortihm?
- teacher asks student to create a graph of this on the board:
  - teacher takes example of 5 element array
  - counts number of steps for this execution ( must be for worst case performance )
  - worst case insertion sort array: `[5,4,3,2,1]` ( reversed array )
- Big-O of insertion sort: O(n^2)
