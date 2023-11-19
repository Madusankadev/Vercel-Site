
var websBestElement = document.getElementById('websBestElement'); // Best web first DIV
var websBestElementMiddle = document.getElementById("websBestElementMiddle"); // Best web second DIV
var websBestElementLast = document.getElementById("websBestElementLast"); // Best web third DIV

//Best web third DIV discription
var websBestElementDiscFirst = document.querySelector(".websBestElementDiscFirst").offsetHeight;
var websBestElementDiscMiddleHeight = document.querySelector(".websBestElementDiscMiddle").offsetHeight;
var websBestElementDiscFirst = document.querySelector(".websBestElementDiscFirst").offsetHeight;

var websBestElementHeight = websBestElement.offsetHeight + "px"; // Best web first DIV Hight

//Best web padding top
websBestElementMiddle.style.paddingTop = websBestElementHeight;
websBestElementLast.style.paddingTop = websBestElementHeight;

//Best web padding bottom
websBestElementMiddle.style.paddingBottom = ((websBestElementDiscFirst * 3) - 55 )+ "px";

document.querySelector(".websBestElementDiscFirst").style.top = (websBestElement.offsetHeight + 260 ) + "px"
document.querySelector(".websBestElementDiscMiddle").style.top = (websBestElement.offsetHeight + 400 ) + "px"
document.querySelector(".websBestElementDiscLast").style.top = (websBestElement.offsetHeight + 540 ) + "px"


// webSiteFatureSection

var webSiteFatureSectionFirstDiv = document.getElementById("webSiteFatureSectionDiv1");
var gitCliBoxTop = document.querySelector(".gitCliBoxTop");



