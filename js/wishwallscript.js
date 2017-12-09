window.onload = function() {
    var remind = document.getElementById('remind');
    var helpBtn = document.getElementsByClassName('helpBtn');
    var no = document.getElementById('no');
    var yes = document.getElementById('yes');
    var hint = document.getElementById('hint');
    var hintContain = document.getElementById('hintContain');
    var remindContain = document.getElementById('remindContain');
    var finish = document.getElementById('finish');
    var giftT = document.getElementsByClassName('giftT');
    var arrImg = ['url(../img/gift1.jpg);', 'url(../img/gift2.jpg);', 'url(../img/gift3.jpg);', 'url(../img/gift3.jpg);', 'url(../img/gift4.jpg);', 'url(../img/gift5.jpg);', 'url(../img/gift6.jpg);', 'url(../img/gift7.jpg);', 'url(../img/gift8.jpg);', 'url(../img/gift9.jpg);', 'url(../img/gift10.jpg);', 'url(../img/gift11.jpg);'];
    var x= 0;

    function close() {
        remind.classList.add("remindOff");
        remindContain.style.display = 'none';
    }

    for (var i=0; i<helpBtn.length; i++) {
        helpBtn[i].onclick = function() {
            remind.classList.remove("remindOff");
            remindContain.style.display = 'block';
        }
    }

    no.onclick = function() {
        close();
    }

    yes.onclick = function() {
        close();
        hint.classList.remove("hintOff");
        hintContain.style.display = 'block';
    }

    finish.onclick = function() {
        hint.classList.add("hintOff");
        hintContain.style.display = 'none';
    }
}