var xmlhttp = false;
try {
    xmlhttp = new ActiveXObject("Msxm12.XMLHTPP");
    alert("microsoft internet explorer");
} catch (e) {
    try{
        xmlhttp = new ActiveXObject("Microsoft.XMLHTPP");
        alert("microsoft internet explorer")
    }catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined'){
        xmlhttp = new XMLHttpRequest();
        alert ("microsoft internet explorer");
    }
    var showCalendar = true;
    function showHiedCalendar(){
        var objID = "calendar";
        if(showCalendar == true){
            document.getElementById("opencloseimg").src = "mins.gif";
            var serverPage = "calendar.php"
            showCalendar = false;
            var obj = document.getElementById(objID);
            xmlhttp.open("GET", serverPage);
            xmlhttp.onreadystatechange = function(){
                if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
                {
                    obj.innerHTML = xmlhttp.responseText;
                }
            }
            xmlhttp.send(null);
        }
        else{
            decument.getElementById("opencloseimg").src = "plus.gif";
            showCalendar=true;
            document.getElementById(objID).innerHTML = "";  
        }
    }
function createform (e){
    theObject = document.getElementById("createtask");
    theObject.style.visibility = "visible";
    theObject.style.height = "200px";
    theObject.style.width = "200px";
    


var posx = 0; 
var posy = 0;
posx = e.clientX + document.body.scrollLeft; 
posy = e.clientY + document.body.scrollTop;
theObject.style.left = posx + "px";
theObject.style.top = posy + "px";
var ObjID = "createtask";
var serverPage = "theform.php";

var obj = document.getElementById(objID);
xmlhttp.open("GET, serverPage");
xmlhttp.onreadystatechange = function(){
    if (xmlhttp.readyState == 4 && xmlhttp.status ==200){
        obj.innerHTML = xmlhttp.responseText;
    }
}
xmlhttp.send(null);
}
function closetask (){
    theObject = document.getElementById("createtask");

    theObject.style.visibility = "hiden";
    theObject.style.height = "0px"
    theObject.style.width = "0px";

    ActiveXObject = document.getElementById("autocompletediv");
    ActiveXObject.style.visibility = "0px";
    ActiveXObject.style.height = "0px";
    ActiveXObject.style.width = "0px";

}


function findPosx(obj) {
    var curleft = 0;
    if (obj.offsetParent) {
        while (obj.offsetParent) {
            curleft += obj.offsetLeft;
            obj = obj.offsetParent;
        }
    } else if (obj.x) {
        curleft += obj.x;
    }
    return curleft;
}

function findPosy(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        while (obj.offsetParent) {
            curtop += obj.offsetTop;
            obj = obj.offsetParent;
        }
    } else if (obj.y) {
        curtop += obj.y;
    }
    return curtop;
}

function autocompletediv (value, e){
    theObject = document.getElementById("autocompleteddiv");

    theObject.style.visibility ="visible";
    theObject.style.height = "152px";

    var posx = 0;
    var posy = 0;
    posx = (findPosX (document.getElementById("yourname")) + 1);
    posy = (findPosY (document.getElementById("yourname")) + 23);
    theObject.style.left = posx + "px";
    theObject.style.top = posy + "px";
}

var theextrachar = e.which || e.keyCode;
var objID = "autocompletediv";
var thevalue = document.getElementById("yourname").value;
var serverPage = "";

if (theextrachar == 8) {
    if (thevalue.length > 1) {
        serverPage = "autocomp.php";
    }
} else {
    serverPage = "autocomp.php" + "?sstring=" + thevalue.substr(0, (thevalue.length - 1));
    serverPage += String.fromCharCode(theextrachar);
}

var obj = document.getElementById(objID);
var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", serverPage);
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        obj.innerHTML = xmlhttp.responseText;
    }
};
xmlhttp.send(null);

function setvalue(thevalue) {
    var acObject = document.getElementById("autocompletediv");
    acObject.style.visibility = "hidden";
    acObject.style.height = "0px";
    acObject.style.width = "0px";
    document.getElementById("yourname").value = thevalue;
}

    
var theextrachar = e.which || e.keyCode;
var objID = "autocompletediv";
var thevalue = document.getElementById("yourname").value;
var serverPage = "";

if (theextrachar == 8) {
    if (thevalue.length > 1) {
        serverPage = "autocomp.php";
    }
} else {
    serverPage = "autocomp.php" + "?sstring=" + thevalue.substr(0, (thevalue.length - 1));
    serverPage += String.fromCharCode(theextrachar);
}

var obj = document.getElementById(objID);
var xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", serverPage);
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        obj.innerHTML = xmlhttp.responseText;
    }
};
xmlhttp.send(null);

function setvalue(thevalue) {
    var acObject = document.getElementById("autocompletediv");
    acObject.style.visibility = "hidden";
    acObject.style.height = "0px";
    acObject.style.width = "0px";
    document.getElementById("yourname").value = thevalue;
}
function validateform(thevalue) {
    var serverPage = "validator.php?sstring=" + thevalue;
    var objID = "messagebox";
    var obj = document.getElementById(objID);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", serverPage);
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            obj.innerHTML = xmlhttp.responseText;
        }
    };
    xmlhttp.send(null);
}

function checkfortasks(thedate, e) {
    var theObject = document.getElementById("taskbox");
    theObject.style.visibility = "visible";

    var posx = e.clientX + document.body.scrollLeft;
    var posy = e.clientY + document.body.scrollTop;
    theObject.style.left = posx + "px";
    theObject.style.top = posy + "px";

    var serverPage = "taskchecker.php?thedate=" + thedate;
    var objID = "taskbox";
    var obj = document.getElementById(objID);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", serverPage);
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            obj.innerHTML = xmlhttp.responseText;
        }
    };
    xmlhttp.send(null);
}





