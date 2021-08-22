import {Item} from "./item";

export class Package {

  id:string = "";
  name:string = "";
  description:string = "";
  price: string = "";
  imagePath: string = "";
  itemDtoList:Array<Item> = new Array<Item>();
  itemIdList:Array<String> = new Array();
}
