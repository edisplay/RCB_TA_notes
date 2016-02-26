function dftraversal( graph, start ){

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
      console.log( current );

      if( current === graph.length -1 ){
        return nodes;
      }

      nodes[ current ].discovered = true;

      var neighbors = graph[ current ]

      for( var i=0; i<neighbors.length; i++ ){
        nodes[ neighbors[i] ].parent = current;

        stack.push( neighbors[i] );
      }
    }
  }

  return false;
}
