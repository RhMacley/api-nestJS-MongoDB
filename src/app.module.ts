import { CarSchema } from './Mongo/Schemas/car.schema';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CarsController } from './Controllers/cars/cars.controller';
import { CarsService } from './Services/cars/cars.service';
import { CarRepository } from './Mongo/Repository/car.repository';
import { Mongoose } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/cars'),
    MongooseModule.forFeature([
      { name: 'car', schema: CarSchema}
    ])
],
  controllers: [CarsController],
  providers: [
    CarsService,
    CarRepository,
  ],
})
export class AppModule { }
