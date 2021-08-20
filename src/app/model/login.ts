export interface LoginEntity {
  id: string;
  email: string;
  password: string;
  locked: string;
  status: string;
  createBy: string;
  createDate: any;
  updateBy: string;
  updateDate: any;
}

export interface LoginDto {
  email: string;
  password: string;
}
