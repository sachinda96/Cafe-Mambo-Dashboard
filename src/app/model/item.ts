export class Item {

  id:string = "";
  name:string = "";
  price: number = 0;
  imagePath : string = "";
  categoryId : string = "";
  categoryName : string = "";
  description : string = "";
  ingredients : Array<string> = new Array<string>();
  qty : number = 0;
  select: boolean = false;
}
