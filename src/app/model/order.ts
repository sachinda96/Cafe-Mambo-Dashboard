import { Delivery } from './delivery';
import { Payment } from './payment';
import { CheckoutItem } from './checkout-item';
import { Customer } from './customer';
import { Item } from './item';

// export interface Order {
//   id: string;
//   orderDate: any;
//   total: number;
//   status: string;
//   createBy: string;
//   createDate: any;
//   updateBy: string;
//   updateDate: any;
//   paymentEntity: Payment;
//   userEntity: UserEntity;
// }

//user-key

export class Order {
  id: string = '';
  orderDate: Date = new Date();
  userId: string | null = '';
  paymentDto: Payment = new Payment();
  deliveryDto: Delivery = new Delivery();
  itemDtoList: Array<CheckoutItem> = new Array<CheckoutItem>();

  constructor() {}
}

export class OrderDTO {
  id: string = '';
  total: number = 0.0;
  customerDto: Customer = new Customer();
  orderDate: Date = new Date();
  paymentDto: Payment = new Payment();
  deliveryDto: Delivery = new Delivery();
  itemDtoList: Array<Item> = new Array<Item>();
  //i need the count as well
}
