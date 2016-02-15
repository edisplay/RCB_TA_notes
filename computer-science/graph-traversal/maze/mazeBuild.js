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
    for( var k=0; k<maze[i].length; k++ ){

      var neighbor = maze[i][k];

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

      var neighbors = maze[m];

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
