document.addEventListener("keydown", function (e) {
  play(e.code);
});

const divs = document.querySelectorAll(".key");
divs.forEach((div) => {
  div.addEventListener("mousedown", function (e) {
    play(e.target.id);
  });
  div.addEventListener("mouseup", function (e) {
    release(e.target.id);
  });
});

document.addEventListener("keyup", function (e) {
  release(e.code);
});

const play = function (id) {
  const keyPressed = document.querySelector(`#${id}`);
  const soundToPlay = document.querySelector(`#audio${id}`);
  if (keyPressed) {
    //console.log(keyPressed);
    keyPressed.classList.add("playing");
    soundToPlay.currentTime = 0;
    soundToPlay.play();
  } else {
    console.log("Not in the list");
  }
};

const release = function (id) {
  const keyRealeased = document.querySelector(`#${id}`);
  if (keyRealeased) {
    //console.log(keyRealeased);
    keyRealeased.classList.remove("playing");
  }
};
