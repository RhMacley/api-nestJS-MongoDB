import { CarDto } from './../../DTO/cars.dto';
import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from '../Interfaces/car.interface';

@Injectable()
export class CarRepository{

    constructor(
        @InjectModel('car') private readonly carModel: Model<Car>
    ){}

    async getAllCars() : Promise<Car[]>{
        return await this.carModel.find({}, { __v: false }).sort({ name : + 1}).exec();
    }

    async findById(carID: string): Promise<Car>{
        return await this.carModel.findById(carID, { __v : false});
    }

    async deleteCarById(carID: any): Promise<Car>{
        return await this.carModel.findOneAndDelete({ _id : carID});
    }

    async updateCarById(carID: any, newCar: any): Promise<Car>  {
        return await this.carModel.replaceOne({ _id: carID}, newCar);
    }

    async saveCar(newCar: CarDto): Promise<Car>{
        const savedCar = new this.carModel(newCar);
        return await savedCar.save()
    }
}