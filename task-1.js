let mainObj = {
    NaN:'male'
}//Обьект верхнего яруса - делегат
let myObj = Object.create(mainObj);// оригинальный обьект
   myObj.name ='Ivan';
   myObj.age =28;
let returnOwnKeysValues = (obj) => {
    for (let key in obj) {              //после перебора здесь только два своих свойства
        if (obj.hasOwnProperty(key)) {
            console.log(key,obj[key]);
        }
    } //по условию не должна возвращать значение
}
console.log(returnOwnKeysValues(myObj))