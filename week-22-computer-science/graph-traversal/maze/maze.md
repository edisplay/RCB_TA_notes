### Graph representations of a Maze and Graph Traversal

#### Objectives:
**after this lesson students will be able to:**
- represent an open field using a graph
- represent a maze using a graph
- use the depth first and breadth first algorithm to find a point in a maze or feild

#### Introduction Teacher Talks (15mins)
- today we are going to learn more about graphs
- we are going to be using the example of a maze to talk about graph search
- we are going to talk about the efficiencies of these algorithms

##### Looking at graph algorithm behaviors
- we will be looking at some graphs that can visually show us how these algorithms behave when you run them

##### Graph as a field
- draw a 4 x 4 grid on the board
- ask how you would traverse each 2d square to get from one corner of the grid to the other
  - at any sqaure you can move up right left or down
  - chess board
- draw the path from one corner to another using nodes and paths
- ask students what this looks like
- run `graph.html` using the `connectedGraph()` function to generate the graph contained in the `generated_graph` variable
- show the D3 rendering to students
- make sure that line 57 with `connectedGraph` is uncommented in `maze/index.html` and that lines 63-67 ( breadth first search ) are commented out
- run `maze/index.html` in the browser
- students watch the algorithm find a random point

##### Graph as a field / Depth First Search Review: Students Talk (5 mins) [20 mins in]
- why does the algorithm behave that way?
- what is the Big-O of this algorithm?

##### Graph as a Maze: Teacher Talks (5 mins) [25 mins in]
- explain we are going to learn why the `graph()` function has 2 arguments
- use the graph function to display a D3 graph
  - this is the graph.html file
- go back to the board drawing of the grid
  - draw in all the paths / connections
  - what if we wanted to make finding the end point harder?
  - begin erasing certain paths
- edit the `maze/index.html` file again. Uncomment line 56 so that the `graph()` function generates the graph
- run the file

#### Maze Path Finding: Students Do (30 mins) [55 mins in]
- introduce students to the maze/index.html file
- have them note that the file expects to have a function defined called `dfsearch()` this is the same as theyve already worked on
- tell them to include their file containing `dfsearch()` in a script tag
- the code should solve and display the maze solution

#### Graph Traversal Algorithm Breadth First: Teacher Talks: (20 mins) [1hr 15 mins in]
- use the same graph sample code:
```
[
  [1,2],
  [],
  [3,4],
  [],
  []
]
```
- teacher draws a diagram of how it would work ( how the nodes are traversed )
- set some things up:
  - create a copy of the graph to keep track of where we are and who the parent is
  - create an empty queue
  - in the copy graph, set the start node distance to 0
- start the loop
- get a node from the queue
- for all of it's neighbors (if we haven't visited them yet - distance == INFINITY), set their distance to one more then the current distance
- put them all in the queue

- psuedo code:
```
Breadth-First-Search(Graph, root):

     for each node n in Graph:
         n.distance = INFINITY
         n.parent = NIL

     create empty queue Q

     root.distance = 0
     Q.enqueue(root)

     while Q is not empty:

         current = Q.dequeue()

         for each node n that is adjacent to current:
             if n.distance == INFINITY:
                 n.distance = current.distance + 1
                 n.parent = current
                 Q.enqueue(n)
```
- explain a queue:
  - an array that only uses `unshift()` and `pop()` to put things into and get things out of itself
  - FIFO - first in first out
- demonstrate comparison between dfs and bfs in the maze code `maze/index.html`
  - make sure appropriate calls to `displayPath()` on lines 81 and 82 are being made
  - start with the maze
  - generate an empty field by uncommenting line 57 and commenting out line 56
  - compare the algorithms with an empty field
  - generate a field with a couple obstacles by uncommenting line 58

#### Breadth First Traversal: Students Do: (pairing exercies) (15 mins) [1hr 30 mins in]
- pass out postit notes
- one post it note will represent one node / vertex
- have the students work through the above simple graph (where 0 is the start node and 4 is the finish node)
- have them keep a notebook to write down the state of the current node and the stack at the same time
- questions for the students:
  - why do we see such different behaviors between breadth first and depth first search?
  - what about this code makes it "breadth first"?
  - why do we need the value "INFINITY"
  - why do we do `n.distance = current.distance+1` instead of `n.distance++`?

#### Breadth First Traversal on Paper: Debrief: Teacher Talks: (10mins) [1hrs 40 in]
- answer any questions
- check for understanding: ask students, what is the size of the stack (after the `pop()`) when the current node is `2`?

#### Breadth First Traversal: JS Implementation: Students Do: (pairing exercise) (rest of period) [2hrs 30mins in]
- repeat dfs steps

#### Breadth First Traversal Implementation Debrief: (10 mins)
- answer any questions

#### Greedy Breadth First Search: Homework Introduction (10 mins)
- demo greedy bfs
- introduce homeowrk
