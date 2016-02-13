#### lesson outline

- representation of a graph: https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/describing-graphs
  - edge lists
    - a list of arrays that contain the ids of both points
    - the simplest
    - we don't care about search
  - adjacency matrix
    - a matrix where the combination of two vertex ids is the boolean value of that edge
    - constant time access to an edge
    - large space complexity
  - adjacency list
    - a list / array of vertices keyed to the id of the vertex
    - worst case O(n) access to a given edge
    - ( what if a vertext is attached to every other vertex - the edge could be last in the list of V vertexes )


- a simple DFS implementation
- DFS implementation steps:

  - read the instructions
  - drawing exercise - postit notes? whiteboard?
  - detailed pseudo code
  - more drawing
  - code that visualizes (?)
    - instructor provided code that visualizes things (?)
  - move to next step

  - implementation steps:
    - understand maze representation
    - understand operations upon maze representation - ( for loops )
    - traverse the entire graph
    - output / visualization of graph traversal
    - add conditional
    - ( with conditional you can satisfy the search requirement )
    - add path generator

- dimensions of the problem: empty maze / screen ( how efficient is that? ) / maze with single blockage / complete maze
- more problem visualizations

- small generated maze
- generated maze
- large generated maze

- defining effectiveness - dimensions of the problem:
  - fastest working algorithm
  - uses least space
  - quickest working algorithm
