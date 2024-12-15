import { Form } from "antd";
import { useMutation } from "react-query";
import { RegisterRequest, RegisterResponse } from "./types";
import axiosInstance from "../Axios/AxiosInstance.ts";
import { AxiosError } from "axios";

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
    return axiosInstance
      .post<RegisterResponse>(`/register`, data)
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
