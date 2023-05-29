class Appliances {
    constructor(name) {
        this.name = name;
    }
}

Appliances.prototype.AppliancesConnected = function () {
    let connect = false
    if (this.connected) {
        connect = true;
        } else {
        connect = false;
        }
       return (connect);
       }

class Appliance extends Appliances {
    constructor (name, power, connected, powerCheck){
    super(name);
    this.power = power;
    this.connected = connected;
    this.powerCheck = function(){
        console.log(power)
        }
    }
}

Appliance.prototype = new Appliances();

let powerJustConnected = function (){
    let sum = 0;
    for(let val of allAppliances){
    if (val.AppliancesConnected()){
        sum += val.power;
    } else{
        sum;
     }
    }
    return sum;
}

const lamp = new Appliance(name = "lamp", power = 60, connected = true);
const computer = new Appliance(name = "computer", power = 600, connected = true);
let allAppliances = [lamp, computer];

console.log(`Лампа подключена к сети? -> ${lamp.AppliancesConnected()}`);
console.log(`Компьютер подключен к сети? -> ${computer.AppliancesConnected()}`);
console.log(`Общая мощность приборов подкюченных к сети составляет: ${powerJustConnected(allAppliances)} Вт`);
lamp.powerCheck();
computer.powerCheck();
