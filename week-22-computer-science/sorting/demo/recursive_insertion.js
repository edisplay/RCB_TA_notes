function recursiveInsertionSort( array, index ){

  if( array.length === index ){
    return array;
  }

  var cur = swapValues( array, index );


  return recursiveInsertionSort( cur, index+1 );
}

function swapValues( array, index ){

  if( array[index-1] <= array[index] || index === 0 ){

    return array;
  }

  var cur = swap( array, index-1, index );
  return swapValues( cur, index - 1 );
}
