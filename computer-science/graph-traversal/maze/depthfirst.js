function dfsolve( graph, start, finish ){

  var nodes = [];

  var stack = [];

  //create a copy of the graph that adds the visited thing
  for( var i=0; i<graph.length; i++){

      nodes.push({
        parent : null,
        location: i,
        discovered : null
      });
  }

  stack.push( nodes[ start ] );

  while( stack.length > 0 ){

    var current = stack.pop();

    if( current.discovered === null ){

      nodes[ current.location ].discovered = true;

      var graph_node = graph[ current.location ]

      //this for loop sees if we are done, for this level
      for( var i=0; i<graph_node.neighbors.length; i++ ){

        if( graph_node.neighbors[i] === finish ){

          stack.push( current );

          nodes[ graph_node.neighbors[i] ].parent = current.location;

          stack.push( nodes[ graph_node.neighbors[i] ] );

          return getPath( nodes, start, finish );
        }
      }

      for( var i=0; i<graph_node.neighbors.length; i++ ){
        nodes[ graph_node.neighbors[i] ].parent = current.location;

        stack.push( nodes[ graph_node.neighbors[i] ] );
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
  var current = nodes[ finish ].parent;
  path.push( current );

  // this doesnt work for some reason??
  //while( current[0] !== start[0] && current[1] !== start[1] ){

  while( !( current === start ) ){

    current = nodes[ current ].parent
    path.push( current );

  }

  path.reverse();

  return path;
}
