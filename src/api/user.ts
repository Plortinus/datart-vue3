import { http } from "@/utils/http";

/**
 * {
    "data": {
        "avatar": null,
        "description": null,
        "email": "test@datart.com",
        "id": "702e7ec52dbf48848180e93673cf20c7",
        "name": "datart",
        "orgOwner": false,
        "username": "demo"
    },
    "errCode": 0,
    "exception": null,
    "message": null,
    "pageInfo": null,
    "success": true,
    "warnings": null
}
 */
export type UserResult = {
  success: boolean;
  data: {
    /** 用户头像 */
    avatar: string;
    /** 用户描述 */
    description: string;
    /** 用户邮箱 */
    email: string;
    /** 用户id */
    id: string;
    /** 用户名 */
    name: string;
    /** 是否是组织拥有者 */
    orgOwner: boolean;
    /** 用户名 */
    username: string;
  };
  errCode: number;
  exception: null;
  message: string;
  pageInfo: {
    countTotal: boolean;
    pageNo: number;
    pageSize: number;
    total: number;
  };
  warnings: [string];
};

export type RefreshTokenResult = {
  success: boolean;
  data: {
    /** `token` */
    accessToken: string;
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string;
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date;
  };
};

/** 登录 */
export const getLogin = (data?: object) => {
  return http.request<UserResult>("post", "/api/v1/users/login", { data });
};

/** 刷新token */
export const refreshTokenApi = (data?: object) => {
  return http.request<RefreshTokenResult>("post", "/refreshToken", { data });
};
