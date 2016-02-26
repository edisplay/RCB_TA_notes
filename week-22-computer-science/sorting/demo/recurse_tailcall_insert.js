function tailRecurseInsertionSort( array, index ){

  function sortRecur( array, index ){

    if( array.length === index ){
      debugger;
      return array;
    }

    return (function( arr, idx ){

      var cur = swapValues( arr, idx );

      return sortRecur( cur, idx+1 );

    })(array, index);

  }

  return sortRecur( array, index );
}

function swapValues( array, index ){

  function swapRecur( array, index ){

    if( array[index-1] <= array[index] || index === 0 ){

      return array;
    }

    var cur = swap( array, index-1, index );
    return swapRecur( cur, index - 1 );

  }

  return swapRecur( array, index);
}
