import {
    Controller,
    Get,
    Post,
    Param,
    Body,
    Patch,
    Delete,
    Query,
    Inject,
    Request,

} from '@nestjs/common';
import { CoffeesService } from "./coffees.service";
import {CreateCoffeeDto} from "./dto/create-coffee.dto";
import {UpdateCoffeeDto} from "./dto/update-coffee.dto";
import {PaginationQueryDto} from "../common/dto/pagination-query.dto";
import {REQUEST} from "@nestjs/core";
import {Public} from "../common/decorators/public.decorators";
import {ParseIntPipe} from "../common/pipes/parse-int.pipe";


@Controller('coffees')
export class CoffeesController {
    constructor(
        private readonly coffeeService: CoffeesService,
        @Inject(REQUEST) private readonly request: Request
    ) {
    }

    @Public()
    @Get()
    async findAll(@Query() paginationQuery: PaginationQueryDto) {
        await new Promise(resolve => setTimeout(resolve, 5000))
        return this.coffeeService.findAll(paginationQuery)
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        console.log(id)
        return this.coffeeService.findOne(''+id)
    }

    @Public()
    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        console.log(createCoffeeDto instanceof CreateCoffeeDto)
        return this.coffeeService.create(createCoffeeDto)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeeService.update(id, updateCoffeeDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeeService.remove(id)
    }
}
