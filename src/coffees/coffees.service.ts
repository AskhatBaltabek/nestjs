import {Injectable, NotFoundException} from '@nestjs/common';
import {Coffee} from "./entities/coffee.entity";

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id: 1,
            name: 'StarBucks',
            brand: 'New Coffee Brand',
            flavors: ['chocolate', 'vanilla'],
        },
    ];

    findAll() {
        return this.coffees
    }

    findOne(id: string) {
        const coffee = this.coffees.find(i => i.id === +id)
        if(!coffee) {
            throw new NotFoundException(`Coffee #${id} not found`)
        }
    }

    create(createCoffeeDto: any) {
        this.coffees.push(createCoffeeDto)
        return createCoffeeDto
    }

    // update(id: string, updateCoffeeDto: any) {
    //     const existingCoffee = this.findOne(id)
    // }

    remove(id: string) {
        const coffeeIndex = this.coffees.findIndex(i => i.id === +id)
        if(coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1)
        }
    }
}
// {
//     "name":"New Coffee Name",
//     "brand":"New Brand"
//     "flavors": ["caramel"],
//     "isEnabled":true
// }