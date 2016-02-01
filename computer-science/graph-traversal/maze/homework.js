// implementation of this algo:
//  https://en.wikipedia.org/wiki/Breadth-first_search


function solve( graph, start, finish ){

  //create new arr

  var nodes = [];

  for( var i=0; i<graph.length; i++ ){

    if( nodes[i] === undefined ){
      nodes[i] = [];
    }

    for( var j=0; j<graph[i].length; j++ ){

      nodes[i].push({
        location : [i,j],
        parent : null,
        distance : null
      })
    }
  }

  var queue = [];

  queue.unshift(start);

  while( queue.length != 0 ){

    var current_location = queue.pop();

    var current = nodes[ current_location[0] ] [ current_location[1] ];

    var current_neighbors = graph[ current.location[0] ][ current.location[1] ].neighbors;

    for( var i=0; i<current_neighbors.length; i++ ){

      var neighbor_y = current_neighbors[i][0];
      var neighbor_x = current_neighbors[i][1];

      if( nodes[neighbor_y][neighbor_x].distance === null ){
        nodes[neighbor_y][neighbor_x].distance = current.distance + 1;
        nodes[neighbor_y][neighbor_x].parent = [current_location[0], current_location[1] ];
        queue.unshift( [neighbor_y,neighbor_x] );


        if( finish[0] == neighbor_y && finish[1] == neighbor_x ){

          //follow the parents back to start
          return getPath( nodes, queue, start, finish );
        }
      }
    }
  }

  return null;
}

function getPath( nodes, queue, start, finish ){

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
