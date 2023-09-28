import axios, { AxiosError } from "axios";
import { GetServerSidePropsContext } from "next";
import Router from "next/router";

const isServer = () => {
  return typeof window === "undefined";
};

let accessToken = "";
let context = <GetServerSidePropsContext>{};
const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const setAccessToken = (_accessToken: string) => {
  accessToken = _accessToken;
};

export const getAccessToken = () => accessToken;

export const setContext = (_context: GetServerSidePropsContext) => {
  context = _context;
};

export const instanceAxios = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

instanceAxios.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  if (isServer() && context?.req?.cookies) {
    config.headers.Cookie = `gid=${context.req.cookies.gid};`;
  }
  return config;
});

instanceAxios.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error: AxiosError) => {
    // check conditions to refresh token
    if (
      error.response?.status === 401 &&
      !error.response?.config?.url?.includes("auth/refresh") &&
      !error.response?.config?.url?.includes("signin")
    ) {
      return refreshToken(error);
    }
    return Promise.reject(error);
  }
);

let fetchingToken = false;
let subscribers: ((token: string) => any)[] = [];

const onAccessTokenFetched = (token: string) => {
  subscribers.forEach((callback) => callback(token));
  subscribers = [];
};

const addSubscriber = (callback: (token: string) => any) => {
  subscribers.push(callback);
};

const refreshToken = async (oError: AxiosError) => {
  try {
    const { response } = oError;

    // create new Promise to retry original request
    const retryOriginalRequest = new Promise((resolve) => {
      addSubscriber((token: string) => {
        response!.config.headers["Authorization"] = `Bearer ${token}`;
        resolve(axios(response!.config));
      });
    });

    // check whether refreshing token or not
    if (!fetchingToken) {
      fetchingToken = true;

      // refresh token
      const { data } = await instanceAxios.post("/api/v1/auth/refresh");
      // check if this is server or not. We don't wanna save response token on server.
      if (!isServer) {
        setAccessToken(data.accessToken);
      }
      // when new token arrives, retry old requests
      onAccessTokenFetched(data.accessToken);
    }
    return retryOriginalRequest;
  } catch (error) {
    // on error go to login page
    if (!isServer() && !Router.asPath.includes("/login")) {
      Router.push("/login");
    }
    if (isServer()) {
      context.res.setHeader("location", "/login");
      context.res.statusCode = 302;
      context.res.end();
    }
    return Promise.reject(oError);
  } finally {
    fetchingToken = false;
  }
};

/**
 * export const getServerSideProps: GetServerSideProps = async (context) => {
  setContext(context)

  let posts = [];
  try {
    const { data } = await api.get("posts");
    posts = data;
  } catch (error) {
    throw (error)
  }

  return {
    props: {
      posts,
    }
  }
}
https://viblo.asia/p/cung-minh-tao-boilerplate-cho-du-an-nextjs-v12-phan-1-mui-v5-emotion-cache-va-axios-hooks-GyZJZnk2Jjm
 */
