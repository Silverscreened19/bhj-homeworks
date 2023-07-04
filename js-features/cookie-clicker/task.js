const cookie = document.getElementById("cookie")
const clicker_counter = document.getElementById("clicker__counter")
const clicker_speed = document.getElementById("clicker__speed")

let delta = 20;
let counter = 0;
let last_click;


cookie.onclick = () => {
    counter++
    let adder = (counter%2)?delta:-delta;
    cookie.width += adder;
    cookie.height += adder;
    clicker_counter.textContent = counter;

    if(last_click === undefined) {
        last_click=Date.now();
    } else {
        let tm = Date.now();
        console.log(tm)
        let speed = 1000/(tm-last_click);
        last_click = tm;
        clicker_speed.textContent = speed.toFixed(2);;
    }
    console.log()
}
