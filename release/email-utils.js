function sendMail(e,n){var t=300;$("#btn-send-mail").hide();var a=$("#email-result");a.fill("Sending message. Prease wait...").animate({$$show:1,$$fade:1},t);var i={name:"Tabs limiter extension message from "+e,_replyto:e,message:n},o={headers:{"Content-Type":"application/json"}};$.request("post","http://formspree.io/rub3nmv@gmail.com",$.toJSON(i),$.toJSON(o)).then(function(e){a.animate({$$fade:0},t).then(function(){a.fill("Message sent. Thank you!")}).then(function(){a.animate({$$show:1,$$fade:1},t)})}).error(function(e,n,i){a.animate({$$fade:0},t).then(function(){a.fill("There was an error. Try again later or contact me through any of the social networks above.")}).then(function(){a.animate({$$show:1,$$fade:1},t)})})}var MINI=require("minified"),$=MINI.$,HTML=MINI.HTML;$.ready(function(){document.getElementById("email-form").addEventListener("submit",function(e){e.preventDefault()}),document.getElementById("email-form").addEventListener("submit",function(){var e=document.getElementById("email").value,n=document.getElementById("message").value;sendMail(e,n)}),$("#email-result").hide()});