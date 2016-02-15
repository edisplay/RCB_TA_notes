// implementation of this algo:
//  https://en.wikipedia.org/wiki/Breadth-first_search

function solve( graph, start, finish ){

  //create new arr

  var nodes = [];

  for( var i=0; i<graph.length; i++ ){

    nodes.push({
      location : i,
      parent : null,
      distance : null
    })
  }

  var queue = [];

  queue.unshift(start);

  while( queue.length != 0 ){

    var current_location = queue.pop();

    var current = nodes[ current_location ];

    var current_neighbors = graph[ current.location ];

    for( var i=0; i<current_neighbors.length; i++ ){

      var neighbor = current_neighbors[i];

      if( nodes[neighbor].distance === null ){
        nodes[neighbor].distance = current.distance + 1;
        nodes[neighbor].parent = current_location;
        queue.unshift( neighbor );


        if( finish == neighbor ){

          //follow the parents back to start
          return getBFSPath( nodes, queue, start, finish );
        }
      }
    }
  }

  return null;
}

function getBFSPath( nodes, queue, start, finish ){

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
