var calories;
var unit;
var timespan;
var visualizeIn;

var Units = [
  {name:"bigmacs",kcal:"210",kjoule:"879"},
  {name:"",kcal:"",kjoule:""}
]

GetUrlParams();
var burnedUnits;
if(unit==1){burnedUnits = calories / visualizeIn.kcal};
if(unit==2){burnedUnits = calories / visualizeIn.kjoule};
var info = "You have burned about " + Math.round(burnedUnits) + " " + visualizeIn.name + " " + timespan.replace("+"," ");

document.getElementById("infoText1").innerHTML = decodeURI(info);

AddElements();

function GetUrlParams(){
  var url = window.location.search;
  var params = url.split('&');
  for(var i=0;i<params.length;i++){
    if(params[i].startsWith("?")){
      params[i] = params[i].substring(1);
    }
    var tmp = params[i].split("=");
    if(tmp[0] === "calories"){
      calories = tmp[1];
    }
    if(tmp[0] === "visualizeIn"){
      visualizeIn = Units[parseInt(tmp[1])];
    }
    if(tmp[0] === "unit"){
      unit = tmp[1];
    }
    if(tmp[0] === "timespan"){
      timespan = tmp[1];
    }
  }
}
function AddElements(){
  for(var i = 0;i<Math.round(burnedUnits);i++){
    var img = document.createElement('img');
    img.src = "http://blogs-images.forbes.com/thumbnails/blog_1217/pt_1217_1204_o.jpg?t=1342459978&width=128&height=128";
    var src = document.getElementById("insert-here");
    src.appendChild(img);
  }
}

function GetCaloriesPerUnit(unit){
  switch (unit) {
    case 1:
        return 400;
      break;
    default:

  }
}
function GetName(index){
  switch(parseInt(index)){
  case 1:
    return "bigmac";
  break;
}}

/*
console.log("calories: " + calories);
console.log("unit: " + unit);
console.log("timespan: " + timespan);
console.log("vis in: " + unit.name);
console.log(GetName("1"));
console.log(Units);
*/
