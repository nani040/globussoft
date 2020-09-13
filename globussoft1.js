// First Problem
let jungle = {
    tiger : [],
    monkey : [],
    snake : [],
    food : ["meat", "fish", "bugs", "grain"]
}

class Animals{
    constructor(specieName, name, sound, eat, sleep, energy){
        this.specieName = specieName
        this.name = name
        this.sound = sound
        this.eat = eat
        this.sleep = sleep
        this.energy = energy

        jungle[specieName].push({name: this.name, sound: this.sound, eat: this.eat, sleep: this.sleep, energy: this.energy})
    }
    things(){
        return {sound: this.sound, eat: this.eat, sleep: this.sleep}
    }
    name(){
        return this.specieName.toUpperCase()
    }
    getCount(){
        return jungle[this.specieName].length
    }
    energyLevelChanges(){
        jungle[this.specieName].map(x => {
            if(x.name == this.name){
                x.specieName == 'monkey' ? x.sound -= 4 : x.sound -= 3
                x.specieName == 'monkey' ? x.eat += 2 : x.eat += 5
                x.specieName == 'tiger'? x.sleep += 5 : x.sleep += 10
                x.energy -= 1
            }
        })
        return jungle[this.specieName]
    }
    monkeyPlay(){
        let resp = "only monkey can paly"
        jungle[this.specieName].map(x => {
            if(this.specieName == "monkey" && this.name == x.name){
                if(x.energy > 8){
                    x.energy -= 8
                    resp = "Monkey is playing"
                }else{
                    resp = "Monkey is too tired"
                }
            }
        })
        return resp
    }
    soundOff(){
        let soundVal = 0
        jungle[this.specieName].map(x => {
            if(x.energy === 0){
                soundVal++
            }
        })
        if(soundVal == jungle[this.specieName].length){
            return "Sound off"
        }
        return "some animals has energy"
    }
    eatFood(){
        let finalObj = {}
        jungle.food.forEach(element => {
            if(this.specieName == "tiger" && element == "grain"){
                finalObj[element] = "cant eat grain because of its sensitive digestive systems"
            }else{
                finalObj[element] = "ate"
            }       
        });
        return finalObj
    }
}

let tiger = new Animals("tiger", "tiger1", 25, 100 ,15, 10)
let tiger2 = new Animals("tiger",'tiger2', 1,2,3, 20)
let tiger3 = new Animals('tiger','tiger3', 20,25,32, 30)
let monkey = new Animals('monkey', 'monkey1', 15,25,38, 0)
let snake = new Animals('snake', 'snake1', 20,35,40, 50)

console.log("Total no.of tigers: ",tiger2.getCount());
console.log("Total no.of monkeys: ",monkey.getCount());
console.log("monkeyPlay monkeys: ",monkey.monkeyPlay());
console.log("monkeys soundoff: ",monkey.soundOff());
console.log("monkeys energyLevelChanges: ",monkey.energyLevelChanges());
console.log("food tigers: ",tiger.eatFood());