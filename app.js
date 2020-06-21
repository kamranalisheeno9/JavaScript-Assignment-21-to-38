//       **** Chapter 21-25 ****   Task 1 ****


// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = (firstName +" "+lastName);
// alert("Welcome " + fullName);


//       **** Chapter 21-25 ****   Task 2 ****


// var mobile=prompt("Enter Your Favourite Mobile Phone Model");
// var string=mobile.length;
// alert("My Favourite Phone is: "+mobile+"\nLength of string: "+string);


//       **** Chapter 21-25 ****   Task 3 ****


// var word = "pakistani";
// var wordindex= word.indexOf("n")
// alert("String: "+word+"\n Index of 'n': "+wordindex);


//       **** Chapter 21-25 ****   Task 4 ****


// var word = "Hello World";
// var wordindex= word.lastIndexOf("l")
// alert("String: "+word+"\n Index of 'l': "+wordindex);


//       **** Chapter 21-25 ****   Task 5 ****

// var word = "pakistani";
// alert("String: "+word+"\n Character at Index of 3: "+word[3]);

//       **** Chapter 21-25 ****   Task 6 ****


// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Last Name");
// var fullName = firstName.concat(" "+lastName);
// alert("Welcome " + fullName);


//       **** Chapter 21-25 ****   Task 7 ****


// var city="Hyderabad";
// var newHalf="Islam";
// var replace=city.slice(5);
// var completeCity=newHalf+replace;
// alert("City: "+ city+"\nAfter replacement: "+completeCity)


//       **** Chapter 21-25 ****   Task 8 ****


// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage=message.replace("and","&");
// alert(message)
// alert(newMessage)

//       **** Chapter 21-25 ****   Task 9 ****

// var string="472";
// var num=parseInt(string);
// alert("Value: "+string+"\nType: String"+"\nValue: "+num+"\nType: number")

//       **** Chapter 21-25 ****   Task 10 ****


// var enter=prompt("Enter The Word");
// var upperEnter=enter.toUpperCase();
// alert("User Input: "+enter+"\nUpper case: "+upperEnter);


//       **** Chapter 21-25 ****   Task 11 ****

// var enter=prompt("Enter The Word");
// var firstLetter=enter.slice(0,1).toUpperCase();
// var otherLetters=enter.slice(1).toLowerCase();
// var newWord=firstLetter+otherLetters;
// alert("User Input: "+enter+"\nTitle case: "+newWord);


//       **** Chapter 21-25 ****   Task 12****


// var num= 35.36;
// var result= num.toString().replace(".","");
// alert("Number: "+num+"\nResult: "+result)


//       **** Chapter 21-25 ****   Task 13 ****


// var enterName = prompt("Enter Username ");
// for (i = 0; i < enterName.length; i++) {
//     switch (enterName[i]) {
//         case "!":
//             alert("Please Enter Valid Username")
//             break;
//         case ",":
//             alert("Please Enter Valid Username")
//             break;
//         case ".":
//             alert("Please Enter Valid Username")
//             break;
//         case "@":
//             alert("Please Enter Valid Username")
//             break;

//         }
//     }


//       **** Chapter 21-25 ****   Task 14 ****


// var A= ["cake", "apple pie", "cookie", "chips", "patties"];
// var search=prompt("Welcome to ABC Bakery What do want sir/ma'am").toLocaleLowerCase();


// if(A.indexOf(search) !== -1 ){
//     alert(search+" is available at index of "+ A.indexOf(search)+" in our bakery")
// }
// else{
//     alert("we are sorry. "+search+" is not available")

// }


//       **** Chapter 21-25 ****   Task 15 ****


//       **** Chapter 21-25 ****   Task 16 ****


// var university = "University of Karachi";
// var uni= university.split("");
// for(i=0;i<uni.length;i++)
// {
//     document.write(uni[i]+"<br>")
// }

//       **** Chapter 21-25 ****   Task 17 ****


// var word=prompt("Enter The Word");
// for(i=0;i<word.length;i++){
// var lastLetter=word.slice(word.length-1,word.length);
// }
// document.write("User Input: "+word+"<br>"+"Last Letter of Input: "+lastLetter)

//       **** Chapter 21-25 ****   Task 18 ****


//       **** Chapter 26-30 ****   Task 1 ****

// var enter=+prompt("Enter Positive integer")
// var round=Math.round(enter);
// var roundCeil=Math.ceil(enter);
// var roundfloor=Math.floor(enter);
// document.write("Number: "+enter+"<br> Round off Value: "+round+"<br> Floor Value: "+roundfloor+"<br> Ceil Value: "+roundCeil)


