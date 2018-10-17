function set_time(seconds) {
    let time = Number(document.getElementById("timer").innerHTML);
    let tts = document.getElementById("tts").checked;
    document.getElementById("timer").innerHTML = time + 1;

    if (time === 1) {
        animate_color("rgb(247, 54, 102)");
        document.getElementById("desc").innerHTML = "Rare";
        tts ? playAudio("rare") : null;
    }
    if (time == 3) {
        animate_color("rgb(186, 55, 88)");
        document.getElementById("desc").innerHTML = "Medium Rare";
        tts ? playAudio("medium-rare") : null;
    }
    if (time == 5) {
        animate_color("rgb(150, 52, 77)");
        document.getElementById("desc").innerHTML = "Medium";
        tts ? playAudio("medium") : null;
    }
    if (time == 7) {
        animate_color("rgb(104, 37, 54)");
        document.getElementById("desc").innerHTML = "Well Done";
        tts ? playAudio("well-done") : null;
    }
    if (time == 9) {
        animate_color("rgb(0, 0, 0)");
        document.getElementById("desc").innerHTML = "Burnt!";
        tts ? playAudio("burnt") : null;
    }
}

function playAudio(id) {
    let x = document.getElementById(id);
    x.play();
}

function animate_color(to) {
    $( "body" ).animate({
        backgroundColor: to,
    }, 1000 );
}
