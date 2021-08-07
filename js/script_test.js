'use strict';
class User {
    constructor(name, age,) {
        this.name = name;
        this.age = age;
    }

    #surname = 'Oliynyk';

    say = () => {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this.age}`);
    }

    get surname() {
        return this.#surname;
    }

    set surname(surname) {
        this.#surname = surname;
    }

}

const vova = new User('Volodymyr', 33);
const ivan = new User('Ivan', 23);
vova.surname = 'Petryk';
vova.say();
ivan.say();
