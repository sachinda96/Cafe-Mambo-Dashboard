import { LoginEntity } from './login';

export interface UserEntity {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  loginEntity: LoginEntity;
}
