var y = 10;
var x = 10;

var gg = connectedGraph( y, x );
var g = formatGraph( gg );
var links = g;

var nodes = {};

// Compute the distinct nodes from the links.
links.forEach(function(link) {
    link.source = nodes[link.source] || 
        (nodes[link.source] = {name: link.source});
    link.target = nodes[link.target] || 
        (nodes[link.target] = {name: link.target});
});

var width = 3000,
    height = 2200;

var force = d3.layout.force()
    .nodes(d3.values(nodes))
    .links(links)
    .size([width, height])
    .linkDistance(8)
    .charge(-800)
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
      return "path-" + d.source.name + "-" + d.target.name;
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

function formatGraph( graph ){

  var ret = [];

  for( var i = 0; i<graph.length; i++ ){
    if( graph[i].length > 0 ){

      for(var j=0; j<graph[i].length; j++ ){

        ret.push( {
          source : i,
          target : graph[i][j]
        })

      }

    }

  }

  return ret;
}

function displayD3Path( path ){

  for( var i=0; i<path.length; i++ ){

    setTimeout(function(i) {
      return function() {

        var id = "#path-" + path[i-1] + "-" + path[i];
        console.log( id )
        console.log( d3.select(id) )
        d3.select(id)
          .style("stroke", "#ae70ff");

      };
    }(i), 500*i);

  }
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

var n = 900;

force.start();
for (var i = n * n; i > 0; --i) force.tick();
force.stop();

var start = 0;
var finish = Math.floor(Math.random()*(x*y));

var bfspath = solve( gg, start, finish );

window.onload = function(){

  setTimeout( function(){
    displayD3Path( bfspath );
  }, 400 );

}
