//http://dstromberg.com/2013/07/tutorial-random-maze-generation-algorithm-in-javascript/
//
function maze( height, length ){

  var size = height * length;

  var zz = maze( size );

  return zz;
}
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

  var rounds = 0;

  //while we have nodes left to visit
  while( total_cells > total_visited ){

    var nextCell = getRandomNeighbor( cells, currentCell, height, length );
    //console.log( currentCell.location, nextCell );

    var currentLocation = currentCell.location;

    //did we find a valid neighbbor?
    if( nextCell != null ){

      //for that randomly selected neighbor, set some things

      if( cells[currentLocation].visited == 0 ){
        cells[currentLocation].visited = 1;
        total_visited++;
      }


      //check to make sure its not already in the list of neighbors
      if(cells[nextCell].visited == 0 && newNeighbor( cells[currentLocation].neighbors, nextCell ) ){

        cells[currentLocation].neighbors.push( nextCell );;
      }

      currentCell = cells[nextCell];
      path.push( currentCell );


    }else{

      //if we couldn't find a valid neighbor, go back one
      console.log( "back" );

      currentCell = path.pop();
    }

  }

  return cells;
}

function getRandomNeighbor( cells, currentCell, height, length ){

  var neighbors = [];

  //for each current cell, pick a random available neighbor
  var currentLocation = currentCell.location;

  //calculate for a given integer id, what row and column that integer is on:
  neighbors = getNeighbors( currentLocation, cells, height, length, false);

  if( neighbors.length == 0 ){

    neighbors = getNeighbors( currentLocation, cells, height, length, true);
  }

  var n = getRandomIndex( neighbors );
  console.log( "for: "+currentCell.location+" : "+n);
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

function cleanGraph( graph ){

  var newGraph = []

  for( var i=0; i<graph.length; i++ ){

    for( var j=0; j<graph[i].length; j++ ){

      newGraph.push(
        graph[i][j].neighbors
      )

      graph[i][j] = {

        neighbors : graph[i][j].neighbors

      };
    }
  }

  return graph;
  //return newGraph;
}

function buildMaze( m, start, last ){
  var maze = m;

  var table = document.querySelector("#maze");

  for( var i=0; i< maze.length; i++ ){
    var row = maze[i];

    var tr = document.createElement( "tr" );

    for( var j=0; j<row.length; j++ ){

      //create a square
      var td = document.createElement("td");

      if( i == start[0] && j == start[1] ){
        td.style.backgroundColor = "#e6c6c6";

      }

      if( i == last[0] && j == last[1] ){
        td.style.backgroundColor = "#b2d5ff";
      }

      //apply some styles:
      td.style.borderTop = "1px solid #000";
      td.style.borderBottom = "1px solid #000";
      td.style.borderLeft = "1px solid #000";
      td.style.borderRight = "1px solid #000";

      //if theres a neighbor dont make the border
      for( var k=0; k<row[j].neighbors.length; k++ ){

        var neighbor = row[j].neighbors[k]; //row[j].neighbors[k]

        if( neighbor[0] < i ){ //its above
          td.style.borderTop = "none";

        }else if( neighbor[0] > i ){ //its below
          td.style.borderBottom = "none";


        }//its on the same line

        if( neighbor[1] < j ){ //its ito the left
          td.style.borderLeft = "none";

        }else if( neighbor[1] > j ){ //its to the right

          td.style.borderRight = "none";


        }//its on the same line

      }

      if( i > 0 ){ // not on the top row

        //check this neighbor to see if we are neighbors
        var n = maze[i - 1][j].neighbors;

        if( hasMe( n, i, j ) ){
          td.style.borderTop = "none";
        }

      }

      if( j > 0 ){ // not on the far left
        var n = maze[i][j - 1].neighbors;

        if( hasMe( n, i, j ) ){
          td.style.borderLeft = "none";
        }

      }

      if( i < maze.length - 1 ){ // not on the bottom

        var n = maze[i + 1][j].neighbors;

        if( hasMe( n, i, j ) ){
          td.style.borderBottom = "none";
        }

      }

      if( j < row.length - 1 ){ // not on the far right

        var n = maze[i][j + 1].neighbors;

        if( hasMe( n, i, j ) ){
          td.style.borderRight = "none";
        }
      }

      td.id = "node-" + i + '-' + j;

      tr.appendChild( td );

    }

    table.appendChild( tr );
  }

}

function hasMe( neighbors, height, length ){
  for( var i=0; i< neighbors.length; i++ ){
    if( neighbors[i][0] == height && neighbors[i][1] == length ){
      return true;
    }
  }

  return false;
}

function hasIndexes( arr, i, j ){
  if( arr[i] && arr[i][j] ){

    return true;
  }

  return false;
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

        var id = "node-" + path[i][0] + "-" + path[i][1];

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

function getIndex( id, direction, height, length ){

  var y = Math.floor( id / length );

  var x = id % length;

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
    //if( index < 0 ) index = 0;
    var cell = cells[ index ];
    if( cell === undefined ) debugger;

    if( all_neighbors || cell.visited === 0 ){

      neighbors.push( index );
    }
  }

  return neighbors;
}
