<!-- BEGIN #

function CheckUncheckAll(the_form) 
{
        for (var i=0; i < the_form.elements.length; i++) 
        {
                if (the_form.elements[i].type=="checkbox") 
                {
                        the_form.elements[i].checked = !(the_form.elements[i].checked);
                }
        }
}


function PopupSendSms(ta, tg)
{
        var pv = "PV";
        if (ta == pv)
        {
                var url = "menu.php?inc=send_sms&op=sendsmstopv&dst_p_num="+tg;
        }
        else
        {
                var url = "menu.php?inc=send_sms&op=sendsmstogr&dst_gp_code="+tg;
        }
        newwin=window.open("","WinSendSms","scrollbars","resizable=yes")
        newwin.moveTo(20,100)
        newwin.resizeTo(500,500)
        newwin.location=url	    
}

function PopupReplySms(tg, mssg)
{
        var url = "menu.php?inc=send_sms&op=sendsmstopv&dst_p_num="+tg+"&message="+mssg;

        newwin=window.open("","WinSendSms","scrollbars","resizable=yes")
        newwin.moveTo(20,100)
        newwin.resizeTo(500,500)
        newwin.location=url	    
}

function linkto(url)
{
        window.location.href = url;
}

function ConfirmURL(inputText, inputURL)
{ 
        if (confirm(inputText)) document.location=inputURL
}

function SureConfirm()
{
        if (confirm('Are you sure ?')) {
                return true;
        } else {
                return false;
        }
}

function SetSmsTemplate() {
        sellength = document.forms.fm_sendsms.smstemplate.length;
        for ( i=0; i<sellength; i++)
        {
                if (document.forms.fm_sendsms.smstemplate.options[i].selected == true)
                {
                        document.forms.fm_sendsms.message.value = document.forms.fm_sendsms.smstemplate.options[i].value;
                }
        }
}

function SmsTextCounter() {
        var msg = document.fm_sendsms.message;
        var msg_unicode = document.fm_sendsms.msg_unicode;
        var footerlen = parseInt(document.forms.fm_sendsms.footerlen.value);
        var maxChar = document.forms.fm_sendsms.maxchar.value;
        var maxChar_unicode = document.forms.fm_sendsms.maxchar_unicode.value;
        var maxlimit = document.fm_sendsms.hiddcount.value;
        var maxlimit_unicode = document.fm_sendsms.hiddcount_unicode.value;
        var limit;
        var devider;
        var msgcount;
        var result;
        if (msg_unicode.checked) {
                limit = maxlimit_unicode;
                devider = 70;
                if (msg.value.length > 70) {
                	devider = 63;
                }
        } else {
                limit = maxlimit;
                devider = 160;
                if (msg.value.length > 160) {
                	devider = 153;
                }
        }
        if (msg.value.length > limit) {
                msg.value = msg.value.substring(0, limit);
        }
        msgcount = Math.ceil((msg.value.length + footerlen) / devider);
        result = msg.value.length + ' char : ' + msgcount + ' SMS' ;
        return result;
}

function SmsSetCounter() {
        var ilen = SmsTextCounter();
        document.fm_sendsms.txtcount.value  = ilen ;
}

// END -->
