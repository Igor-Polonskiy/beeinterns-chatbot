
let dialog = $(".window");
let send = $('.send');
let text = $('.textmessage');

let start = false;
let number1 = 0;
let number2 = 0;
let count = false;
let onkeyupflag = false;


function check() {
    if (text.val() != '') {
        $('#graybutton').addClass('nodisplay');
        send.removeClass('nodisplay');
    } else {
        $('#graybutton').removeClass('nodisplay');
        send.addClass('nodisplay');
    }
}


console.log(onkeyupflag);
send.click(function() {
    let botico = $('<img src="img/bot.svg">');
    let userico = $('<img src="img/user.svg">');
    let message = $("<div class='message'></div>");
    let usermessage = $('<div class="usermessage"></div>');
    let botmessage = $('<div class="botmessage"></div>');
    let answer = $("<div class='message'></div>");

    usermessage.append('<p>' + text.val() + '</p>');
    message.append(userico, usermessage);
    dialog.append(message);
    dialog.scrollTop(dialog.prop('scrollHeight'));


    if (text.val() == '/start') {

        botmessage.append('<p>Привет, меня зовут Чат-бот, а как зовут тебя?</p>');
        start = true;

    } else if (text.val() !== '/start' && start == false) {
        botmessage.append('<p>Введите команду /start, для начала общения</p>');

    } else if (start == true) {
        let arr = text.val().split(' ');
        //alert(arr[0]);

        if (arr[0] == '/name:') {
            botmessage.append('<p>Привет ' + arr[1] + ', приятно познакомится. Я умею считать, введи числа которые надо посчитать</p>');

        } else if (arr[0] == '/number:') {
            count = true;
            let numbers = arr[1].split(',');
            number1 = Number(numbers[0]);
            number2 = Number(numbers[1]);
            botmessage.append('<p>Какое из действий будем совершать:  -, +, *, / ?</p>');
        } else if (count == true && text.val() == '-') {
            let result = (number1 - number2);
            botmessage.append('<p>' + number1 + '-' + number2 + '=' + result + '</p>');
            count = false;
        } else if (count == true && text.val() == '+') {
            let result = number1 + number2;
            botmessage.append('<p>' + number1 + '+' + number2 + '=' + result + '</p>');
            count = false;
        } else if (count == true && text.val() == '*') {
            let result = number1 * number2;
            botmessage.append('<p>' + number1 + '*' + number2 + '=' + result + '</p>');
            count = false;
        } else if (count == true && text.val() == '/') {
            let result = number1 / number2;
            botmessage.append('<p>' + number1 + '/' + number2 + '=' + result + '</p>');
            count = false;
        } else if (arr[0] == '/stop') {
            botmessage.append('<p>Всего доброго, если хочешь поговорить пиши /start</p>');
            start = false;
        } else {
            botmessage.append('<p>Я не понимаю, введите другую команду!</p>');
        }


    }


    answer.append(botico, botmessage);
    setTimeout(function() {
        dialog.append(answer);
        dialog.scrollTop(dialog.prop('scrollHeight'));
    }, 1000);
    text.val('');
    check();

});












// usermassage.append(userico, text.val());
// dialog.append(usermassage);

/*
let botico = document.createElement('img');
botico.src = "img/bot.svg";
let bot = document.querySelector('div.window');
let massage = document.createElement('div');
massage.append(userico);
bot.append(massage);
bot.append(botico);*/