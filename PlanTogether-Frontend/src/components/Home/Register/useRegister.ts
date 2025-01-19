import { Form } from "antd";
import { useMutation } from "react-query";
import { RegisterRequest, RegisterResponse } from "./types";
import axios, { AxiosError } from "axios";

export const useRegister = () => {
  const [form] = Form.useForm();

  const onFinish = (
    data: RegisterRequest,
    onSuccess: () => void,
    onError: (error: string) => void,
  ) => {
    register(data, onSuccess, onError);
  };

  const registerRequest = (data: RegisterRequest) => {
    const currentURL = window.location.href;
    const ip = new URL(currentURL).hostname;
    return axios
      .post<RegisterResponse>(`http://${ip}:8080/api/register`, data)
      .then((r) => r.data);
  };

  const { mutate } = useMutation("registerQuery", registerRequest);

  const register = (
    data: RegisterRequest,
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
