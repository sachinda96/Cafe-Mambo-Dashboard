import { Login } from './login';

export class User {
  id: string = '';
  name: string = '';
  employeeNo: string = '';
  email: string = '';
  address: string = '';
  telNo: string = '';
  role: string = '';
  status: string = '';
  loginEntity: Login = new Login();

  constructor() {}
}
