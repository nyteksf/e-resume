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
    alertify.confirm(emailAddress, function(e){
        if (e) {
            $('#trigger').click();
            alertify.success("Thank you! Expect to be followed back shortly. <strong>[" + alertify.labels.ok + "]</strong>");
        } else {
            alertify.success("Thank you. Your consideration is appreciated. <strong>[close]</strong>");
        }
    });

};

// Expose Email:
$("#email-link").mouseover(function (e) {
    e.stopPropagation();
    e.preventDefault();
    launchModal();
});
		
// Hack to ensure button doesn't lose the pop-through graphic on defocus:
$(".alertify-button-ok").blur(function () { //Detects element defocusing
    this.focus();
});	