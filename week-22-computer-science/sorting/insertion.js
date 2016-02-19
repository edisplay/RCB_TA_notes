//sort
function insertionSort( data ){

  for( var i=0; i<data.length; i++ ){

    var j = i;

    //while we arent at the 1st el
    // and if the left el is more than current, swap 
    while( j > 0 && data[j-1] > data[j] ){

      data = swap( data, j, j-1 );
      j = j-1;
    }

  }

  return data;
}
