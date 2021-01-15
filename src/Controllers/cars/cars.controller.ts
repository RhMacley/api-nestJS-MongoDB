import { CarsService } from './../../Services/cars/cars.service';
import { CarDto } from './../../DTO/cars.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Car } from 'src/Mongo/Interfaces/car.interface';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carService : CarsService
    ){}

    @Get()
    async getAllCars(): Promise<Car[]> {
        return await this.carService.getAllCars();
    }

    @Get('id/:carID')
    async getCarById(@Param('carID') carID: string): Promise<Car> {
        return await this.carService.getCarById(carID);
    }

    @Post()
    async saveCar(@Body() newCar:CarDto): Promise<Car>{
        return await this.carService.saveCar(newCar);
    }

    @Delete('id/:carID')
    async deleteCarById(@Param('carID') carID: string) {
        return await this.carService.deleteCarById(carID);
    }

    @Patch('id/:carID')
    async updateCar(@Param('carID') carID: string, @Body() newCar: CarDto) {
        return await this.carService.updateCarById(carID, newCar);
    }
}
