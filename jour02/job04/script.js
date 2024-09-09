let log = document.getElementById("keylogger");

function keyLogger() {
    document.addEventListener("keydown", (event) => {
        if (event.target === log) {
            log.value += event.key;
        } else {
            log.value += event.key;
        }
    });
}

keyLogger();