function counter(){
    
    this.name = "counter";
    this.icon = "assets/count.png";
        
    var self = this;
    var conteo = 0;
    var counterDisplay;
    var plusBtn;
    var minusBtm;

    this.populateOptions = function() {
        
    select("#content").html("<h3 id='counter'>0</h3><button id='plusBtn'>+</button><button id='minusBtn'>-</button>");
    
     counterDisplay = document.querySelector('#counter');
     plusBtn = document.querySelector('#plusBtn');
     minusBtn = document.querySelector('#minusBtn');
        
    }
    
    this.updateCounter = function(value){
        conteo = conteo + value;
        counterDisplay.textContent = conteo;
        
         plusBtn.addEventListener('click',function(){
        self.updateCounter(1);
    });
    minusBtn.addEventListener('click',function(){
        self.updateCounter(-1);
    });   
     
    this.draw =function(){
        
                        }
    this.unselectTool = function() {
		select("#content").html("");
	};
}
