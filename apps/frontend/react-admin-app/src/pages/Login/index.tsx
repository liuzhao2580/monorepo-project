import { Form, Input, Button, Checkbox } from "antd";
import { useNavigate } from "react-router";
import { useI18n } from "@pmm/i18n/react";
import "./index.scss";
import { ROUTE_PATH } from "@/router/RouteConst";

export default function Login() {
  const { t } = useI18n();
  const navigate = useNavigate();

  const onFinish = () => {
    localStorage.setItem("token", "ok");
    navigate(ROUTE_PATH.DASHBOARD);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="h-screen relative">
      <div className="login-bg absolute"></div>
      <div className="flex absolute top-0 left-0 right-0 bottom-0">
        <div className="hidden md:block lg:w-3/5 sm:w-1/2 bg-cover bg-center" />
        <div className="relative flex flex-col justify-center items-center w-full lg:w-2/5 sm:w-full ">
          <div className="bg-white p-8 rounded shadow-md w-full max-w-[360px] mx-4">
            <h2 className="text-2xl mb-6 text-center font-semibold">{t("login.title")}</h2>
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout="vertical"
            >
              <Form.Item
                label={t("login.username")}
                name="username"
                rules={[{ required: true, message: t("login.username_required") }]}
              >
                <Input placeholder={t("login.username_placeholder")} />
              </Form.Item>

              <Form.Item
                label={t("login.password")}
                name="password"
                rules={[{ required: true, message: t("login.password_required") }]}
              >
                <Input.Password placeholder={t("login.password_placeholder")} />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>{t("login.rememberMe")}</Checkbox>
              </Form.Item>

              <Form.Item className="mt-6">
                <Button type="primary" htmlType="submit" block>
                  {t("login.login")}
                </Button>
              </Form.Item>
            </Form>
            <div>
              <div className="flex justify-between items-center mt-4">
                <a href="/register" className="text-sm text-blue-500 hover:underline">
                  {t("login.register")}
                </a>
                <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">
                  {t("login.forgotPassword")}
                </a>
              </div>
              <div className="text-center mt-2">
                <span className="text-sm cursor-pointer">{t("login.switchLang")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
