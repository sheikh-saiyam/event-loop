import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AlertCircle, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Handle login
  const onSubmit = async (data) => {
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/auth/login", data);
      const { token } = res.data;

      // Save token in localStorage
      localStorage.setItem("token", token);

      // Show toast and redirect to "/"
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      const message =
        err.response?.data?.message || "Something went wrong during login!";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="max-w-sm w-full">
        <CardHeader className="gap-0.5">
          <CardTitle className="text-xl font-semibold">Login</CardTitle>
          <CardDescription className="font-medium">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email */}
            <div className="space-y-2">
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2 relative">
              <Label>Password</Label>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="pr-10"
                {...register("password", { required: "Password is required" })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-8 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <div className="px-4 py-1.5 bg-red-100 flex items-center gap-1 rounded-lg">
                <AlertCircle size={16} className="mt-[1px] text-red-600" />
                <p className="text-sm text-red-600 text-left font-medium">
                  {error}
                </p>
              </div>
            )}

            {/* Submit */}
            <div>
              <Button
                size="sm"
                type="submit"
                className="w-full cursor-pointer"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </Button>
            </div>
          </form>
        </CardContent>

        <div>
          <p className="text-sm text-gray-800 text-center flex justify-center gap-1">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="hover:text-gray-900 font-medium duration-300 underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Login;
