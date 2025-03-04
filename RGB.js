    function rgbGenerator(){
    
    this.name = "rgbGenerator";
    this.icon = "assets/colors.jpg";
        
    var self = this;
        
    var color;
    var selectedColor;
    var canvasPainter;

    this.populateOptions = function() {
        
    select(".options").html("<input type='color' id='colorBox'><button id='paintCanvas'>Paint Canvas</button><h3 id='selectColor'>Select Color and click Button</h3>");
    
    color = document.querySelector('#colorBox');
    selectedColor = document.querySelector('#selectColor');
    canvasPainter = document.querySelector('#paintCanvas');
    
    canvas = document.querySelector('#container');
        
    console.log(color.value);
        
    canvasPainter.addEventListener('click', function(){
        canvas.background = color.value;
    });
    
        
    }

    this.draw =function(){
        
                        }
    this.unselectTool = function() {
		select(".options").html("");
	};
}
