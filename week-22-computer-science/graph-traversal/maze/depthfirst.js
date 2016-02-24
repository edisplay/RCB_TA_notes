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

  stack.push( start );

  while( stack.length > 0 ){

    var current = stack.pop();

    var current_node = nodes[ current ];

    if( current_node.discovered === null ){

      if( current === finish ){
        return getPath( nodes, start, finish );
      }

      nodes[ current ].discovered = true;

      var neighbors = graph[ current ]

      for( var i=0; i<neighbors.length; i++ ){
        nodes[ neighbors[i] ].parent = current;

        stack.push( neighbors[i] );
      }
    }// else we dont do anything, go on to the next thing
  }

  return false;
}

function getPath( nodes, start, finish ){

  //we are at the finish

  //put the finish in the path
  var path = [];
  path.push( finish );

  //get the enxt node with parent
  var current = nodes[ finish ].parent;
  path.push( current );

var rounds = 0;
  //while( current !== start ){
  while( rounds < 1000 ){
    rounds++;

    if( current == start ){
      break;
    }

    if( nodes[ current ].parent === undefined ){


      break;
    }

    current = nodes[ current ].parent
    path.push( current );

  }

  path.reverse();

  return path;
}
