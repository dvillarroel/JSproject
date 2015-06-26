

var result = 0;
var maxNumber = function(){
    var position = 1;
    if (!arguments[position + 1])
        return result;
       // if(arguments[position] < arguments[position + 1])

};


var showResults = function (data) {
    console.log("the max number is: " + maxNumber(data));
    console.log("the min number is: " + minNumber(data));
    console.log("the average number is: " + averageNumber(data));
    console.log("the total sum is: " + totalNumber(data));
};
