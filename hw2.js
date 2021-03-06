// FOR EACH //
// Executes callbackFn for each array element//
Array.prototype.myEach = function(callbackFn) {
    for(let i = 0; i<this.length; i++){
        if(this[i]===undefined) continue;
        callbackFn(this[i], i, this);
    }
};

// MAP //
// Creates new array and maps values resulting from applying callbackFn to elements in given array //
Array.prototype.myMap = function(callbackFn) {
    let arr=[];
    for(let i = 0; i<this.length; i++){
        if(this[i]===undefined) continue;
        arr.myPush(callbackFn(this[i], i, this));
    }    
    return arr;
};

// FILTER //
// Creates new array fills it with elements from given array that pass condition //
Array.prototype.myFilter = function(callbackFn) {
    let arr=[];
    for(let i = 0; i<this.length; i++){
        if(callbackFn(this[i], i, this)){
            arr.myPush(this[i]);
        }
    }  
    return arr;      
};

// SOME //
// Checks if at least 1 value in function meets given condition //
Array.prototype.mySome = function(callbackFn) {
    for(let i = 0; i<this.length; i++){
        if(callbackFn(this[i], i, this)){
            return true;
        }
    }   
    return false;
};

// EVERY //
// Checks if at every value in function meets given condition //
Array.prototype.myEvery = function(callbackFn) {
    for(let i = 0; i<this.length; i++){
        if(!callbackFn(this[i], i, this)){
            return false;
        }
    }   
    return true;
};

// REDUCE //
// Reduces array to single value by applying callbackFn to array elements //
Array.prototype.myReduce = function(callbackFn) {
    let previous = this[0];
    let current = 0;
    for(let i = 1; i<this.length; i++){
        if(this[i]===undefined) continue;
        current = callbackFn(previous, this[i], i, this, this[0]);
        previous = current;
    }   
    return current;
};

// INCLUDES //
// Checks if array includes given element //
Array.prototype.myIncludes = function(element, fromIndex) {
    if(fromIndex===undefined){
    	fromIndex=0;
    }
    for(let i = fromIndex; i<this.length; i++){
        if(this[i]===element){
            return true;
        }
    }   
    return false;
};

// INDEXOF //
// Finds index of given element in array //
Array.prototype.myIndexOf = function(element, fromIndex) {
    if(fromIndex===undefined){
    	fromIndex=0;
    }
    for(let i = fromIndex; i<this.length; i++){
        if(this[i]===element){
            return i;
        }
    }   
    return -1;
};

// PUSH //
// Adds elements to end of array //
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
// Finds last index of given element in array //
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
// Returns keys from object //
Object.grabKeys = function(obj) {
    let arr = [];
    for(let key in obj){
        arr.myPush(key);
    }
    return arr;
};

// VALUES //
// Returns values from object //
Object.grabValues = function(obj) {
    let arr = [];
    for(let key in obj ){
        arr.myPush(obj[key]);
    }
    return arr;
};