//       **** Chapter 26-30 ****   Task 2 ****

// var enter=+prompt("Enter Negative integer")
// var round=Math.round(enter);
// var roundCeil=Math.ceil(enter);
// var roundfloor=Math.floor(enter);
// document.write("Number: "+enter+"<br> Round off Value: "+round+"<br> Floor Value: "+roundfloor+"<br> Ceil Value: "+roundCeil)



//       **** Chapter 26-30 ****   Task 3 ****

// var num=prompt("Enter the number")
// for(i=0;i<num.length;i++){
//     if(num[i]=== "-"){
//         num1=num*(-1);
//         document.write("Absolute value of "+num+" is "+num1)
//     break;
//     }
//     else{
//         document.write("Absolute value of "+num+" is "+num)

//     }
// }


//       **** Chapter 26-30 ****   Task 4 ****


// var random=Math.random()*6;
// var randomceil=Math.ceil(random);
// document.write("Random dice value: "+randomceil)


//       **** Chapter 26-30 ****   Task 5 ****


// var random=Math.random()*2;
// var randomceil=Math.ceil(random);
// if (randomceil=== 2 ){
// document.write(randomceil+" <br> Random dice value: Heads ")
// }
// else{
// document.write(randomceil+" <br> Random dice value: Tails ")

// }

//       **** Chapter 26-30 ****   Task 6 ****

// var random=Math.random()*100;
// var randomceil=Math.ceil(random);
// document.write("Random number between 1 and 100: "+randomceil)


//       **** Chapter 26-30 ****   Task 7 ****



//       **** Chapter 26-30 ****   Task 8 ****


// var random=Math.random()*10;
// var secret=Math.ceil(random);
// var userInput=+prompt("Enter A number Between 1 to 10");
// if(userInput===secret){
//     alert(secret+ " Congratulations Right Answer")
// }
// else{
//     alert("Try Again" + " ,Correct Number is = "+secret)
// }


//       **** Chapter 31-34 ****   Task 1 ****


// var time=new Date();
// document.write(time)


//       **** Chapter 31-34 ****   Task 2 ****


// var time=new Date();
// var indexMonth=time.getMonth();
// var month=["January","February","March","April","May","June","July","August","September","October","November","December"]
// document.write("Current Month is: "+month[indexMonth])

//       **** Chapter 31-34 ****   Task 3 ****

// var time=new Date();
// var dayindex=time.getDay();
// var day=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// document.write("Today is: "+day[dayindex])



//       **** Chapter 31-34 ****   Task 4 ****

// var time=new Date();
// var dayindex=time.getDay();
// if(dayindex===0 || dayindex===6){
// document.write("It is Fun Day")
// }
// else{
// document.write("Boring Day")

// }


//       **** Chapter 31-34 ****   Task 5 ****


// var time=new Date();
// var dayindex=time.getDate();
// if(dayindex<15){
// document.write("First fifteen days of the month")
// }
// else{
// document.write("Last days of the month")

// }


//       **** Chapter 31-34 ****   Task 6 ****

//       **** Chapter 31-34 ****   Task 7 ****


// var time=new Date();
// var dayindex=time.getHours();
// if(dayindex<12 && dayindex >= 0){
// document.write("It's AM")
// }
// else{
// document.write("It's PM")

// }


//       **** Chapter 31-34 ****   Task 8 ****

//       **** Chapter 31-34 ****   Task 9 ****

// var start=new Date("June 18, 2015")
// var end=new Date();
// var startmili=start.getTime();
// var endmili=end.getTime();
// var days=(endmili - startmili)/(1000*60*60*24);
// var daysFixed=Math.round(days);
// document.write(daysFixed+" days have passed since 1st Ramzan, 2015")


//       **** Chapter 31-34 ****   Task 10 ****


// var start=new Date("Jan 1,2015")
// var end=new Date();
// var startmili=start.getTime();
// var endmili=end.getTime();
// var days=(endmili - startmili)/(1000);
// var daysFixed=Math.round(days);
// document.write("On refernce date "+start+",\n"+daysFixed+" seconds had passed since begining of 2015")


//       **** Chapter 31-34 ****   Task 11 ****

// var previousDate=new Date();
// var date=new Date();
// var dateHour=date.getHours();
// var enterHour= +prompt("Hours of Extraction")
// var newHour=dateHour - enterHour;
// date.setHours(newHour);
// document.write("Current Date: "+previousDate+"<br>"+enterHour+" hour age"+",it was "+date)


