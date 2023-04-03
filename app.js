class Animal {
    #food;
    #sleepTime;

    constructor(food, sleepTime) {
        this.#food = food;
        this.#sleepTime = sleepTime;
    }

    getFood(){
        return this.#food;
    }

    getSleepTime(){
        return this.#sleepTime;
    }

    setFood(food) {
        this.#food = food;
    }

    setSleepTime(sleepTime) {
        this.#sleepTime = sleepTime;
    }

    talk(){
        return 'talking...';
    }
}


class Human extends Animal{
    #computer;
    constructor(computer, food, sleepTime){
        super(food, sleepTime);
        this.#computer = computer;
    }

    getComputer(){
        return this.#computer;
    }
}

class Monkey extends Animal{
    #tree;
    constructor(tree, food, sleepTime){
        super(food, sleepTime);
        this.#tree = tree;
    }

    getTree(){
        return this.#tree;
    }
}

class Man extends Human{
    set(food){
        this.setFood(food);
    }

    set(food, sleepTime){
        this.setFood(food);
        this.setSleepTime(sleepTime);
    }
}

class Women extends Human{
    #lipstick;
    constructor(lipstick, computer, food, sleepTime){
        super(computer, food, sleepTime);
        this.#lipstick = lipstick;
    }

    getLipstick(){
        return this.#lipstick;
    }

    setLipstick(lipstick){
        this.#lipstick = lipstick;
    }

    talk(){
        return 'screaming...';
    }
}

const man = new Man('i5','noodles', 10);
console.log('human ', man.talk())
const monkey = new Monkey('apple tree','banana', 8);
console.log('monkey ', monkey.talk())

const women1 = new Women('red', 'i7', 'salad', 8);
console.log('women ', women1.talk())
