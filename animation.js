var x = document.addEventListener("DOMContentLoaded",function(){
    var btn1 = document.querySelector('.container button.btn1');
    console.log(btn1);
    var menu = document.querySelector('.left-menu');
    console.log(menu);
    var container = document.querySelector('.container');
    console.log(container);
    var blackDiv = document.querySelector('.container .black-div');
    console.log(blackDiv);

    btn1.addEventListener('click',function(){
        menu.classList.add('active');
        container.classList.add('active2');
        blackDiv.classList.add('active3');
    })
    blackDiv.addEventListener('click',function(){
        menu.classList.remove('active');
        container.classList.remove('active2');
        blackDiv.classList.remove('active3');
    })
},false)