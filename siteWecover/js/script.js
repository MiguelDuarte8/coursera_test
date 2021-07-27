
/* SmtpJS.com - v3.0.0 */
//var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

/*
var tooltipSpan = document.getElementById('tooltip-text');
window.onmousemove = function (e) {

    var x = e.clientX,
        y = e.clientY;
    
        tooltipSpan.style.top = (y + 20) + 'px';
        tooltipSpan.style.left = (x + 20) + 'px';

}; */

function camposObrigatoriosPreenchidos(){
    var emptyInputs = $('input:required').filter(function() {
    return $(this).val() === "";
}).length;

    var emptySelects = $('select:required').has('option').val();

if (emptyInputs === 0 && emptySelects>0) {
   alert("GOOD!");
} else {
    alert("Preencha os campos obrigatorios");
    //$('input:required').classList.add("notValid");
    return false;
}
}



function preenchido() {



    
     if(document.getElementById("txtName").value==="") { 
            alert("Por favor preencha o campo do Nome");
            
        } else { 
            //alert("TA CHEIO BOY")
            window.location.href="Empresas_D&O_FormCont.html"
            //document.getElementById('botaoNextForm').disabled = false;
        }
    };

function submit (){


    if ($("input[type='radio']:checked").length === 7) {
       alert('All good!');
    }
    else {
       alert('Please answer all questions');
    };

    // define your own email api which points to your server.

/* app.post( '/api/sendemail/', function(req, res){
            
    let _name = req.body.name;
    let _email = req.body.email;
    let _subject = req.body.subject;
    let _messsage = req.body.message;

    //implement your spam protection or checks. 

    sendEmail ( _name, _email, _subject, _message );

}); */

    
}



function sendEmail ( _name, _email, _subject, _message) {

    if ($("input[type='radio']:checked").length === 7) {
       alert('All good!');
    }
    else {
       alert('Please answer all questions');
       return;
    };

    

     alert("MAde it this far1");

    require(['require', 'node-mandrill'], function (require) {
    var mandrill = require('node-mandrill')('5efffd283be548fc81049f6aeb7450be-us6');

       alert("MAde it this far2")
        mandrill('/messages/send', {
            message: {
                to: [{email: _email , name: _name}],
                from_email: 'miguel@dingo.pt',
                subject: _subject,
                text: _message
            }
        }, function(error, response){
            if (error) alert( 'error' );
            else alert('response');
        });

    });

     
alert("MAde it this far3")
    
};


/*
function sendEmail ( _name, _email, _subject, _message) {
     alert("MAde it this far1")

    define(['require', 'node-mandrill'], function (require) {
    var mandrill = require('node-mandrill')('5efffd283be548fc81049f6aeb7450be-us6');

        alert("MAde it this far3")
        mandrill('/messages/send', {
            message: {
                to: [{email: _email , name: _name}],
                from_email: 'miguel@dingo.pt',
                subject: _subject,
                text: _message
            }
        }, function(error, response){
            if (error) alert( 'error' );
            else alert('response');
        });


    });
    
};
*/
   

    //const mandrill = require('node-mandrill')('5efffd283be548fc81049f6aeb7450be-us6'); 
    /*app.post( '/api/sendemail/', function(req, res){
            
    let _name = req.body.name;
    let _email = req.body.email;
    let _subject = req.body.subject;
    let _messsage = req.body.message;

    //implement your spam protection or checks. 

    sendEmail ( _name, _email, _subject, _message ); */

    


    







    
/*
    Email.send({
    Host : "smtp.secureserver.com",
    Username : "miguel@dingo.pt",
    Password : "Fireballpt08",
    To : 'miguelinho_d@hotmail.com',
    From : "miguel@dingo.pt",
    Subject : "This is the subject",
    Body : "And this is the body"
    }).then(
      message => alert("Sent")
    );

    }; */

    //update this with your js_form selector
    //var form_id_js = "javascript_form";

    /*

    var data_js = {
        "access_token": "755kzibtumy6cdgmrp3iuyhc" // sent after you sign up
    };

    function js_onSuccess() {
        // remove this to avoid redirect
        //window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
        alert("Sent successfully")
    }

    function js_onError(error) {
        // remove this to avoid redirect
        //window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
        alert("Sendind error")
    }

    var sendButton = document.getElementById("btnSubmit");

    function js_send() {
        sendButton.value='Sending…';
        sendButton.disabled=true;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
                js_onSuccess();
            } else
            if(request.readyState == 4) {
                js_onError(request.response);
            }
        };

        var subject = "Teste";
        var message = "Mensagem teste";
        data_js['subject'] = subject;
        data_js['text'] = message;
        var params = toParams(data_js);

        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.send(params);

        return false;
    }

    sendButton.onclick = js_send;

    function toParams(data_js) {
        var form_data = [];
        for ( var key in data_js ) {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
        }

        return form_data.join("&");
    }

    var js_form = document.getElementById(form_id_js);
    js_form.addEventListener("submit", function (e) {
        e.preventDefault();
    });



*/

