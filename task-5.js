class ElectricDevice {
    constructor(country) {
        this.typeOfEnergy = "electricity";
        this.country = country;
    }
    isDeviceOn = function(condition) { //  прибор включен или нет
        if (condition === 'off') {
            console.log(`Device is switched on : ${false}`)
        }else{
            console.log(`Device is switched on : ${true}`)}
    } 
    countWattage = function(watt, hour) {console.log(watt * hour)}; //Потребляемая мощность
}
class Lamps extends ElectricDevice {
    constructor(name,britnessInLumen,location,country) {
       super(country);
       super.isDeviceOn;
       super.lifeTime;
       this.name = name;
       this.location = location;
       this.britness = britnessInLumen;
    }
    lifeTime = function(period) {console.log(period)}; // метод Lamps показывает срок службы
}
const deskLamp = new Lamps('deskLamp',68,'onDesk',"China");
console.log(deskLamp);// личные свойства
deskLamp.isDeviceOn('on');//метод ElectricDevice - работает
deskLamp.countWattage(30,5);//метод ElectricDevice - работает
deskLamp.lifeTime("2 years");//метод Lamps - работает
class Computers extends ElectricDevice {
    constructor(name,portable,memory,videoCard,country) {
        super(country);
        super.isDeviceOn;
        super.lifeTime;
        this.name = name,
        this.portable = portable,
        this.memory = memory,
        this.videoCard = videoCard
}
countPrice = (memoryPrice, videoCardPrice) => console.log(`${memoryPrice + videoCardPrice} $`); // метод считает цену
}
let computer = new Computers("computer","stationary","HDD","Radeon HD8750","Germany");
console.log(computer);// личные свойства
computer.isDeviceOn('off');//метод ElectricDevice - работает
computer.countWattage(500,3);//метод ElectricDevice - работает
computer.countPrice(300, 350);//метод Computers - работает
