// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for(let i = 0; i<this.length; i++){
        if(this[i]===undefined) continue;
        callbackFn(this[i], i, this);
    }
};

// MAP //
Array.prototype.myMap = function(callbackFn) {
    let arr=[];
    for(let i = 0; i<this.length; i++){
        if(this[i]===undefined) continue;
        arr.push(callbackFn(this[i], i, this));
    }    
    return arr;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    let arr=[];
    for(let i = 0; i<this.length; i++){
        if(callbackFn(this[i], i, this)){
            arr.push(this[i]);
        }
    }  
    return arr;      
};
