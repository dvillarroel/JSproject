/**
 * Created by jalatraining on 5/30/2015.
 */
console.log('message from main file');

var enterdate = window.prompt("Ingrese una fecha en el siguiente fomrato YY-MM-DD ex. 2015-05-05");
var regexprYear = RegExp(^[0-9]{4}$);
var regexprMonth = RegExp(^[0-9]{2}$);
var regexprday = RegExp(^[0-9]{2}$);
var param = enterdate.split("-");
if(regexprYear.test(param[0]) == true && regexprMonth.test(param[1]) && regexprday.test(param[2]))
    Console.log("the date is valid");
else
    Console.log("the date is not valid");



























//regular expressions
//****************
var testexp = function() {
    expresion = RegExp(/^ [0-9]{5}$/);
    var ingre = windows.prompt("Enter a number");
    if (expresion.test(ingre))
        Window.alert("Passed")
    };
//**********

// dates
//***************
var date1 = new Date();
console.log();

var printdate = function() {
    var dias = ["Sunday", "Monday", "Tuesday", "Wensday", "thursday", "Saturday"];
    console.log(dias[date1.getDay() - 1]);
    var horario = "AM";
    if (date1.getHours() > 12)
        horario = "PM";
    console.log(date1.getHours() + " " + horario + " : " + date1.getMinutes() + " : " + date1.getSeconds());
};
//*********************


var countWords = function()
{
    var parrafo = window.prompt('Please enter a Paragraph');
    var resultword = parrafo.split(' ');
    return resultword.size();

};

var calulateArg = function()
{
   console.log('Sum', sumParm(arguments,0));
   console.log('Average', averageParm(arguments));
   console.log('Max', maxParm(arguments));

};

var sumParm = function(arguments,posicion)
{
    if (posicion == arguments.length - 1)
        return arguments[posicion];
    return arguments[posicion] + sumParm(arguments,posicion + 1);
};

var averageParm = function(arguments)
{
    return sumParm(arguments,0)/arguments.length;
};
maxArgument;
var maxParm = function(arguments,posicion)
{
    if (posicion== arguments.length - 1)
        return arguments[posicion];

    return arguments[posicion] + sumParm(arguments,posicion + 1);
};

//var age = '';
var calulateAge = function(yearboard)
{
    age = 2015 - yearboard;
    return age;

};


var name='new name';
var sayhello = function(name){

    console.log("dfrom fruntion " + name);

};

var persona = {name: "test", apellido:["sdd","das"], other:sayhello};