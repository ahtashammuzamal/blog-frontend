import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, registerSchema } from "@/schemas/authSchemas";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";

const AuthForm = ({ authType }) => {
  const form = useForm({
    resolver: zodResolver(authType === "login" ? loginSchema : registerSchema),
    defaultValues: {
      ...(authType === "register" && { name: "" }),
      email: "",
      password: "",
    },
  });

  const { login, register } = useAuth();

  const navigate = useNavigate();

  const authTitle = authType === "login" ? "Welcome back" : "Create an account";
  const authDescription =
    authType === "login"
      ? "Sign in to your account to continue"
      : "Enter your details to get started";

  const onSubmit = async (data) => {
    try {
      const res =
        authType === "login" ? await login(data) : await register(data);
        console.log(res)
      toast.success(`${res?.data?.message}`);
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
      console.error(error);
    }
  };

  return (
    <Card className="md:w-96 sm:w-4/5 w-full">
      <CardHeader>
        <CardTitle className={"text-center text-2xl font-semibold"}>
          {authTitle}
        </CardTitle>
        <CardDescription className={"text-center text-[16px]"}>
          {authDescription}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {authType === "register" && (
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              {authType === "login"
                ? form.formState.isSubmitting
                  ? "Logging in..."
                  : "Login"
                : form.formState.isSubmitting
                ? " Signing uo..."
                : "Sign up"}
            </Button>
          </form>
        </Form>
        <div className="flex items-center justify-center mt-4 gap-2">
          <p className="text-gray-500">
            {authType === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
          </p>
          <Link to={authType === "login" ? "/auth/register" : "/auth/login"}>
            {authType === "login" ? "Create one" : "Sign in"}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
export default AuthForm;
