window.onload = function () {
    var Impwish = document.getElementById('impWish1');
    var ImpWishP = document.getElementById('impWishP');
    var Register = document.getElementById('register');
    var turnOff = document.getElementById('turnOff');
    var sub1 = document.getElementById('sub1');
    var rest1 = document.getElementById('rest1');
    var textarea1 = document.getElementById('textarea1');
    var hint = document.getElementById('hint');
    var register2Contain = document.getElementById('register2Contain');
    var masking = document.getElementById('masking');
    var register2 = document.getElementById('register2');
    var tree = document.getElementById('tree');
    var wishsd = document.getElementById('wishsd');
    var sub2 = document.getElementById('sub2');
    var restBtn = document.getElementById('restBtn');
    var wishwall = document.getElementById('wishwall');
    var gather = document.getElementById('gather');
    var gift = document.getElementsByClassName('gift');
    var oImg = document.getElementsByClassName('oImg');
    var giftT = document.getElementsByClassName('giftT');
    var wishContent = document.getElementsByClassName('wishContent');
    var innerwishDiv = document.getElementsByClassName('innerwishDiv');
    var you = document.getElementById('you');
    var arrImg = ['img/gift1.jpg', 'img/gift2.jpg', 'img/gift3.jpg', 'img/gift3.jpg', 'img/gift4.jpg', 'img/gift5.jpg', 'img/gift6.jpg', 'img/gift7.jpg', 'img/gift8.jpg', 'img/gift9.jpg', 'img/gift10.jpg', 'img/gift11.jpg'];
    var onOff = true;
    var x = 0;
    var a = 0;

    Impwish.onclick = function () {
        if (onOff) {
            ImpWishP.innerHTML = '';
            Impwish.id = 'impwishChange';
            Impwish.innerHTML += '<div class="innerwishDiv"></div>';
            turnOff.style.display = 'block';
            sub1.style.display = 'block';
            rest1.style.display = 'block';
            textarea1.style.display = 'block';
            wishwall.style.display = 'none';
            onOff = false;
        }
    }

    turnOff.onclick = function () {
        Impwish.innerHTML = '';
        Impwish.id = 'impWish1';
        turnOff.style.display = 'none';
        sub1.style.display = 'none';
        rest1.style.display = 'none';
        textarea1.style.display = 'none';
        onOff = true;
        ImpWishP.innerHTML = '<a href="#">点击输入自己<br />的愿望</a>';
        Impwish.appendChild(ImpWishP);
        wishwall.style.display = 'block';
    }
    
    Register.onclick = function () {
        masking.style.background = '#8894aa';
        masking.style.opacity = '0.6';
        masking.style.zIndex = '1';
        register2.classList.remove("register2Hidden");
        register2.style.zIndex = '2';
        register2Contain.style.display = 'block';
    }

    function forRegister2() {
        masking.style.background = '';
        masking.style.zIndex = '-1';
        register2.style.zIndex = '';
        register2Contain.style.display = 'none';
        register2.classList.add("register2Hidden");
        
    }

    sub2.onclick = function () {
        forRegister2();
        you.innerHTML = '你';
    }

    restBtn.onclick = function () {
        forRegister2();
    }

    Register.onmouseover = function() {
        Register.style.transform = 'rotate(90deg)';
        Register.style.transition = 'transform 1s';
    }

    Register.onmouseout = function() {
        Register.style.transform = 'rotate(45deg)';
        Register.style.transition = 'transform 1s';
    }
    sub1.onclick = function() {
        if (x<gift.length){
            gift[x].style.display = 'block';
            wishContent[x].innerHTML= textarea1.value;
            hint.style.display='none';
            tree.style.opacity = '0';
            textarea1.value = '';
            a = Math.round(Math.random()*11);
            oImg[x].src = arrImg[a];
            x++;
        } else {
            hint.innerHTML = '你已经输入很多愿望啦，请不要再输入愿望了！';
            hint.style.display = 'block'
            sub1.disabled = true;
        }
    }

    wishwall.onmouseover = function () {
        wishwall.classList.add("changebig");
    }

    wishwall.onmouseout = function() {
        wishwall.classList.remove("changebig");
    }
}
