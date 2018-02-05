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
    alertify.confirm(emailAddress, function(e) {
        if (!e) {
            alertify.success("Thank you. Your consideration is appreciated. <strong>[close]</strong>");
        }
    });

};

// Expose Email:
let modalLaunchCount = 0;
let launchModalOnce = $("#email-link").mouseover(function (e) {
    e.stopPropagation();
    e.preventDefault();
		
    if (launchModalOnce.true) return true;
    if (modalLaunchCount >= 2) {
	    launchModalOnce.true = true;
	    return true;
    }
    modalLaunchCount++;
    launchModal();
	console.log("??? :)");
    $("span#email-link i.fa.fa-external-link").css("display", "none");
    $("button#alertify-ok").css("display","none");
    return false;
	
});

/* ADD "THIS" and use FIND() TO GET NEAREST BOX 
$(".skills-container a").mouseover( (e) => {
    $(".box,.css("","");
    $(".box, .box:hover").css("","");
    $("").css("","");	
});

$(".skills-container a").mouseout( () => {
    $("").css("","");
    $("").css("","");
    $("").css("","");	
});
*/

/*		
// Hack to ensure button doesn't lose the pop-through graphic on defocus:
$(".alertify-button-ok").blur(function () { //Detects element defocusing
    this.focus();
});	
*/
