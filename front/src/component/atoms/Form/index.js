import {Form as AntdForm } from "antd";

export const Form = (props) => <AntdForm {...props} />
export const useForm = () => Form.useForm();