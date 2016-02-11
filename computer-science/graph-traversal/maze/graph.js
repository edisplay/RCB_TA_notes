function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIdx( size, except ){

  var id = null;

  while( id == null ){
    id = getRandomInt( 0, size-1 );

    if( id == except ){
      id = null;
    }

  }

  return id;
};

function getRandomCell( cells, size, current_id ){
  var id = getRandomIdx( size, current_id );

  var cell = cells[ id ];
  var count = 1;

  while( count < ( size -1 ) ){

    id = getRandomIdx( size, current_id );

    cell = cells[ id ];
    count++;
  }

  return cell;
}

// generate graph
function graph( size ){

  var cells = [];

  //generate nested arrasy
  for( var j = 0; j< size; j++ ){
    cells.push({
      id : j,
      visited : 0,
      neighbors : []
    });
  }

  //setup default values
  var path = [];

  var currentCell = cells[0];
  var total_visited = 1;

  //start the path here
  path.push( currentCell );

  //while we have nodes left to visit
  while( size > total_visited ){

    // get a random cell that hasnt been visited
    var nextCell = getRandomCell( cells, size, currentCell.id  );

    //if there's a cell that isnt the current cell's neighbor thats random, and the current cell is determined to be able to add a nother neighbor
    if( nextCell != null ){

      //for that randomly selected neighbor, set some things

      if( currentCell.visited == 0 ){
        currentCell.visited = 1;
        total_visited++;
      }

      //if we havent visited this cell, push the thing we found as a neighbor


      //if(nextCell.visited == 0 && isNewNeighbor( currentCell.neighbors, nextCell.id ) && neighborCount( currentCell.neighbors.length ) ){

        currentCell.neighbors.push( {id: nextCell.id });
      //}

      currentCell = nextCell;
      path.push( currentCell );

    }else{

      //if we couldn't find a valid neighbor, go back one square
      currentCell = path.pop();
    }

  }

  console.log( cells );

  return cells;
}

//we dont want a graph with more than 5 neighbors?
//
//TODO: add in some probabilities for neighbors less than 5?
function neighborCount( count ){

  if( count > 5 ){
    return false;
  }

  return true;
}

function isNewNeighbor( neighbors, id ){

  for( var i=0; i<neighbors.length; i++ ){

    if( neighbors[i].id == id ){
      return false;
    }
  }

  return true;
}

var g = formatGraph( maz( 4,4) );

function formatGraph( graph ){

  var ret = [];

  for( var i = 0; i<graph.length; i++ ){
    if( graph[i].neighbors.length > 0 ){

      for(var j=0; j<graph[i].neighbors.length; j++ ){

        ret.push( {
          source : graph[i].location,
          target : graph[i].neighbors[j]
        })

      }

    }

  }

  return ret;
}


var links = g;

var nodes = {};

// Compute the distinct nodes from the links.
links.forEach(function(link) {
    link.source = nodes[link.source] || 
        (nodes[link.source] = {name: link.source});
    link.target = nodes[link.target] || 
        (nodes[link.target] = {name: link.target});
});

var width = 2000,
    height = 1200;

var force = d3.layout.force()
    .nodes(d3.values(nodes))
    .links(links)
    .size([width, height])
    .linkDistance(400)
    .charge(-2800)
    .on("tick", tick);

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

// build the arrow.
svg.append("svg:defs").selectAll("marker")
    .data(["end"])      // Different link/path types can be defined here
  .enter().append("svg:marker")    // This section adds in the arrows
    .attr("id", String)
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 15)
    .attr("refY", -1.5)
    .attr("markerWidth", 6)
    .attr("markerHeight", 6)
    .attr("orient", "auto")
  .append("svg:path")
    .attr("d", "M0,-5L10,0L0,5");

// add the links and the arrows
var path = svg.append("svg:g").selectAll("path")
    .data(force.links())
  .enter().append("svg:path")
    .attr("class", "link")
    .attr("id", function(d) { 
      return d.source.name + "-" + d.target.name;
    })
    .attr("marker-end", "url(#end)");

// define the nodes
var node = svg.selectAll(".node")
    .data(force.nodes())
  .enter().append("g")
    .attr("class", "node")
    .call(force.drag);

// add the nodes
node.append("circle")
    .attr("r", 5);

// add the text 
node.append("text")
    .attr("x", 12)
    .attr("dy", ".35em")
    .text(function(d) { return d.name; });

function tick() {
    path.attr("d", function(d) {
        var dx = d.target.x - d.source.x,
            dy = d.target.y - d.source.y,
            dr = Math.sqrt(dx * dx + dy * dy);
        return "M" + 
            d.source.x + "," + 
            d.source.y + "L" +
            d.target.x + "," + 
            d.target.y;
    });

    node.attr("transform", function(d) { 
      return "translate(" + d.x + "," + d.y + ")"; 
    });
}

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//
//
//
// RUN ALL YOUR ISH BELOW
//
//
//
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

var n = 300;

force.start();
for (var i = n * n; i > 0; --i) force.tick();
force.stop();
