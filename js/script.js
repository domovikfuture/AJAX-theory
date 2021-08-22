'use strict';

const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', ()=>{
    const request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    //request.open(method, url, async, login, password);
    //собирает настройки, которые в будущем помогут сделать запрос

    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    //заголовок нужный для передачи json файлов
    
    request.send();
    //отправка запроса

    request.addEventListener('load', ()=>{
        if(request.status === 200){
            const data = JSON.parse(request.response);
            inputUsd.value = (inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    });

    //status
    //statusText
    //response
    //readyState

});