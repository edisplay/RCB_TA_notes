var arrayStateQueue = [];
function generateRandomizedArray( size ){
  var set = [];

  for( var i=0; i<size; i++ ){
    set.push( i );
  }

  var data = [];

  for( var i=0; i<size; i++ ){

    var index = Math.floor(Math.random()*set.length);
    data.push( set[index] );
    set.splice(index, 1);
  }

  return data;
}

function swap( arr, idx1, idx2 ){

  var val1 = arr[idx1];

  var val2 = arr[idx2];

  arr[idx1] = val2;
  arr[idx2] = val1;

  queueArrayBuild( arr, idx1, idx2 );

  return arr;
}

/////////////////////////////////////////
/////////////////////////////////////////
//// html manipulation stuff   //////////
/////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

function queueArrayBuild( arr, idx1, idx2 ){

  arrayStateQueue.push({
    array : arr.slice(),
    idx1 : idx1,
    idx2 : idx2
  });
}

function display( arrays, interval ){

  for( var i=0; i<arrays.length; i++ ){

    var data = arrays[i].array;

    setTimeout(function(i, data) {
      return function() {

        buildHtmlArray( data );

      };
    }(i, data), interval*i);

  }
}

function buildHtmlArray( data ){

  var container = document.querySelector("#data");

  container.innerHTML = "";

  for( var i=0; i< data.length; i++ ){
    var index = document.createElement("div");

    index.setAttribute( "class", "index" );

    index.style.height = ( data[i] * 15 ) + 15 + "px";

    var t = document.createTextNode( data[i] );
    index.appendChild( t );

    container.appendChild( index );

  }
}
