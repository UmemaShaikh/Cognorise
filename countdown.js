const countdown= () =>{
    const countDate=new Date("July 1, 2024 00:00:00").getTime();
    const now=new Date().getTime();
    const gap=countDate-now;
    const second= 1000;
    const minute=second*60;
    const hour=minute*60;
    const day=hour*24;
    const days=Math.floor(gap/day);
    const hours=Math.floor((gap%day)/hour);
    const minutes=Math.floor((gap%hour)/minute);
    const seconds=Math.floor((gap%minute)/second);
    document.querySelector(".day").innerText=`${days}`;
    document.querySelector(".hours").innerText=`${hours}`;
    document.querySelector(".minute").innerText=`${minutes}`;
    document.querySelector(".second").innerText=`${seconds}`;
    if(gap<0){
        document.querySelector(".day").innerText="00";
        document.querySelector(".hours").innerText="00";
        document.querySelector(".minute").innerText="00";
        document.querySelector(".second").innerText="00";
        }
        setInterval(countdown,1000);
        }

        countdown();