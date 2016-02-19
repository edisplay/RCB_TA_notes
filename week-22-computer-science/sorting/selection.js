function selectionSort( data ){


  for( var j=0; j<data.length; j++ ){

    var min = j;

    for( var i=j+1; i<data.length; i++ ){
      if( data[i] < data[min] ){
        min = i;

      }


    }

    if( min != j ){

      data = swap( data, j, min );
    }
  }

  return data;
}
