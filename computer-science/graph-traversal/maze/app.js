//http://dstromberg.com/2013/07/tutorial-random-maze-generation-algorithm-in-javascript/
function maz( height, length ){

  var size = height * length;

  var cells = [];

  //generate nested arrasy
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

  while( total_cells > total_visited ){

    var nextCell = getRandomNeighbor( cells, currentCell, height, length );

    //did we find a valid neighbbor?
    if( nextCell != null ){

      var currentLocation = currentCell.location;

      //for that randomly selected neighbor, set some things

      if( cells[currentLocation].visited == 0 ){
        cells[currentLocation].visited = 1;
        total_visited++;
      }


      //check to make sure its not already in the list of neighbors
      if( cells[nextCell].visited == 0 && newNeighbor( cells[currentLocation].neighbors, nextCell ) ){

        cells[currentLocation].neighbors.push( nextCell );;
      }

      currentCell = cells[nextCell];
      path.push( currentCell );

    }else{

      currentCell = path.pop();
    }

  }

  return cells;
}

function getRandomNeighbor( cells, currentCell, height, length ){

  var neighbors = [];

  var currentLocation = currentCell.location;

  //for each current cell, pick a random available neighbor
  neighbors = getNeighbors( currentLocation, cells, height, length, false);

  if( neighbors.length == 0 ){
    neighbors = getNeighbors( currentLocation, cells, height, length, true);
  }

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

function buildMaze( m, start, last, height, length ){
  var maze = m;

  var table = document.querySelector("#maze");

  var currentRow = null;
  var tr = null;

  for( var i=0; i< maze.length; i++ ){

    if( getY( i, length ) != currentRow ){
      if( tr ){
        table.appendChild( tr );
      }

      var tr = document.createElement( "tr" );

      currentRow = getY( i, length );

    }

    //create a square
    var td = document.createElement("td");

    if( i == start ){
      td.style.backgroundColor = "#e6c6c6";
    }

    if( i == last ){
      td.style.backgroundColor = "#b2d5ff";
    }

    //apply some styles:
    td.style.borderTop = "1px solid #000";
    td.style.borderBottom = "1px solid #000";
    td.style.borderLeft = "1px solid #000";
    td.style.borderRight = "1px solid #000";

    //if theres a neighbor dont make the border
    for( var k=0; k<maze[i].neighbors.length; k++ ){

      var neighbor = maze[i].neighbors[k];

      var direction = getDirection( i, neighbor, length );

      switch( direction ){
        case "right":
          td.style.borderRight = "none";
          break;

        case "down":
          td.style.borderBottom = "none";
          break;

        case "left":
          td.style.borderLeft = "none";
          break;

        case "up":
          td.style.borderTop = "none";
          break;

      }

    }

    //brute force check each other cell to see if this cell is in the neighbor array
    //
    for( var m=0; m<maze.length; m++ ){

      var neighbors = maze[m].neighbors;

      for( var p=0; p<neighbors.length; p++ ){

        //we found our current node, its a neighbor of something else
        if( neighbors[p] === i ){

          //get the maze[m] nodes direction
          var direction = getDirection( i, m, length );

          switch( direction ){
            case "right":
              td.style.borderRight = "none";
              break;

            case "down":
              td.style.borderBottom = "none";
              break;

            case "left":
              td.style.borderLeft = "none";
              break;

            case "up":
              td.style.borderTop = "none";
              break;

          }
        }
      }
    }

    td.id = "node-" + i;

    tr.appendChild( td );


  }

  table.appendChild( tr );

}

function newNeighbor( neighbors, id ){

  for( var i=0; i<neighbors.length; i++ ){

    if( neighbors[i] === id ){

      return false;
    }
  }

  return true;
}

function displayPath( path ){

  for( var i=0; i<path.length; i++ ){

    setTimeout(function(i) {
      return function() {

        var id = "node-" + path[i];

        var td = document.querySelector('#'+id);

        td.innerHtml = "";

        var t = document.createTextNode("\u2022");
        td.appendChild( t );

      };
    }(i), 70*i);

  }
}

function timer(){

  var d = Date.now();

  return function(){
    var now = Date.now();
    return now - d;
  };
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
      return (length * y) + x-1;

    case "down":
      return (length * y) + x+1;

    case "right":
      return (length * (y+1)) + x;

    case "left":
      return (length * (y-1)) + x;
  }

  return null;
}

function isEdge( id, direction, height, length ){
  var y = Math.floor( id / length );

  var x = id % length;

  if( direction == "up" && x == 0 ){
    return true;

  }

  if( direction == "down" && x == height - 1 ){
    return true;

  }

  if( direction == "right" && y == length - 1 ){
    return true;
  }

  //here, the first column can either be 0 or the mod (%) value can equal the id
  //also check for that value
  //if x % length equals itself we are in the first row there's nothing to the left
  if( direction == "left" && (  y == 0 ) ){
    return true;
  }

  return false;
}

function getNeighbors( id, cells, height, length, all_neighbors ){

  var neighbors = [];
  var directions = ['up', 'down', 'left', 'right'];

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
