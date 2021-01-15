import { CarRepository } from './../../Mongo/Repository/car.repository';
import { CarDto } from './../../DTO/cars.dto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Car } from 'src/Mongo/Interfaces/car.interface';

@Injectable()
export class CarsService {

    constructor(
        private readonly carRepository: CarRepository
    ){}

    async getAllCars(): Promise<Car[]> {
        const allCars = await this.carRepository.getAllCars();
        if(!allCars.length)
            throw new BadRequestException('There are no cars registered yet');
        else
            return allCars;
    }

    async getCarById(carID: string) : Promise<Car> {
        try{
            return await this.carRepository.findById(carID);
        } catch(e){
            throw new BadRequestException('This car does not exist');
        }
    }

    async deleteCarById(carID: string){

        try{
            const carExists = await this.carRepository.findById(carID);
            
            if(carExists){
                const deletedcar = await this.carRepository.deleteCarById(carID);

                if(deletedcar)
                    return 'This car was deleted successfully';

            } else {
                throw new BadRequestException('This car does not exist');
            }

        } catch(e) {
            throw new BadRequestException('This car does not exist');
        }

    }

    async updateCarById(carID: string, newCar: CarDto) {
        
        try{
            const carExists = await this.carRepository.findById(carID);

            if(carExists){
                const updatedCar = await this.carRepository.updateCarById(carID, newCar);

                if(updatedCar)
                    return 'This car was updated successfully';

            } else {
                throw new BadRequestException('This car does not exist');
            }

        } catch(e) {
            throw new BadRequestException('This car does not exist');
        }

    }

    async saveCar(newCar: CarDto): Promise<Car>{
        return await this.carRepository.saveCar(newCar);
    }

}
