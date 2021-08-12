let displayTime=()=>{
    let parent = document.querySelector('.parent');
    let date = new Date;
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if(hours <=9){
        hours = '0' + hours;
    }
    if(minutes <=9){
        minutes = '0' + minutes;
    }
    if(seconds <=9){
        seconds = '0' + seconds;
    }
    document.getElementById('time').innerHTML = hours + ':' + minutes + ':' + seconds;
    parent.classList.toggle('animate')
}
setInterval(displayTime, 1000)

displayTime()
