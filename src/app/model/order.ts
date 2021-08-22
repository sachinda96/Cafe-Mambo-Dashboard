import {Customer} from "./customer";
import {Item} from "./item";
import {Delivery} from "./delivery";
import {Payment} from "./payment";

export class Order {

  id!: string;
  total!: number ;
  customerDto : Customer = new Customer();
  orderDate : Date =  new Date();
  itemDtoList : Array<Item> = new Array<Item>();
  deliveryDto : Delivery = new Delivery();
  paymentDto : Payment = new Payment();
}
