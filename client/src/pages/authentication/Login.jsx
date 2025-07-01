import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className={"max-w-sm w-full"}>
        <CardHeader className={"gap-0.5"}>
          <CardTitle className={"text-xl font-semibold"}>Login</CardTitle>
          <CardDescription className={"font-medium"}>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-4">
            {/* Email */}
            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" placeholder="Enter your email" />
            </div>
            {/* Password */}
            <div className="space-y-2 relative">
              <Label>Password</Label>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-8 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Submit */}
            <div>
              <Button type="submit" className={"w-full"} size={"sm"}>
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
