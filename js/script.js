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
$("#email-link").mouseover(function (e) {
    e.target.removeEventListener(e.type, arguments.callee);
    e.stopPropagation();
    e.preventDefault();
    launchModal();
});

/*		
// Hack to ensure button doesn't lose the pop-through graphic on defocus:
$(".alertify-button-ok").blur(function () { //Detects element defocusing
    this.focus();
});	
*/
