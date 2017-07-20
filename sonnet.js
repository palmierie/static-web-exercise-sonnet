// STRING METHOD


var sSonnet = document.getElementById("sonnet").innerText;

function myIndex(){
  var index = sSonnet.indexOf("orphans");
  console.log('index', index);
  var length = sSonnet.length;
  console.log('length', length);
  
  var winSwitch = sSonnet.replace("winter", "yuletide");
  document.getElementById("sonnet").innerHTML = winSwitch;

  var largeSwitch = winSwitch.replace(/ the /g, " a large ");
  document.getElementById("sonnet").innerHTML = largeSwitch;

  /*  OR THIS
  var winSwitch = sSonnet.replace("winter", "yuletide").replace(/ the /g, " a large ");
  document.getElementById("sonnet").innerHTML = winSwitch;
  */
  
}

myIndex();