/**
 * Created by jalatraining on 5/30/2015.
 */
console.log('message from main file');
/*
var enterdate = window.prompt("Ingrese una fecha en el siguiente fomrato YY-MM-DD ex. 2015-05-05");
var regexprYear = RegExp(^[0-9]{4}$);
var regexprMonth = RegExp(^[0-9]{2}$);
var regexprday = RegExp(^[0-9]{2}$);
var param = enterdate.split("-");
if(regexprYear.test(param[0]) == true && regexprMonth.test(param[1]) && regexprday.test(param[2]))
    Console.log("the date is valid");
else
    Console.log("the date is not valid");
*/


//*************
var capicua = function(inicial)
{
    var cad = inicial.toString();
    var longitud = cad.length;
    var cadInvertida = "";


    while ( longitud >= 0) {
        cadInvertida = cadInvertida + cad.charAt(longitud);

        longitud--;

    }
    if (cad == cadInvertida)
        return true
    else
        return false


};

var capicua2 = function (inicial2)
{
    var cad2 = inicial2.toString();
    var cad3 = cad2.split('');
    var cadInv = cad3.reverse();
    var cadInv2 = cadInv.join('');
    if (cad2 == cadInv2)
        return true
    else
        return false

};



//************

var rango = function (ini,fin)
{
    for (i=ini; i<=fin; i++)
    {
        if(capicua(i) == true)
            console.log("the number: " + i + " es Capicua");


    }

};
var rango2 = function (ini2,fin2)
{
    for (i=ini2; i<=fin2; i++)
    {
        if(capicua2(i) == true)
            console.log("the number: " + i + " es Capicua");


    }

};

var getOddNumbers = function (n){

    var j = 1;
    var answer = " ";
    var numb = [];
    for (i=1; i<=n; i++)
    {
        if( j % 2 == 0)
            continue;
        numb.push(j);
    }
    return answer;

};

var getFactorial = function(num)
{
    if (num == 0)
        return 1;
    var aux = 1;
    for(i = 1; i <= num; i++ )
    {
       aux = aux * i;
    }
    return aux;

};

var truncateString = function(paragraph, index)
{
    var varpar = paragraph.split('');
    var answer = [];
    var answer2 = "";
    for (i=0; i <= index -1 ; i++)
    {
        answer.push(varpar[i]);
        answer2=answer.join("");
    }
    return answer2;
};

var truncateString2 = function(paragraph, index)
{

    var answer = [];
    var answer2 ="";
    for (i=0; i <= index -1 ; i++)
    {
        answer.push(paragraph.charAt(i));
        answer2=answer.join("");
    }
    return answer2;
};

(function(){
    console.log("Hello word");

})();




var doOper = function ()
{
    console.log('new message')
    return function(){
        console.log('hi');
    };

};

var val = doOper();

(function(){
        console.log('call back');
})();

(function(name){ console.log("hola " + name);})("leo");

var Person = function(name,age)
{
    this.name = name;
    this.age = age;

    this.eat = function()
    {
        console.log(name + "is eating");
    };

};

var pepe = new Person('pepe', 3);


var calculator  = new calculator();

calculator.calutaleAll(1,2,3,4);
calculator.calutaleAll(1,2);
calculator.calutaleAll();

calculator.add(2,1); /// result 3 and memory 3
calculator.add(2); // result 5












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