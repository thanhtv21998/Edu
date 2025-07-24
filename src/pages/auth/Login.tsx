import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        toast({
          title: "Đăng nhập thành công!",
          description: "Chào mừng bạn trở lại.",
        });
        navigate('/');
        // const { token } = await res.json();
        // localStorage.setItem("token", token);
      } else {
        const { message } = await res.json();
        toast({
          title: "Lỗi đăng nhập",
          description: message || "Sai thông tin đăng nhập.",
        });
      }
    } catch (err) {
      toast({
        title: "Lỗi máy chủ",
        description: "Không thể kết nối đến máy chủ.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary/5 py-12 px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="p-6 space-y-5">
          <h2 className="text-2xl font-bold text-center">Đăng nhập</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <Input type="password" name="password" placeholder="Mật khẩu" onChange={handleChange} required />
            <Button type="submit" className="w-full button-primary-gradient">
              Đăng nhập
            </Button>
          </form>

          {/* Links */}
          <div className="flex justify-between text-sm text-muted-foreground pt-2">
            <Link to="/signup" className="hover:underline text-blue-600">
              Chưa có tài khoản?
            </Link>
            <Link to="/forgot-password" className="hover:underline text-blue-600">
              Quên mật khẩu?
            </Link>
          </div>

          <div className="pt-4 text-center">
            <Link to="/" className="text-sm text-gray-600 hover:underline">
              ← Quay lại trang chủ
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
