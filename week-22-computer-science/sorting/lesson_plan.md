### Sorting Algorithms

#### Objectives:
**After this students should be able to:**
- sort an array using insertion sort algorithm
- use pseudo code to help understand algorithm implementation

#### Introduction - teacher talking (10 mins)
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

#### Insertion Sort: Introduction: teacher talking (10 mins) [20 mins in]
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
#### Insertion Sort: Execution (pairing exercise) students do - (15 mins) [35 mins in]

- teacher uses english pseudo code above and postit notes, passes them out to students
- students write down each step of the algorithm on a piece of paper
- students write a series of numbers on 5 post-it notes - these represent an array
- students run through the algorithm one step at a time, keeping track of the value of `i` and `j` for each step

#### Insertion Sort Exercise: Debrief - teacher talks / discussion (10 mins) [45 mins in]
- check for understanding
- the pseudo code notation for algorithms gives you a good idea of what kind of code you need to write
- DONT just try to translate the pseudo code directly into code- you MUST understand the algorithm first

#### Insertion sort: Implementation: (pairing exercise) students do - (25 mins) [1hr 10mins in]
- teacher demos insertion sort code, animation of sorting
- stay in the same pairs
- open the index.html file (this is in the students dir)
- open / run the file with the debug console on
- you will get an error that says "Uncaught ReferenceError: insertionSort is not defined"
- define a function called insertionSort (create a file and include it or write it inline in the html file)
- **IMPORTANT**: don't write a `swap` function: one has been provided for you.
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

#### Insertion Sort Implementation: Debrief: teacher talks / duscussion (10 mins) [1hr 20 mins in]
- answer any questions
- what is the complexity ( Big-O ) of this algortihm?
- teacher asks student to create a graph of this on the board:
  - teacher takes example of 5 element array
  - counts number of steps for this execution ( must be for worst case performance )
  - worst case insertion sort array: `[5,4,3,2,1]` ( reversed array )
- Big-O of insertion sort: O(n^2)

#### Conclusions / Looking Ahead: teacher talks (5mins) [1hr 25mins in]
- alogrithms can be easy to understand and implement if you take your time with implementation
- not all algorithms are created equal, some are much more efficient than others
- algorithms are programming
- we will be spending the majority of the time (next 2 days) on problems that are a little more real world (but with more complicated implementation)
- graphs ( nodes and trees )
- we'll be seeing what they're used for, what problems they model and how to manipulate them

#### Homework: Selection Sort:
- Implement the selection sort algorithm
- https://en.wikipedia.org/wiki/Selection_sort
- Use the same code provided for insertion sort
- replace line 44 of index.html with a call to your selection sort function (it should take the same arguments)
```
/* a[0] to a[n-1] is the array to sort */
int i,j;

/* advance the position through the entire array */
/*   (could do j < n-1 because single element is also min element) */
for (j = 0; j < n-1; j++) {
    /* find the min element in the unsorted a[j .. n-1] */

    /* assume the min is the first element */
    int iMin = j;
    /* test against elements after j to find the smallest */
    for ( i = j+1; i < n; i++) {
        /* if this element is less, then it is the new minimum */
        if (a[i] < a[iMin]) {
            /* found new minimum; remember its index */
            iMin = i;
        }
    }

    if(iMin != j) {
        swap(a[j], a[iMin]);
    }
}
```
