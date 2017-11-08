var m;
function updateCount(z) {
	if(z == 0){
		d3.select(".removabletotalclicks").remove();
		d3.select(".totalclicks").append("div").attr("class", "removabletotalclicks").append("text").text("Move: " + z + "/" + m);
	}
	if(z == m){
		var maxtouch = d3.selectAll(".square").filter(function(d) {return d.click == 1 || d.click == 2});
		var t = maxtouch.size();
		console.log(t);
		if(t == 0){
			d3.select(".removabletotalclicks").remove();
			d3.select(".totalclicks").append("div").attr("class", "removabletotalclicks").append("text").text("Success!");
			
		}
		else{
		d3.select(".removabletotalclicks").remove();
		d3.select(".totalclicks").append("div").attr("class", "removabletotalclicks").append("text").text("Move:  " + z + "/" + m);
		}
	}
	if(z <= m-1){
		d3.select(".removabletotalclicks").remove();
		d3.select(".totalclicks").append("div").attr("class", "removabletotalclicks").append("text").text("Move:  " + z + "/" + m);
		}
	d3.select(".removeabletotalclicks").remove();

}
function gridData() {
	var data = new Array();
	var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
	var ypos = 1;
	var width = 50;
	var height = 50;
	var click = 0;
	var color = "0";

	
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
				click: click,
				color: color
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
updateCount("0");

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
	.attr("click", function(d) { return d.click})
	.attr("x", function(d) { return d.x; })
	.attr("y", function(d) { return d.y; })
	.attr("color", "0")
	.attr("width", function(d) { return d.width; })
	.attr("height", function(d) { return d.height; })
    .style("stroke", "#FFFFFF")
    .style("fill", "#37344A")
	.on('click', function(d) {
		var total = d3.selectAll(".square").attr("color", function(d) {return d.color++});
		var z = d.color;
		console.log(z);
		var x = d.x;
		var y = d.y;

		if ((d.click) == 0 ) {
			d3.select(this).style("fill","#DFC2F2");
			
			d3.selectAll(".square").filter(function(d) { return ( d.x == x + 50 && d.y == y + 50 && d.click == 0) ||( d.x == x + 50 && d.y == y -50 && d.click == 0) ||( d.x == x + 50 && d.y == y && d.click == 0) ||( d.x == x - 50 && d.y == y + 50 && d.click == 0) ||( d.x == x - 50 && d.y == y - 50 && d.click == 0) ||( d.x == x - 50 && d.y == y && d.click == 0) ||( d.x == x && d.y == y +50 && d.click == 0) ||( d.x == x && d.y == y -50 && d.click == 0)}).style("fill", "#DFC2F2");

			d3.selectAll(".square").filter(function(d) { return( d.x == x + 50 && d.y == y + 50 && d.click == 1) ||( d.x == x + 50 && d.y == y -50 && d.click == 1) ||( d.x == x + 50 && d.y == y && d.click == 1) ||( d.x == x - 50 && d.y == y + 50 && d.click == 1) ||( d.x == x - 50 && d.y == y - 50 && d.click == 1) ||( d.x == x - 50 && d.y == y && d.click == 1) ||( d.x == x && d.y == y +50 && d.click == 1) ||( d.x == x && d.y == y -50 && d.click == 1)}).style("fill", "#CDFFF9");

			d3.selectAll(".square").filter(function(d) { return( d.x == x + 50 && d.y == y + 50 && d.click == 2) ||( d.x == x + 50 && d.y == y -50 && d.click == 2) ||( d.x == x + 50 && d.y == y && d.click == 2) ||( d.x == x - 50 && d.y == y + 50 && d.click == 2) ||( d.x == x - 50 && d.y == y - 50 && d.click == 2) ||( d.x == x - 50 && d.y == y && d.click == 2) ||( d.x == x && d.y == y +50 && d.click == 2) ||( d.x == x && d.y == y -50 && d.click == 2)}).style("fill", "#37344A");

			}

		if ((d.click) == 1) {
			d3.select(this).style("fill","#CDFFF9");

			d3.selectAll(".square").filter(function(d) { return ( d.x == x + 50 && d.y == y + 50 && d.click == 0) ||( d.x == x + 50 && d.y == y -50 && d.click == 0) ||( d.x == x + 50 && d.y == y && d.click == 0) ||( d.x == x - 50 && d.y == y + 50 && d.click == 0) ||( d.x == x - 50 && d.y == y - 50 && d.click == 0) ||( d.x == x - 50 && d.y == y && d.click == 0) ||( d.x == x && d.y == y +50 && d.click == 0) ||( d.x == x && d.y == y -50 && d.click == 0)}).style("fill", "#DFC2F2");
			
			d3.selectAll(".square").filter(function(d) { return( d.x == x + 50 && d.y == y + 50 && d.click == 1) ||( d.x == x + 50 && d.y == y -50 && d.click == 1) ||( d.x == x + 50 && d.y == y && d.click == 1) ||( d.x == x - 50 && d.y == y + 50 && d.click == 1) ||( d.x == x - 50 && d.y == y - 50 && d.click == 1) ||( d.x == x - 50 && d.y == y && d.click == 1) ||( d.x == x && d.y == y +50 && d.click == 1) ||( d.x == x && d.y == y -50 && d.click == 1)}).style("fill", "#CDFFF9");
			
			d3.selectAll(".square").filter(function(d) { return( d.x == x + 50 && d.y == y + 50 && d.click == 2) ||( d.x == x + 50 && d.y == y -50 && d.click == 2) ||( d.x == x + 50 && d.y == y && d.click == 2) ||( d.x == x - 50 && d.y == y + 50 && d.click == 2) ||( d.x == x - 50 && d.y == y - 50 && d.click == 2) ||( d.x == x - 50 && d.y == y && d.click == 2) ||( d.x == x && d.y == y +50 && d.click == 2) ||( d.x == x && d.y == y -50 && d.click == 2)}).style("fill", "#37344A");

			}
		if ((d.click) == 2) {
			d3.select(this).style("fill","#37344A");
			
			d3.selectAll(".square").filter(function(d) { return ( d.x == x + 50 && d.y == y + 50 && d.click == 0) ||( d.x == x + 50 && d.y == y -50 && d.click == 0) ||( d.x == x + 50 && d.y == y && d.click == 0) ||( d.x == x - 50 && d.y == y + 50 && d.click == 0) ||( d.x == x - 50 && d.y == y - 50 && d.click == 0) ||( d.x == x - 50 && d.y == y && d.click == 0) ||( d.x == x && d.y == y +50 && d.click == 0) ||( d.x == x && d.y == y -50 && d.click == 0)}).style("fill", "#DFC2F2");
			
			d3.selectAll(".square").filter(function(d) { return( d.x == x + 50 && d.y == y + 50 && d.click == 1) ||( d.x == x + 50 && d.y == y -50 && d.click == 1) ||( d.x == x + 50 && d.y == y && d.click == 1) ||( d.x == x - 50 && d.y == y + 50 && d.click == 1) ||( d.x == x - 50 && d.y == y - 50 && d.click == 1) ||( d.x == x - 50 && d.y == y && d.click == 1) ||( d.x == x && d.y == y +50 && d.click == 1) ||( d.x == x && d.y == y -50 && d.click == 1)}).style("fill", "#CDFFF9");
			
			d3.selectAll(".square").filter(function(d) { return( d.x == x + 50 && d.y == y + 50 && d.click == 2) ||( d.x == x + 50 && d.y == y -50 && d.click == 2) ||( d.x == x + 50 && d.y == y && d.click == 2) ||( d.x == x - 50 && d.y == y + 50 && d.click == 2) ||( d.x == x - 50 && d.y == y - 50 && d.click == 2) ||( d.x == x - 50 && d.y == y && d.click == 2) ||( d.x == x && d.y == y +50 && d.click == 2) ||( d.x == x && d.y == y -50 && d.click == 2)}).style("fill", "#37344A");

			}

		d3.select(this).attr("click", function(d) { if(d.click == 0){return d.click++;}if(d.click == 1){return d.click++;}if(d.click == 2){return d.click = d.click - 2;}});
		
		d3.selectAll(".square").filter(function(d) { return(d.x == x + 50 && d.y == y + 50) ||( d.x == x + 50 && d.y == y -50) ||( d.x == x + 50 && d.y == y) ||( d.x == x - 50 && d.y == y + 50) ||( d.x == x - 50 && d.y == y - 50) ||( d.x == x - 50 && d.y == y) ||( d.x == x && d.y == y +50) ||( d.x == x && d.y == y -50)}).attr("click", function(d) { if(d.click == 0){return d.click++;}if(d.click == 1){return d.click++;}if(d.click == 2){return d.click = d.click -2;}});
		updateCount(z);
		//functionality good! just need more cases!
	});
/*var column_selected = d3.select(column).filter(function(d) { return })
var fakeClick = function(target) {
	var event = document.createEvent('MouseEvents');
	event.initMouseEvent('click');
	target.dispatchEvent(event);
};
fakeClick(column);*/
function setupBoard() {
	var numClicks = Math.floor(Math.random() * 4) + 2;//get a random number between 2 and 10;
	m = numClicks * 2;
	console.log("my random number is " + numClicks);
	myChosenXCells = chooseCells(numClicks);
	console.log(myChosenXCells);
	var myChosenYCells = chooseCells(numClicks);
	console.log(myChosenYCells);
	clickChosenCells(myChosenXCells, myChosenYCells, numClicks);
}
function chooseCells(x){
	var xarray = new Array();
	for(i = 0; i < x; i++){
		xarray[i] = Math.floor(Math.random() * 10);
	}
	return xarray;
}
function clickChosenCells(x, y, numClicks){
	for (i = 0; i < numClicks; i++){
		//console.log(d3.selectAll(".square").filter(function(d) {return (d.x == x[i]*50 + 1 && d.y == y[i]*50 + 1)}).style("fill", "#DFC2F2"));
		//console.log(d3.selectAll(".square").filter(function(d) { return (d.x == x[i]*50 + 51 && d.y == y[i]*50 + 51 && d.click == 0) || (d.x == x[i]*50 + 1 && d.y == y[i]*50 + 1 && d.click == 0) || ( d.x == x[i]*50 + 51 && d.y == y[i]*50 -49 && d.click == 0) ||( d.x == x[i]*50 + 51 && d.y == y[i]*50 + 1 && d.click == 0) ||( d.x == x[i]*50 - 49 && d.y == y[i]*50 + 51 && d.click == 0) ||( d.x == x[i]*50 - 49 && d.y == y[i]*50 - 49 && d.click == 0) ||( d.x == x[i]*50 - 49 && d.y == y[i]*50 + 1 && d.click == 0) ||( d.x == x[i]*50 + 1 && d.y == y[i]*50 + 51 && d.click == 0) ||( d.x == x[i]*50 + 1 && d.y == y[i]*50 -49 && d.click == 0)}).style("fill", "#DFC2F2"));
		console.log(d3.selectAll(".square").filter(function(d) { return (d.x == x[i]*50 + 51 && d.y == y[i]*50 + 51) || (d.x == x[i]*50 + 1 && d.y == y[i]*50 + 1) || ( d.x == x[i]*50 + 51 && d.y == y[i]*50 -49) ||( d.x == x[i]*50 + 51 && d.y == y[i]*50 + 1) ||( d.x == x[i]*50 - 49 && d.y == y[i]*50 + 51) ||( d.x == x[i]*50 - 49 && d.y == y[i]*50 - 49) ||( d.x == x[i]*50 - 49 && d.y == y[i]*50 + 1) ||( d.x == x[i]*50 + 1 && d.y == y[i]*50 + 51) ||( d.x == x[i]*50 + 1 && d.y == y[i]*50 -49)}).style("fill", function(d) {if(d.click == 0){return"#DFC2F2"}if(d.click == 1){return "#CDFFF9"}if(d.click ==2){return "#37344A"}}).attr("click", function(d) { if(d.click == 2){return d.click = d.click -2}else{return d.click++}}));
	}
}
setupBoard();
updateCount("0");
//console.log(d3.selectAll(".square").filter(function(d) { return (d.x == x[i]*50 + 51 && d.y == y[i]*50 + 51 && d.click == 0) || (d.x == x[i]*50 + 1 && d.y == y[i]*50 + 1 && d.click == 0) || ( d.x == x[i]*50 + 51 && d.y == y[i]*50 -49 && d.click == 0) ||( d.x == x[i]*50 + 51 && d.y == y[i]*50 + 1 && d.click == 0) ||( d.x == x[i]*50 - 49 && d.y == y[i]*50 + 51 && d.click == 0) ||( d.x == x[i]*50 - 49 && d.y == y[i]*50 - 49 && d.click == 0) ||( d.x == x[i]*50 - 49 && d.y == y[i]*50 + 1 && d.click == 0) ||( d.x == x[i]*50 + 1 && d.y == y[i]*50 + 51 && d.click == 0) ||( d.x == x[i]*50 + 1 && d.y == y[i]*50 -49 && d.click == 0)}).style("fill", function(d) {if(d.click == 0){return"#DFC2F2"}if(d.click == 1){return "#CDFFF9"}if(d.click ==2){return "#37344A"}}).attr("click", function(d) { return d.click++}));
//console.log(d3.selectAll(".square").filter(function(d) { return (d.x >= 251 && d.x <= 351 && d.y > 201 && d.y < 401 )}).style("fill", function(d) {if(d.click == 0){return"#DFC2F2"}if(d.click == 1){return "#CDFFF9"}if(d.click ==2){return "#37344A"}}).attr("click", function(d) { return d.click++}));
//console.log(d3.selectAll(".square").filter(function(d) { return (d.x >= 151 && d.x <= 251 && d.y > 51 && d.y < 251 )}).style("fill", function(d) {if(d.click == 0){return"#DFC2F2"}if(d.click == 1){return "#CDFFF9"}if(d.click ==2){return "#37344A"}}).attr("click", function(d) { return d.click++}));