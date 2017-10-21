function gridData() {
	var data = new Array();
	var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
	var ypos = 1;
	var width = 50;
	var height = 50;
    var click = 0;

	
	// iterate for rows	
	for (var row = 0; row < 10; row++) {
		data.push( new Array() );
		
		// iterate for cells/columns inside rows
		for (var column = 0; column < 10; column++) {
			data[row].push({
				x: xpos,
				y: ypos,
				width: width,
				height: height,
				click: click
			})
			// increment the x position. I.e. move it over by 50 (width variable)
			xpos += width;
		}
		// reset the x position after a row is complete
		xpos = 1;
		// increment the y position for the next row. Move it down 50 (height variable)
		ypos += height;	
	}
	return data;
}

var gridData = gridData();	
// I like to log the data to the console for quick debugging
console.log(gridData);

var grid = d3.select("#grid")
	.append("svg")
	.attr("width","510px")
	.attr("height","510px");
	
var row = grid.selectAll(".row")
	.data(gridData)
	.enter().append("g")
	.attr("class", "row");
	
var column = row.selectAll(".square")
	.data(function(d) { return d; })
	.enter().append("rect")
    .attr("class","square")
    .attr("id", "cell")
	.attr("x", function(d) { return d.x; })
    .attr("y", function(d) { return d.y; })
	.attr("width", function(d) { return d.width; })
	.attr("height", function(d) { return d.height; })
    .style("stroke", "#CAC4CE")
    .style("fill", "#37344A")
	.on('click', function(d) {
       d.click ++;
       if ((d.click)%2 == 0 ) { 
           d3.select(this).style("fill","#37344A");
           var x = d.x;
           var y = d.y;
           var myselection = d3.selectAll(".square").filter(function(d) { return d.x == 51 && d.y == 51});
           myselection.style("fill", "#37344A"); 
         }
       if ((d.click)%2 == 1 ) { 
           //d3.select(this).style("fill","#5E4A9E");
           mycell = d3.select(this);
           console.log(d.x);
           var x = d.x;
           var y = d.y;
           console.log(d.y);
           //console.log(d3.selectAll(".square").filter(function(d) {return d.x < 200}));
           var myselection = d3.selectAll(".square").filter(function(d) { return d.x == 51 && d.y == 51});
           myselection.style("fill", "blue"); 
           //d3.select(column).filter(function(d){ return d.x == this.x + 50}).style("fill", "#5E4A9E");
    }
    });