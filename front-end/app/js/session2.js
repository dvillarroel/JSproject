

var maxNumber = function(arguments, posicion){
    if (posicion== arguments.length - 1)
        return arguments[posicion];
    return arguments[posicion] + maxNumber(arguments,posicion + 1);
};


var totalNumber = function(arguments,posicion)
{
    if (posicion == arguments.length - 1)
        return arguments[posicion];
    return arguments[posicion] + totalNumber(arguments,posicion + 1);
};

var averageNumber = function(arguments)
{
    return totalNumber(arguments,0)/arguments.length;
};

var maxParm = function(arguments,posicion)
{

};


var showResults = function (data) {
    console.log("the max number is: " + maxNumber(data,0));
    console.log("the min number is: " + minNumber(data));
    console.log("the average number is: " + averageNumber(data));
    console.log("the total sum is: " + totalNumber(data));
};
