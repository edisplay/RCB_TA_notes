//http://dstromberg.com/2013/07/tutorial-random-maze-generation-algorithm-in-javascript/

function maze( height, length ){

  var cells = [];

  //generate nested arrasy
  for( var i=0; i<height; i++ ){
    var temp_array = [];

    for( var j = 0; j< length; j++ ){
      temp_array.push({
        location : { height: i, length: j },
        visited : 0,
        neighbors : [],
        daed_end : 0
      });
    }

    cells.push(temp_array);

  }

  var startingCell = cells[0][0];

  //setup default values
  var total_cells = height * length;
  var path = [];

  var currentCell = startingCell;
  var total_visited = 1;

  //start the path here
  path.push( currentCell );

  //while we have nodes left to visit
  while( total_cells > total_visited ){

    var nextCell = getRandomNeighbor( cells, currentCell, height, length );

    var currentHeight = currentCell.location.height;
    var currentLength = currentCell.location.length;

    //did we find a valid neighbbor?
    if( nextCell != null ){

      //for that randomly selected neighbor, set some things

      if( cells[currentHeight][currentLength].visited == 0 ){
        cells[currentHeight][currentLength].visited = 1;
        total_visited++;
      }

      //if we havent visited this cell, push the thing we found as a neighbor
      if(cells[nextCell[0]][nextCell[1]].visited == 0 && newNeighbor( cells[currentHeight][currentLength].neighbors, nextCell[0], nextCell[1] ) ){

        cells[currentHeight][currentLength].neighbors.push( nextCell );;
      }

      currentCell = cells[nextCell[0]][nextCell[1]];
      path.push( currentCell );


    }else{

      //if we couldn't find a valid neighbor, go back one square

      currentCell = path.pop();
    }

  }

  return cells;
}

function findNextCell( ){

    var nextCell = getRandomNeighbor( cells, currentCell, height, length );
    var currentHeight = currentCell.location.height;
    var currentLength = currentCell.location.length;

    //did we find a vlid neighbbor?
    if( nextCell != null ){

      //for that randomly selected neighbor, set some things
      cells[currentHeight][currentLength].visited = 1;
      cells[currentHeight][currentLength].neighbors.push( nextCell );;

      currentCell = cells[nextCell[0]][nextCell[1]];
      path.push( currentCell );

      total_visited++;

    }else{

      //if we couldn't find a valid neighbor, go back one square

      currentCell = path.pop();
    }

    if( total_cells <= total_visted ){
      return cells;

    }else{
      return findNextCell( cells, path, currentCell, height, length );
    }
}

function getRandomNeighbor( cells, currentCell, height, length ){

  //for each current cell, pick a random available neighbor

  var up_neighbor = null;
  var down_neighbor = null;
  var left_neighbor = null;
  var right_neighbor = null;

  var currentHeight = currentCell.location.height;
  var currentLength = currentCell.location.length;

  //is there a thing above and has it been visited
  //prefer one that hasnt been visited
  if( currentHeight > 0 && !cells[currentHeight -1][currentLength].visited ) {
    up_neighbor = [currentHeight -1, currentLength];
  }

  if( currentHeight < height -1 && !cells[currentHeight +1][currentLength].visited ) {
    down_neighbor = [currentHeight +1, currentLength];
  }

  if( currentLength > 0 && !cells[currentHeight][currentLength - 1].visited ) {
    left_neighbor = [currentHeight, currentLength - 1];
  }

  if( currentLength < length - 1 && !cells[currentHeight][currentLength + 1].visited ) {
    right_neighbor = [currentHeight, currentLength + 1];
  }

  //if everything has been visited, pick one
  if( up_neighbor == null && down_neighbor == null && left_neighbor == null && right_neighbor ==null ){

    //is there a thing above and has it been visited
    if( currentHeight > 0 ) {
      up_neighbor = [currentHeight -1, currentLength];
    }

    if( currentHeight < height -1 ) {
      down_neighbor = [currentHeight +1, currentLength];
    }

    if( currentLength > 0 ) {
      left_neighbor = [currentHeight, currentLength - 1];
    }

    if( currentLength < length - 1 ) {
      right_neighbor = [currentHeight, currentLength + 1];
    }

  }

  var neighbors = [ up_neighbor, down_neighbor, left_neighbor, right_neighbor ];

  return getRandomIndex( neighbors );
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

  //return graph;
  return newGraph;
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

function newNeighbor( neighbors, height, length ){

  for( var i=0; i<neighbors.length; i++ ){

    if( neighbors[i][0] == height && neighbors[i][1] == length ){
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

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

/*
 *
 *
 *           RUN ALL THE THINGS HERE
 *
 *
 */

var height = 30;
var length = 30;

var m = maze( height, length );

var start = [0,0];
var finish = [Math.floor(Math.random()*height),Math.floor(Math.random()*length)];

var path = solve( m, start, finish );

//do DOM stuff
window.onload = function(){

  buildMaze( m, start, finish );

  setTimeout( function(){
    displayPath( path );
  }, 400 );

}
