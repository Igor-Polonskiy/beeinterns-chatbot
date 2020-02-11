let userico = document.createElement("img");
userico.src = "img/user.svg";
let botico = document.createElement('img');
botico.src = "img/bot.svg";
let bot = document.querySelector('div.window');
let massage = document.createElement('div');
massage.append(userico);
bot.append(massage);
bot.append(botico);