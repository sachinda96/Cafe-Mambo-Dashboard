export interface ItemReview {
  id: string;
  review: string;
  rate: string;
  level: string;
  status: string;
  createBy: string;
  createDate: any;
  updateBy: string;
  updateDate: any;
}

export class ItemUserReview {
  id: string | null = '';
  review: string = '';
  rate: number = 0;
  userId: string = '';
  itemId: string = '';
  level: string = '';

  constructor() {}
}
