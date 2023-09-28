import { LoginAdminResponse, ParamLoginAdmin } from "./auth.type";
import { instanceAxios } from "@/config/axios";

const auth = {
  loginAdmin({
    email,
    password,
  }: ParamLoginAdmin): Promise<LoginAdminResponse> {
    const url = "/auth/login";
    return instanceAxios.post(url, {
      email,
      password,
    });
  },
};

export default auth;
