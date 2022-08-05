let krnlId = "/48193/";
let krnlS = "/getkey.php"
let krnlS2 = "/getkey"


function getElementByText( text, ctx)
{
  return document.evaluate("//*[.='"+text+"']", 
     ctx || document, null, XPathResult.ANY_TYPE, null).iterateNext();
}
if (window.location.pathname.startsWith(krnlId)) {
    window.location.href = 'https://moneymaker.cf/bypass/krnl'
} else if (window.location.pathname.startsWith(krnlS) && document.body.textContent.includes('Suspicious Code:') || window.location.pathname.startsWith(krnlS2) && document.body.textContent.includes('Suspicious Code:')) {
    window.location.href = 'https://cdn.krnl.place/getkey'
} else if (window.location.pathname.startsWith(krnlS) && document.body.textContent.includes('Please Complete The Captcha') || window.location.pathname.startsWith(krnlS2) && document.body.textContent.includes('Please Complete The Captcha')) {
    div = document.createElement("div");
    if (document.body.textContent.includes('Checkpoint 1')) {
        div.innerHTML = "<h2><b><center>Complete this Captcha to continue bypass! <u>4 times left</center></u></b></h2>";
    } else if (document.body.textContent.includes('Checkpoint 2')) {
        div.innerHTML = "<h2><b><center>Complete this Captcha to continue bypass! <u>3 times left</center></u></b></h2>";
    } else if (document.body.textContent.includes('Checkpoint 3')) {
        div.innerHTML = "<h2><b><center>Complete this Captcha to continue bypass! <u>2 times left</center></u></b></h2>";
    } else if (document.body.textContent.includes('Checkpoint 4')) {
        div.innerHTML = "<h2><b><center>Complete this Captcha to continue bypass! <u>1 time left</center></u></b></h2>";
    }
    element = document.getElementById("main");
    document.body.insertBefore(div, element);

} else if (window.location.pathname.startsWith(krnlS) && document.body.textContent.includes('This key only works for you!') || window.location.pathname.startsWith(krnlS2) && document.body.textContent.includes('This key only works for you!')) {
    let text = getElementByText('This key only works for you!')
    text.innerHTML = 'This key only works for you!<br><b><big><big><big>Bypassed using Money Maker\'s bypasser!</big></big></big></b>'
}