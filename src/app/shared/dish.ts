import {Comment} from './comment';

export class Dish{
    id!: string;
    name!: string;
    image!: string;
    featured!: boolean;
    label!:string;
    price!: string;
    description!: string;
    category!: string;
    comments!:  Comment[];

}