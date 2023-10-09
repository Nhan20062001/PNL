import { instanceAxios } from '@/config/axios';
import {
  LoginAdminResponse,
  ParamLoginAdmin,
  ResetPasswordModel,
} from './auth.type';

const auth = {
  loginAdmin({
    email,
    password,
  }: ParamLoginAdmin): Promise<LoginAdminResponse> {
    const url = '/auth/login';
    return instanceAxios.post(url, {
      email,
      password,
    });
  },

  resetPasswordByEmail(data: ResetPasswordModel): Promise<LoginAdminResponse> {
    const url = '/auth/reset-password';
    return instanceAxios.patch(url, data);
  },
};

export default auth;
