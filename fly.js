const docEl = document.documentElement;
const fly = document.createElement("div");

fly.style.cssText = `
    position: fixed;
    width: 50px;
    height: 50px;
    right: 0;
    bottom: 0;
    pointer-events: none;
    background:url('./img/airplane.svg') center/contain no-repeat 
`;
document.body.append(fly);

function calcPositionFly() {
    const maxScroll = docEl.scrollHeight - docEl.clientHeight;

    //window.pageYOffset (текущее значение вертикальной прокрутки / на всю прокрутку) * 100 - формула
    const process = (window.pageYOffset / maxScroll) * 100;

    // вычисление вертикальной позиции самолета от % вертикальной прокрутки страницы
    const height = ((docEl.clientHeight - fly.clientHeight) * process) / 100;

    fly.style.transform = `translateY(-${height}px)`;
}
window.addEventListener("scroll", () => {
    requestAnimationFrame(calcPositionFly);
});

calcPositionFly();
