import Paddle from "./paddle";
import InputHandler from "./input";
let canvas = document.getElementById("gameScreen");

let ct = canvas.getContext("2d");

const GAME_HIGHT = 600;
const GAME_WIDTH = 800;

let paddle = new Paddle(GAME_WIDTH, GAME_HIGHT);
paddle.draw(ct);
let lastTime = 0;
new InputHandler(paddle);
function gameLoop(timestamp) {
  let delataTime = timestamp - lastTime;
  lastTime = timestamp;
  ct.clearRect(0, 0, 800, 600);
  paddle.update(delataTime);
  paddle.draw(ct);

  requestAnimationFrame(gameLoop);
}
gameLoop();
