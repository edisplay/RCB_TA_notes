function asolve( graph, start, finish ){

  var closedSet = [];
  var openSet = [];

  openSet.push( start );
  var cameFrom = [];

  var g_nodes = [];

  for( var i=0; i<graph.length; i++ ){

    if( g_nodes[i] === undefined ){

      g_nodes[i] = [];
    }

    for( var j=0; j<graph[i].length; j++ ){

      g_nodes[i].push( null );
    }
  }

  g_nodes[ start[0] ][ start[1] ] = 0;




  return [];
}