//       **** Chapter 31-34 ****   Task 12 ****


// var previousDate=new Date();
// var date=new Date();
// var dateyear=date.getFullYear();
// var difference= 100;
// var newyear=dateyear - difference;
// date.setFullYear(newyear);
// alert("Current Date: "+previousDate)
// alert(difference+" years Back"+",it was "+date)


//       **** Chapter 31-34 ****   Task 13 ****


// var date=new Date();
// var birthYear=+prompt("How old are you ?")
// var dateYear=date.getFullYear();
// var difference=dateYear - birthYear;
// var birthDate=date.setFullYear(difference);
// var birthYearNew=date.getFullYear();
// document.write("Your age is "+birthYear+"<br>"+"Your birth year is "+birthYearNew)

//       **** Chapter 31-34 ****   Task 14 ****


// var customerName = prompt("Enter Customer Name ")
// var date=new Date();
// var month =date.getMonth();
// var monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"]
// var currentMonth=monthNames[month]
// var numberofUnits=+prompt("Enter number of units");
// var chargesPerunit=+prompt("Charge per unit");
// var amountWithinTime=(numberofUnits*chargesPerunit);
// var enterLateFee=+prompt("Enter Late Charges");
// var amountAfterTime=amountWithinTime+enterLateFee;
// document.write("<h1>K-Electric Bill</h1> <br>")
// document.write("Costumer Name: "+customerName+"<br>"+"Month: "+currentMonth+"<br>"+"Number of units: "+numberofUnits
//          +"Charges per unit: "+chargesPerunit+"<br><br>"+"Net Amount Payable (within Due Date): "+amountWithinTime+"<br>"+
//           "Late Payment Surcharge: "+enterLateFee+"<br>"+"Gross Amount Payable(after Due Date): "+amountAfterTime)    


//       **** Chapter 35-38 ****   Task 1 ****


// function time(){
//     var date=new Date();
//     alert(date)
// }
// time();

//       **** Chapter 35-38 ****   Task 2 ****


// function greet(firstName,lastName,fullName){
//     var firstName=prompt("Enter First Name");
//     var lastName=prompt("Enter Last Name");
//     var fullName = firstName+" "+lastName;
// alert(fullName)
// }
// greet();


//       **** Chapter 35-38 ****   Task 3 ****

// function addition( num1 , num2){
// var num2 = +prompt("Enter Number 2");
// var num1 = +prompt("Enter Number 1");
// return num1 + num2     
// }
// var num1;
// var num2;
// var a = addition(num1 , num2);
// alert(a);


//       **** Chapter 35-38 ****   Task 4 ****



// var num1=+prompt("Enter Number 1")
//     var operator=prompt("Enter Operator")
//     var num2=+prompt("Enter Number 2")

// function cal(num1,operator,num2){
//     if(operator==="+"){
//         return num1+num2
//     }
//     else if(operator==="-"){
//         return num1-num2
//     }
//     else if(operator==="/"){
//         return num1/num2
//     }
//     else if(operator==="*"){
//         return num1*num2
//     }
//     else if(operator==="%"){
//         return num1%num2
//     }
//     else
    
//     return ("Wrong Input")

// }
// var g = cal(num1,operator,num2)
// alert(g)



//       **** Chapter 35-38 ****   Task 5 ****


// var num = +prompt("Enter Value For Square")
// function square(num){
//     return num=Math.pow(num,2)
// }
// g= square(num);
// alert(g)


//       **** Chapter 35-38 ****   Task 6 ****




//       **** Chapter 35-38 ****   Task 7 ****


// function count(num1,num2){   
// for(var i=num1;i<=num2;i++){
//       var a= document.write(i+"<br>")    
//     }
//     return a
// }
// var num1=+prompt("Enter Starting Number")
// var num2=+prompt("Enter Ending Number")
// var g = count(num1,num2);


//       **** Chapter 35-38 ****   Task 8 ****


//       **** Chapter 35-38 ****   Task 9 ****

// function area(width,height){
//         return width*height;

// }
// var g=area(5,5);
// document.write(g+"<br>")

// var width=+prompt("Enter Width ")
// var height=+prompt("Enter Height ")
// var b=area(width,height)
// document.write(b)

//       **** Chapter 35-38 ****   Task 10 ****

function wordcheck(word){
        var wordPalindrome=word.split("")
        wordPalindrome.reverse()
        var newWord=concat(wordPalindrome)
        if(word===wordPalindrome){
                alert("Word ok")
        }
        
}