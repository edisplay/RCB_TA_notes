//http://dstromberg.com/2013/07/tutorial-random-maze-generation-algorithm-in-javascript/
function connectedGraph( height, length ){
  var size = height * length;

  var cells = [];

  for( var i=0; i<size; i++ ){

      cells.push({
        location : i,
        visited : 0,
        neighbors : []
      });
  }

  var startingCell = cells[0];

  //setup default values
  var total_cells = size;
  var path = [];

  var currentCell = startingCell;
  var total_visited = 1;

  //start the path here
  path.push( currentCell );

  var rounds = 0;
  // ounds is a hack, should be cells visited like below, but its a different ratio...
  while( rounds < 1000 ){

    rounds++;

    var currentLocation = currentCell.location;

    var neighbors = getNeighbors( currentLocation, cells, height, length, true, ["down","left","right"]);

      for( var i=0; i<neighbors.length; i++ ){

        var nextCell = neighbors[i];

        cells[nextCell].visited = 1;

        if( newNeighbor( cells[currentLocation].neighbors, nextCell ) ){

          cells[currentLocation].neighbors.push( nextCell );
        }
        total_visited++;

        currentCell = cells[nextCell];
        path.push( currentCell );
      }
  }

  console.log( total_visited, total_cells );

  return cleanGraph( cells );
}

function graph( height, length ){

  var size = height * length;

  var cells = [];

  for( var i=0; i<size; i++ ){

      cells.push({
        location : i,
        visited : 0,
        neighbors : []
      });
  }

  var startingCell = cells[0];

  //setup default values
  var total_cells = size;
  var path = [];

  var currentCell = startingCell;
  var total_visited = 1;

  //start the path here
  path.push( currentCell );

  var rounds = 0;

  while( total_visited < total_cells ){

    var nextCell = getRandomNeighbor( cells, currentCell, height, length );


    //did we find a valid neighbbor?
    if( nextCell != null ){

      var currentLocation = currentCell.location;

      //for that randomly selected neighbor, set some things
      //check to make sure its not already in the list of neighbors
      if( cells[nextCell].visited == 0 && newNeighbor( cells[currentLocation].neighbors, nextCell ) ){

        cells[nextCell].visited = 1;
        total_visited++;

        cells[currentLocation].neighbors.push( nextCell );;
      }

      currentCell = cells[nextCell];
      path.push( currentCell );

    }else{
      currentCell = path.pop();
    }

  }

  return cleanGraph( cells );
}

function cleanGraph( graph ){

  var ret = [];

  for( var i=0; i<graph.length; i++ ){

    ret.push( graph[i].neighbors );
  }

  return ret;
}

function getRandomNeighbor( cells, currentCell, height, length ){

  var neighbors = [];

  var currentLocation = currentCell.location;

  //for each current cell, pick a random available neighbor
  neighbors = getNeighbors( currentLocation, cells, height, length, false);

  var n = getRandomIndex( neighbors );

  return n;

}

function getRandomIndex( arr ){
  var nextCell = null;

  while( nextCell == null && arr.length > 0 ){

    var nIndex = Math.floor(Math.random()*arr.length);
    nextCell = arr[nIndex];

    if( nextCell == null ){
      arr.splice(nIndex, 1);
    }

  }

  return nextCell;
}
function newNeighbor( neighbors, id ){

  for( var i=0; i<neighbors.length; i++ ){

    if( neighbors[i] === id ){

      return false;
    }
  }

  return true;
}

function getY( id, length ){

  return Math.floor( id / length );
}

function getX( id, length ){

  return id % length;
}

function getDirection( id, neighbor, length ){

  var x = getX( id, length );
  var y = getY( id, length );

  var nx = getX( neighbor, length );
  var ny = getY( neighbor, length );

  if( nx > x ){

    return "right";
  }

  if( ny > y ){

    return "down";
  }

  if( nx < x ){

    return "left";
  }

  if( ny < y ){

    return "up";
  }

  return null;
}

function getIndex( id, direction, height, length ){

  var y = getY( id, length );

  var x = getX( id, length );

  switch( direction ){

    case "up":
      return (length * (y-1)) + x;

    case "down":
      return (length * (y+1)) + x;

    case "right":
      return (length * (y)) + (x+1);

    case "left": // % - 1
      return (length * (y)) + (x-1);
  }

  return null;
}

/*
    0  1  2  3
    4  5  6  7
    8  9  10 11
    12 13 14 15

    1,4 ==> 13

    x,y

    x = id%length
    y = id/length

*/

function isEdge( id, direction, height, length ){
  var y = Math.floor( id / length );

  var x = id % length;

  if( direction == "up" && y == 0 ){
    return true;

  }

  if( direction == "down" && y == height - 1){
    return true;
  }

  if( direction == "right" && x == length -1 ){
    return true;
  }

  if( direction == "left" && x == 0 ){
    return true;
  }

  return false;
}

function getNeighbors( id, cells, height, length, all_neighbors, directions ){

  var neighbors = [];
  if( directions === undefined ){

    var directions = ['up', 'down', 'left', 'right'];
  }

  for( var i=0; i<directions.length; i++ ){

    if( isEdge( id, directions[i], height, length ) ){
      continue;
    }

    var index = getIndex( id, directions[i], height, length );

    var cell = cells[ index ];

    var cyclical = false;

    for( var j=0; j < cell.neighbors.length; j++ ){

      if( cell.neighbors[j] == id ){
        cyclical = true;
      }
    }

    if( ( all_neighbors || cell.visited === 0 ) && cyclical == false ){

      neighbors.push( index );
    }
  }

  return neighbors;
}
