function ElectricDevice(country) {
    this.typeOfEnergy = "electricity",
    this.country =country
}
ElectricDevice.prototype.isDeviceOn = function(condition) { //  прибор включен или нет
    if (condition === 'off') {
        console.log(`Device is switched on : ${false}`)
    }else{
        console.log(`Device is switched on : ${true}`)}
} 
ElectricDevice.prototype.countWattage = function(watt, hour) {console.log(watt * hour)}; //Потребляемая мощность
                
function Lamps(name,britnessInLumen,location) {       // Конструктор для всех типов ламп
    this.name = name,
    this.location = location,
    this.britness = britnessInLumen
}
Lamps.prototype = new ElectricDevice("China");   //  знает теперь о ElectricDevice()
Lamps.prototype.lifeTime = function(period) {console.log(period)}; // метод Lamps показывает срок службы

const deskLamp = new Lamps('deskLamp',68,'onDesk');
console.log(deskLamp);// личные свойства
deskLamp.isDeviceOn('on');//метод ElectricDevice - работает
deskLamp.countWattage(30,5);//метод ElectricDevice - работает
deskLamp.lifeTime("2 years");//метод Lamps - работает

function Computers(name,portable,memory,videoCard){  // Конструктор для всех типов компьютеров
    this.name = name,
    this.portable = portable,
    this.memory = memory,
    this.videoCard = videoCard
}
Computers.prototype = new ElectricDevice("Germany"); // знает теперь о ElectricDevice()
Computers.prototype.countPrice = (memoryPrice, videoCardPrice) => console.log(`${memoryPrice + videoCardPrice} $`); // метод считает цену

let computer = new Computers("computer","stationary","HDD","Radeon HD8750");
console.log(computer);// личные свойства
computer.isDeviceOn('off');//метод ElectricDevice - работает
computer.countWattage(500,3);//метод ElectricDevice - работает
computer.countPrice(300, 350);//метод Computers - работает
