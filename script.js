var btn=document.querySelector('button')
var h1=document.querySelector('h1')
var inner=document.querySelector('#inner')

var flag=0

btn.addEventListener('click',function(){

    btn.style.pointerEvents='none'
    var num=50+Math.floor(Math.random()*50)
    var time=setInterval(() => {

        var a=flag++
        h1.innerHTML=flag+"%"
        inner.style.width=flag +'%'
    }, num);

    setTimeout(function(){
        clearInterval(time)
        btn.innerHTML='Downloaded'
        btn.style.opacity=0.5
        
    },num*100)
})