### Graphs

#### Objectives: 
**After this students will be able to:**
- use an array to represent a graph
- implement the depth-first algorithm to visit every node in a graph
- implement the depth first search algorithm to find a path from one vertex to another

#### Introduction (10 mins)
- What is a graph
  - teacher drwas diagram on the board
    - a graph is a representation of two things that are related to eachother
    - the official (math) names are vertex for the points and edge for the lines
    - or you can say node and path

- What is a graph good for?
  - models the relationship between two things
  - we are modeling problems using a graph: What can it represent?
    - roads
    - paths to take ( how a Roomba finds it's way around a room )
    - viedo game enemy AI
    - routing a phone call across the city
    - the internet ( computer networks )
    - Google's Page Rank algorithm
    - Facebook's friend network
    - Siri's natural language processing ( grammerical statistical relationship of one word to another word )
    - analysis of chemical bonds in new molocules

- What kind of graph algorithms are there?
  - many different kinds
  - we will be looking at 2 related algorithm types (which do apply across many of the above examples )
  - 1 graph search algorithms
  - 2 graph path finding algorithms

#### How to represent Graphs : Students Do (paired exercise) (15 mins) [25 mins in]
- split everyone into pairs
- go over what a graph is, by explaining the diagram again
- ask how you would represent the above examples in a data structure
- ask if that example is reducable to an array (hint)

#### How to represent graphs: Teacher Talks (15 mins) [40 mins in]
- preface: we will only be working with acyclical directed unweighted graphs
  - acyclical - a node can't lead back to itself
  - directed - each edge has a direction
  - unweighted - some graph types have a (distance) value given to the edge
- explain the three canonical representations of a graph
  - https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/describing-graphs
  - edge lists
    - a list of arrays that contain the ids of both points
    - the simplest
    - we don't care about search
    ```
    [
      [0,1],
      [0,2],
      [2,3],
      [2,4]
    ]
    ```
  - adjacency matrix
    - a matrix where the combination of two vertex ids is the boolean value of that edge
    - constant time access to an edge
    - large space complexity (sparse)
    ```
    [
      [0,1,1,0,0],
      [0,0,0,0,0],
      [0,0,0,1,1],
      [0,0,0,0,0],
      [0,0,0,0,0]
    ]
    ```
  - adjacency list
    - a list / array of vertices keyed to the key / index of the vertex
    - worst case O(n) access to a given edge
    - ( what if a vertext is attached to every other vertex - the edge could be last in the list of V vertexes )
    ```
    [
      [1,2],
      [],
      [3,4],
      [],
      []
    ]
    ```
#### Teacher Do 5 mins [25mins in]

- introduce d3 visualization
- use js code above:
  - open graph-traversal/graph/graph.html in the browser
  - open graph.js in a text editor
  - replace line 4 in graph.js with the adjacency list example above
  - rerun the file ( refresh the browser )

#### Students Do 20 mins (paired exercise) [55mins in]
- have students work with the d3 example code, entering their own graphs

#### Graph D3 Example debrief: (10 mins) [1hr 5 mins in]
- answer any questions
- ask students:
  - why do the arrows point in the direction they do?
  - why do we need the empty arrays
- graph representation caveats:
  - no one right answer
  - adjacency lists happen to be simple and appropriate for what we'll be doing


#### Graph Traversal: Teacher Talks : (5 mins) [1hr 10 mins in]
- now we understand how to build a Graph and represent one
- we are going to talk about how to traverse a graph and search for a value

#### Graph Traversal: Students Do (pairing exercise) (5 mins) [1hr 15mins in]
- ask students: what order do we want to traverse the graph? Does it matter?
- what strategies would we use?

#### Graph Traversal Algorithm Depth First: Teacher Talks: (15 mins) [1hr 30 mins in]
- use same code as above:
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
  - "current" node is each succesive deeper node of the graph
  - it follows on the nearest, deepest branch, then it backtracks one iteration, continues to dive into the graph
- teacher describes what data structures are being used to keep track:
  - do some setup:
  - start an empty list of nodes that we might want to visit
  - start with the "start" node / the first node and put this in the list
  - start a loop that goes through every item in the list we just created
  - we descend down one level ( at the start this is the thing we just put into the list )
  - from the list get the very last thing we put into the list
  - add all the node's descendents to a list
  - start over
- psuedo code:
```
procedure DFS-iterative(G,v):
    for each node n in G
         n.discovered = FALSE

    let S be a stack
    S.push(v)
    while S is not empty
          v = S.pop()
          if v is not labeled as discovered:
              label v as discovered
              for all edges from v to w in G.adjacentEdges(v) do
                  S.push(w)
```
- explain a stack:
  - an array that only uses `push()` and `pop()` to put things into and get things out of itself
  - LIFO - last in, first out

#### Depth First Traversal: Students Do: (pairing exercies) (20 mins) [1hr 50 mins in]
- pass out postit notes
- one post it note will represent one node / vertex
- have the students work through the above simple graph (where 0 is the start node and 4 is the finish node)
- have them keep a notebook to write down the state of the current node and the stack at the same time
- questions for the students:
  - what in this code makes it "depth first"
  - why do you need to copy the graph?
  - why is it a while loop and not a for loop?

#### Depth First Traversal on Paper: Debrief: Teacher Talks: (10mins) [2hrs in]
- answer any questions
- check for understanding: ask students, what is the size of the stack (after the `pop()`) when the current node is `2`?

#### Depth First Traversal: JS Implementation: Students Do: (pairing exercise) (30 mins) [2hrs 30mins in]
- implement the work students have already done into real code in javascript
- if you havent already introduce the functionality of `graph.html` and `graph.js` (student version)
- create a new file called dftraversal.js in the same directory as graph.html
- this file iomplements a function that is called `dftraversal`
- this function has two arguments:
  - graph, an adjacency list array that represents a graph
  - start, the index of the graph where the function will begin traversal
- include `dftraversal.js` in the graph.html page with a script tag
- at first, use the example adjacency array above as your test graph that the algorithm traverses
- console log the value of current node for each iteration of the loop
- introduce the graph-traversal/maze/app.js `graph()` function
  - this function outputs a random adjacency list graph given two size arguments ( tell them not to worry about why there are two arguments )
- include this file in the graph.html file as well (with a script tag)
- their algorithm should work with this random test data
- if they get this done, they should implement a recursive depth first traversal function

#### Depth First Traversal Implementation : Debrief: Teacher Talks (10 mins) [2hrs 40 mins in]
- answer any questions

### Below Might be homework:

#### Depth First *Search* Implementation: Teacher Talks (10 mins) []
- keep track of the "parent" of each node
- after the check to see if this node is created, check to see if this node is the one you are searching for
- if it is, return a list of all of this node's parents
- run through the complete algorithm again, with these new additions

#### Depth First *Search* Implementation: Students Do (20 mins) [3 hrs in]
- create a new file called dfsearch.js in the same directory as graph.html
- this file iomplements a function that is called `dfsearch`
- get rid of the dummy function on line 169 of `graph.js`
- this function has three arguments:
  - graph, an adjacency list array that represents a graph
  - start, the index of the graph where the function will begin traversal
  - finish, the index value of the graph node / vertex we are searching for
- include `dfsearch.js` in the graph.html page with a script tag
- at first, use the example adjacency array above as your test graph ( search for the `4` index )
- console log the value of current node for each iteration of the loop
- using the graph-traversal/maze/app.js `graph()` function
- include this file in the graph.html file as well (with a script tag)
- their algorithm should work with this random test data
- if they get this done, they should implement a recursive depth first search function
