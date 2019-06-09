function navFunction() {
	var x = document.getElementById("rightnav");
	if (x.className === "rightnav") {
		x.className += " responsive";
	} else {
		x.className = "rightnav";
	}
}

function locate() {
    var loc = document.getElementById("location").value;
    //alert(loc);
    if(loc=="---")
    {
        alert("Please select a location!");
    }
    else if(loc=="Anna")
    {
        window.location.href = "page3.html#section1";
    }
    else if(loc=="VIT")
    {
        window.location.href = "page3.html#section2";
    }
    else if(loc=="SRM")
    {
        window.location.href = "page3.html#section3";
    }
    else if(loc=="Hindustan")
    {
        window.location.href = "page3.html#section4";
    }
    return false;
}