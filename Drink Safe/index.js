function set_time(seconds) {
    let time = Number(document.getElementById("test").innerHTML);
    document.getElementById("test").innerHTML = "Bye";
}

function clickHandler(type) {
    
    let counter = Number(document.getElementById("counter").innerText);
    document.getElementById("counter").innerText = counter + 1;

    let BAC = Number(calculateBAC(counter + 1));
    document.getElementById("BAC").innerText = BAC;

    let warning = fetchWarning(BAC);
    document.getElementById("warning").innerText = warning;
    
}

function fetchWarning(BAC) {
    if (BAC >= 0.020 && BAC < 0.040) { return "You may begin to feel some effects"; }
    if (BAC >= 0.040 && BAC < 0.060) { return "You may start to feel more relaxed"; }
    if (BAC >= 0.060 && BAC < 0.080) { return "Your judgment is somewhat impaired"; }
    if (BAC >= 0.080 && BAC < 0.100) { return "You cannot legally drive!"; }
    if (BAC >= 0.100 && BAC < 0.120) { return "Your reaction time is significantly lower. You are legally drunk."; }
    if (BAC >= 0.120 && BAC < 0.150) { return "You may throw up soon. Stop drinking and find some water."; }
    if (BAC >= 0.150 && BAC < 0.200) { return "The equivalent of a 1/2 pint of whiskey is in your blood stream. Stop drinking."; }
    if (BAC >= 0.200 && BAC < 0.300) { return "You may blackout. We'll let your friends know where you are."; }
    if (BAC >= 0.300) { return "Emergency!"; }
    return "Have a safe night!";
}

function calculateBAC(counter) {
    return (counter * 0.025).toFixed(3);
}