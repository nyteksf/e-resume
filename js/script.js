"use strict";

function launchModal() {
		
    alertify.set({
        labels: {
            cancel: "Close"
        }
    });

    // When modal triggered, do this:  
    var emailAddress = decodeURIComponent("email%2Enytek%40gmail%2Ecom");   
    alertify.confirm(emailAddress, function(e) {
        if (e) {
            alertify.success("Thank you. Your consideration is appreciated. <strong>[close]</strong>");
        }
    });

};

// Expose Email:
let launchModalOnce = $("#email-link").mouseover(function (e) {
    e.stopPropagation();
    e.preventDefault();
console.log("bang");	
    launchModalOnce();
	console.log("splat");
});

let launchModalOnce = () => {
    if (launchModalOnce.true) { console.log("true"); return true; }
    launchModalOnce.true = true;
	console.log("false");
    return false;
}

/*		
// Hack to ensure button doesn't lose the pop-through graphic on defocus:
$(".alertify-button-ok").blur(function () { //Detects element defocusing
    this.focus();
});	
*/
