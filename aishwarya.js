//console.log("Hello world!")
//var name="Aishwarya";
//console.log(name);//var name="Siddharth";
//console.log(name);
//var age="34,10"
//console.log(age);
//var x="x";
//var y="y";
//console.log("x+y");
//var num1=10;
//var num2=30;
//console.log(num1+num2);
//var country="India";
//console.log("We are from "+country);
//var num=100;
//(num++);

//console.log(num++);


//var person = {
// name:"Siddharth",
//age:"10",
//sex :"male",
//email:"siddharthponnjanaarthanan@gmail.com",

//}
//console.log(person)

//var hobbies=['sports','reading','writing','stampcollection']
//console.log(hobbies[1])

//console.log(hobbies)
//hobbies.pop()
//var value=10;

//switch (value) {
//  case 1:console.log("The value is 1")
//break;
//case 2:console.log("The value is 2")
//break;
//case 3: console.log("The value is 3")
//break;
//case 4: console.log("The value is 4")
//break;
//default:console.log("Reached default")
//}




//rectangle//
function getrectangle(l,b)
{
  return (2*(l+b))
}
  console.log(getrectangle(10,20))

//length of the string// 
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function lengthofthestring(txt) {
    return txt.length;
}
console.log(lengthofthestring(txt))



//large two numbers//
function largenumbers(a, b) {
    if (a < b) {
        return b;
    } else {
        return a;
    }
}


console.log(largenumbers(45, 80));
console.log(largenumbers(90, 10));
console.log(largenumbers(90, 90));

//boolean flag//
let num = "7000";
function isboolean(num) {
    if (num = 5000 && 9000) {
        return true;
    } else {
        return false;
    }

}
console.log(isboolean(num))

//cube root//
function getcuberoot(a) {
    return Math.cbrt(a);
}
console.log(getcuberoot(64))

//inches to feet//
function convertInches(inches) {
    let feetFromInches = Math.floor(inches / 12);
    let inchesRemainder = inches % 12;

    let result = feetFromInches + "'-" + inchesRemainder + "\"";
    console.log(result);
}

convertInches(65);

//degrees to farenheit//
function convertToF(celsius) {

    let fahrenheit = celsius * 9 / 5 + 32
    return fahrenheit;
}
console.log(convertToF(38));
function convertToc(farenheit) {
    let celcius = (farenheit - 32) * 5 / 9

    return celcius;
}
console.log(convertToc(100));

//kilograms to pounds//
function convertkitopo(pounds)
{
    let kilograms=(pounds*2.2);
    return kilograms;
}
console.log(convertkitopo(52))

function convertpotoki(kilograms)
{
    let pounds=(kilograms/2.2);
    return pounds;

}
console.log(convertpotoki(32))

//Json format//
const stateinUSA=[ 
    {
         "name":"Alaska",
         "postalcode":"AK",
         "capital":"juneau",
         "largest city":"Anchorage",
         "admission":"jan3 1959",
         "population":"733,391",
         "totalarea":"665384 miles",
         "waterarea":"94,743 miles",
         "no. of reps":"1",
     },
     
     {
        
            "name":"California",
            "postalcode":"CA",
            "capital":"Sacramento",
            "largest city":"Los Angeles",
            "admission":"sep9 1850",
            "population":"39,538,223",
            "totalarea":"163,695 miles",
            "waterarea":" 7,916miles",
            "no. of reps":"53",
     },
     {
        
        "name":"Colorado",
        "postalcode":"CO",
        "capital":"Denver",
        "largest city":"",
        "admission":"Aug1 1876",
        "population":"5,773,714",
        "totalarea":"104,094 miles",
        "waterarea":" 452 miles",
        "no. of reps":"7",
     },
     {
        "name":"Florida",
        "postalcode":"FL",
        "capital":"Tallahassee",
        "largest city":"Jacksonville",
        "admission":"Mar3 1845",
        "population":"21,538,187miles",
        "totalarea":"65,758 miles",
        "waterarea":" 12,133 miles",
        "no. of reps":"27",
     },
     {
        "name":"Geogragia",
        "postalcode":"GA",
        "capital":"Atlanta",
        "largest city":"",
        "admission":"jan 2 1788",
        "population":"10,711,908miles",
        "totalarea":"59,425	 miles",
        "waterarea":" 1,912 miles",
        "no. of reps":"14",

     },

    
]
//Json format for indian cricket team//
const IPL=[
{
    "unique_id": 1136561,
    "team": "Chennai Super Kings",
    "Nick name":"CSK",
    "captain":"M.S Dhoni",
    "wicket keepers":"M.S Dhoni,robin uhtappa",
    "batsmans":"ruthuraj gaikwad,Devon Conway,Ambati Rayudu",
    "bowlers":"Deepak,Adam,Rajvardhan,chris" ,
    "All-rounders":"Dwayane bravo, moideen ali",
      "date": "2022-03-26",
    "squad": true,
    "matchStarted": false
  },

  {
    "unique_id": 1136565,
    "team": "Kolkatta knight riders",
    "captain":"Shreyas Iyer,Eoin Morgan",
    "wicket keepers":"Sambillings",
    "batsmans":"Aaron,alex,Abijitt",
    "bowlers":"pat,tim,umesh" ,
    "All-rounders":"Anukul,shivam",
      "date": "2022-03-26",
    "squad": true,
    "matchStarted": false

  },
]
    
//longest strings//

 function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
 console.log( findLongestWord("The quick brown fox jumped over the lazy dog"))

 function findLongestWord(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0].length;
  }
  console.log(findLongestWord("our nation longestriver is Ganga"));

 //shortest string//
 words = ["Aishwarya", "dhanya", "siddharth","ponn janaarthanan"];

function getShortestWord(wordsArray) {
	return wordsArray.sort((a, b) => a.length - b.length)[0];
}

console.log(getShortestWord(words));
       