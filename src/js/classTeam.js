// Создайте класс Team с методами add, addAll и toArray
// Метод add должен добавлять выбранного персонажа в команду (объект класса Character). 
// При этом такой объект уже существует в команде - дублирования происходить не должно, должна генерироваться ошибка.
// Метод addAll должен иметь возможность добавлять произвольное количество персонажей (используйте rest-parameters) в команду. 
// При этом задвоения быть не должно, ошибка генерироваться не должна.
// Метод toArray должен производить конвертацию Set в массив.
export class Team {
    constructor() {
        this.members = new Set();  //участники
    }

    add(member) {
        if (this.members.has(member)) {
			throw new Error(`Ошибка, такой объект уже существует в команде!`)
		} else {
            this.members.add(member);
        }
    }

    addAll(...members) {
        for (let element of members) {
            this.members.add(element);
        }
    }

    toArray() {
        return Array.from(this.members);
    }
}