var calories;
var units;
var timespan;

GetUrlParams();
var caloriesPerUnit = GetCaloriesPerUnit(units);
document.getElementById("infoText1").innerHTML = decodeURI("You have burned "+(calories / caloriesPerUnit) +" "+ units +" "+ timespan);
console.log("You have burned "+(calories / caloriesPerUnit) +" "+ units + " in " + timespan );
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
    if(tmp[0] === "units"){
      units = tmp[1];
    }
    if(tmp[0] === "timespan"){
      timespan = tmp[1];
    }
  }
}
function AddElements(){
  for(var i = 0;i<Math.round(calories/caloriesPerUnit);i++){
    var img = document.createElement('img');
    img.src = "http://blogs-images.forbes.com/thumbnails/blog_1217/pt_1217_1204_o.jpg?t=1342459978&width=128&height=128";
    var src = document.getElementById("insert-here");
    src.appendChild(img);
  }
}

function GetCaloriesPerUnit(unit){
  switch (unit) {
    case "bigmac":
        return 400;
      break;
    default:

  }
}

console.log(calories);
console.log(units);
console.log(timespan);
