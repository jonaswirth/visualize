var calories;
var units;
var timespan;

GetUrlParams();
var caloriesPerUnit = GetCaloriesPerUnit(units);
console.log("You have burned "+(calories / caloriesPerUnit) +" "+ units + " in " + timespan );

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
