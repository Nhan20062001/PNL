import { AxiosResponse } from "axios";

export type ParamLoginAdmin = {
  email: string;
  password: string;
};

export type LoginAdminResponse = AxiosResponse<{
  data: {
    token: {
      expiresIn: number;
      accessToken: string;
      refreshToken: string;
    };
    user: {
      id: string;
      createdAt: string;
      updatedAt: string;
      role: string;
      email: string;
      firstName: string | null;
      lastName: string | null;
      avatar: string;
      deletedAt: string | null;
    };
  };
}>;
