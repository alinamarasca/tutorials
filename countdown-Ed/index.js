const countdown = () =>{
    const countDate = new Date('August 10, 2021 00:00:00').getTime();
    // console.log(countDate)
    const now = new Date().getTime();
    //console.log(now);
    const gap = countDate - now;
    // console.log(gap);

    //how time works?
    const millisecond = 1;
    const second = millisecond * 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    // console.log(day)

    //calc time
    const textDay = Math.floor(gap/day);
    // console.log(textDay);
    const textHour = Math.floor((gap % day)/hour);
    // console.log(textHour);
    const textMinute = Math.floor((gap % hour)/minute);
    const textSecond = Math.floor((gap % minute)/second);
    const textMillisecond = Math.floor((gap % second) / millisecond)

    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;
    document.querySelector(".millisecond").innerText = textMillisecond;
    setTimeout(countdown, 1);
}
// setTimeout(countdown, 1000);
countdown();