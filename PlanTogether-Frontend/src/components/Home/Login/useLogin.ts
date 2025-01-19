import { Form } from "antd";
import { useMutation } from "react-query";
import { LoginRequest, LoginResponse } from "./types";
import axios, { AxiosError } from "axios";

export const useLogin = () => {
  const [form] = Form.useForm();

  const onFinish = (
    data: LoginRequest,
    onSuccess: () => void,
    onError: (error: string) => void,
  ) => {
    login(data, onSuccess, onError);
  };

  const loginRequest = (data: LoginRequest) => {
    const currentURL = window.location.href;
    const ip = new URL(currentURL).hostname;
    return axios
      .post<LoginResponse>(`http://${ip}:8080/api/login`, data)
      .then((r) => r.data);
  };

  const { mutate } = useMutation("loginQuery", loginRequest);

  const login = (
    data: LoginRequest,
    onSuccess: () => void,
    onError: (error: string) => void,
  ) => {
    mutate(data, {
      onSuccess: (res) => {
        console.log(res);

        sessionStorage.setItem("token", res.token);

        onSuccess();

        window.location.replace("/");
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          console.log(error);
          onError(error.message);
        }
      },
    });
  };

  return { form, onFinish };
};
