const myObj = {
    myCity: 'Moscow',
    myPhone : "89999333229",
    myMail : "fsvudv@yandex.ru",
    name: 'Dmitry'
}
function checkObjectHaveString(str,obj) {
        return [str] in obj;
}
console.log(checkObjectHaveString('name',myObj))