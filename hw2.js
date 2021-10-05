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

// SOME //
Array.prototype.mySome = function(callbackFn) {
    for(let i = 0; i<this.length; i++){
        if(callbackFn(this[i], i, this)){
            return true;
        }
    }   
    return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
    for(let i = 0; i<this.length; i++){
        if(!callbackFn(this[i], i, this)){
            return false;
        }
    }   
    return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
    for(let i = 1; i<this.length; i++){
        if(this[i]===undefined) continue;
        this[i] = callbackFn(this[i-1], this[i], i, this);
    }   
    return this[this.length-1];
};

// INCLUDES //
Array.prototype.myIncludes = function(element, fromIndex) {
		if(fromIndex===undefined){
    		fromIndex=0;
    }
    for(let i = fromIndex; i<this.length; i++){
        if(this[i]===undefined) continue;
        if(this[i]===element){
            return true;
        }
    }   
    return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(element, fromIndex) {
		if(fromIndex===undefined){
    		fromIndex=0;
    }
    for(let i = fromIndex; i<this.length; i++){
        if(this[i]===undefined) continue;
        if(this[i]===element){
            return i;
        }
    }   
    return -1;
};

// PUSH //
Array.prototype.myPush = function(...args) {
    let arg_i = 0;
    let length = this.length;
    for(let i=length; i < length+args.length; i++){
        this[i]=args[arg_i];
        arg_i++;
    }
    return this.length;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(element, fromIndex) {
    if(fromIndex===undefined){
        fromIndex=0;
}
for(let i = this.length-1; i>=fromIndex; i--){
    if(this[i]===element){
        return i;
    }
}   
return -1;
};

// KEYS //
Object.grabKeys = function(obj) {
    let arr = [];
    for(let key in obj){
        arr.push(key);
    }
    return arr;
};

// VALUES //
Object.grabValues = function(obj) {
    let arr = [];
    for(let key in obj ){
        arr.push(obj[key]);
    }
    return arr;
};
