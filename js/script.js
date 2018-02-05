"use strict";

function launchModal() {
		
    alertify.set({
        labels: {
	    ok: "Follow",
            cancel: "Close"
        }
    });

    // When modal triggered, do this:  
    var emailAddress = decodeURIComponent("email%2Enytek%40gmail%2Ecom");   
    alertify.confirm("Title", emailAddress, function(e) {
        if (e) {
            alertify.success("Thank you. Your consideration is appreciated. <strong>[close]</strong>");
        }
    });

};

// Expose Email:
let launchModalOnce = $("#email-link").mouseover(function (e) {
    e.stopPropagation();
    e.preventDefault();
	
    if (launchModalOnce.true) return true;
    launchModalOnce.true = true;
    launchModal();
	console.log("!!!!");
    $("span#email-link i.fa.fa-external-link").css("display", "none");
    $("button#alertify-ok").css("display","none");
    return false;
	
});

/*		
// Hack to ensure button doesn't lose the pop-through graphic on defocus:
$(".alertify-button-ok").blur(function () { //Detects element defocusing
    this.focus();
});	
*/
