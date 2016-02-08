function dfsolve( graph, start, finish ){

  var nodes = [];

  var stack = [];

  //create a copy of the graph that adds the visited thing
  for( var i=0; i<graph.length; i++){

    if( nodes[i] === undefined ){

      nodes[i] = [];
    }

    for( var j=0; j<graph[i].length; j++ ){

      nodes[i].push({
        parent : null,
        location: [i,j],
        discovered : null
      });

    }
  }

  stack.push( nodes[ start[0]][ start[1]] );

  while( stack.length > 0 ){

    var current = stack.pop();

    if( current.discovered === null ){

      nodes[ current.location[0] ][ current.location[1] ].discovered = true;

      var graph_node = graph[ current.location[0] ][ current.location[1] ]

      //this for loop sees if we are done, for this level
      for( var i=0; i<graph_node.neighbors.length; i++ ){

        if( graph_node.neighbors[i][0] === finish[0] && graph_node.neighbors[i][1] === finish[1] ){
          stack.push( current );
          nodes[ graph_node.neighbors[i][0] ][ graph_node.neighbors[i][1] ].parent = [current.location[0], current.location[1]];

          stack.push( nodes[ graph_node.neighbors[i][0]][ graph_node.neighbors[i][1]] );

          return getPath( nodes, start, finish );
        }
      }

      for( var i=0; i<graph_node.neighbors.length; i++ ){
        nodes[ graph_node.neighbors[i][0] ][ graph_node.neighbors[i][1] ].parent = [current.location[0], current.location[1]];

        stack.push( nodes[ graph_node.neighbors[i][0] ][ graph_node.neighbors[i][1] ] );
      }
    }
  }

  return stack;
}

function getPath( nodes, start, finish ){

  //we are at the finish

  //put the finish in the path
  var path = [];
  path.push( finish );

  //get the enxt node with parent
  var current = nodes[ finish[0] ] [ finish[1] ].parent;
  path.push( current );

  // this doesnt work for some reason??
  //while( current[0] !== start[0] && current[1] !== start[1] ){

  while( !( current[0] === start[0] && current[1] === start[1] ) ){

    current = nodes[ current[0] ] [ current[1] ].parent
    path.push( current );

  }

  path.reverse();

  return path;
}
