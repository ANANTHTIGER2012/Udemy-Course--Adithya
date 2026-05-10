import { Game } from "./Core/Game.js";

const canvas = document.getElementById("gameCanvas");
const game = new Game(canvas);
game.start();
