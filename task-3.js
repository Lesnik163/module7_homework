let createEmptyObj = function () { //эта функция создаёт пустой обьект , прототипом которого 
        return Object.create(null) // является ничего , то есть нет прототипа, но здесь не 
    }                              // наследуются build-in методы глобального обьекта
    console.log(createEmptyObj());
