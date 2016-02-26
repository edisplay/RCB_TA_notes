### Computer Science Intro

#### Objectives:
**After this students will be able to:**
- find a value in an array in a slow and fast way
- understand the graph of the time complexity of a function
- use the concept of algorithmic complexity to differentiate a fast algorithm from a slow one

#### Introduction 10 mins
- what is computer science?
  - study of how to do "computation"
  - computing things in a theoretical, hardware independent, mathematical way
  - reducing these ideas to provable formulas
  - understanding what we can compute, how long it will take, what kind of resources it will take up (RAM, disk space, Gzh processing, etc)

- why do we want to learn this stuff?
  - one layer above / more abstract than programming
  - abstractions of these problems permeate literally every piece of software you interact with:
  - https://medium.com/@_marcos_otero/the-real-10-algorithms-that-dominate-our-world-e95fa9f16c04
  - tells you how to do things at "internet scale", i.e. very large systems ( things you do more than 10 times )
  - shows understanding during job interviews

- what will we be covering this week
  - one or two very specific areas
  - deep implementation dive where we can talk about some theoretical stuff in more concrete terms
  - we will look at two types of algorithms that operate on two types of data structures
  - sorting / arrays
  - traversal / graphs

#### What are algorithms? 5 mins [15mins in]
- you've already been writing algorithms
- making a PB&J sandwich is an algorithm
- studying algorithms means studying how a given algorithm behaves as the inputs grow

##### Isn't one way to do things the same as all the others? ( how many ways can there be to make a pb&j sandwich )
- lets consider a simple alogrithm that finds a value in an array:

#### Linear Search (pairing exercise) 10mins [40 mins in]
- split the students into pairs
- for a sorted array we will find some arbitrary value inside this array
- given this code: ( have a nodejs file or html file prepared to run some stuff )
```
var stuff = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
var random_value = Math.ceil( Math.random() * 14 );
```

- write a for loop that looks at each index of the array to see if it matches the random value
- if it does match the random value display an alert box with the index of the array and the value
- linear search is just a fancy way of saying a for loop with a conditional

Solution:
```
for( var i=0; i<stuff.length; i++ ){

  if( stuff[i] === random_value ){

    alert( i + " : " + random_value );
  }
}
```

#### Linear Search: Discussion 15 mins [55 mins in]
- how long does this algorithm take? (what is it's *running time*)
- it will take between 1 and 14 tries depending on the randomly generated thign we are searching for
- how can we think about a generalizes way to describe how long this algorithm takes?
  - also: let's think about what "how long this takes" means:
  - how do we describe this in a way that only applies to the algorithm itself and not to the computer it runs on or the language you're using or whether or not someone trips over the power cord as you are running this program?
  - we can speak in terms of *instructions to the computer*, each thing we ask the computer to do can be counted as taking a bit longer
  - we asked the computer to do `stuff.length` things, plus run an alert
  - in math terms we asked the computer to do a maximum of 14 things, or *n*+1 things
  - this is the "complexity" or "runtime" of one piece of code, independent of it's hardware implementation

#### Changing inputs: graphs and how to define efficiency [10 mins] [1hr 5 mins in]
- consider if we made these changes in the way that stuff is created:
```
var stuff = [];

var max_size = 1000000000;

var size = Math.ceil( Math.random() * max_size );

for( var j=0; j<size; j++ ){

  stuff.push( j+1 );
}

var random_value = Math.ceil( Math.random() * size );
```
- *have a student explain to the class what this code does*
- If we use the same for loop (search algorithm) to find `random_value` how can we describe how long it will take?
- It will take between 1 and (size of array) times to find, between 1 and *n* times to find.

#### Big-O: How we describe algorithm efficiency [10 mins] [1 hr 15 mins in]]
- In CS we generally describe the efficiency of something as it's longest possible run time
- equivalent to `max_size` in the example above
- We want to understand how this algorithm behaves as we increase or decrease `max_size`
- This is "Big-O": The graph of the run time of an algorithm's worst case performance as the input size grows
- teacher graphs the efficiency of the algorithm as max_size grows larger:
  - what is the number of things that happen 
  - calculate the actual number of times the algorithm runs for the first 4 or 5 input sizes
  - draw another graph that extrapolates those numbers
- we want a picture of the behavior of this function as max_size get bigger and bigger to be as generalized as possible
  - thanks to the properties of polynomial functions / graphs, when we said above that our algorithm takes *n*+1 time to run, we can basically say that it takes *n* time to run
[big o graph](bigograph.jpg)

##### Isn't it all the same anyways? (15 mins) [1 hr 20 mins in]
- lets look at the most efficeint way possible to fins this same value:
- we started with a for loop:
```
for( var i=0; i<stuff.length; i++ ){

  if( stuff[i] === random_value ){

    alert( i + " : " + random_value );
  }
}
```
- let's look at something more efficient:
- teacher explains each step of the algorithm
```
function binaryIndexOf(stuff, searchElement) {

    // set some starting values
    var minIndex = 0;
    var maxIndex = stuff.length - 1;
    var currentIndex;
    var currentElement;

    //this is the main loop
    while (minIndex <= maxIndex) {

        // get a position in the middle
        currentIndex = (minIndex + maxIndex) / 2 | 0;

        //get that element
        currentElement = stuff[currentIndex];

        //test it
        if (currentElement < searchElement) {

            //if its less than we are looking for, look above this value
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {

            //if its more than we are looking for, look below this value
            maxIndex = currentIndex - 1;
        }
        else {

            //we found it return the index
            return currentIndex;
        }
    }
    return false;
}
```
- every step discards large chucks of possible things to look at
- very efficient
- what if `max_size` is 1 million, linear vs binary search

##### It's not all the same (5 mins) [1 hr 30 mins in]
- talk about what kinds of differences algorithm choice can make
- how and why this algo is more efficient
  - runs in O(logn)
  - teacher shows comparison graphs
- caveats and limitations
  - array must be sorted
  - what if the array is only ever 2 elements? is it still more efficient?
- show a graph of common Big-O runtimes
- "operations" (runtime) as we've defined them basically amount to loops, number of loops your program needs to run

#### Space complexity
- how much memory something takes up
- so far we've been dealing with time complexity, how long something takes to run
- we can denote this with the same Bio-O notation
