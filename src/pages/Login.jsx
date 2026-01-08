import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen flex flex-col sm:items-center sm:px-0 px-4 justify-center">
      <Link to={"/"} className="text-center text-2xl mb-4">
        Wordsmith
      </Link>
      <div className="mb-8">
        <h2 className="text-center text-2xl font-semibold">Welcome back</h2>
        <p className="text-center">Sign in to your account to continue</p>
      </div>
      <Card className="sm:w-110 p-4">
        <FieldSet className="">
          <FieldGroup>
            <Field>
              <FieldLabel>Email</FieldLabel>
              <Input type="text" placeholder="you@example.com" />
            </Field>
            <Field>
              <FieldLabel>Password</FieldLabel>
              <Input type="password" placeholder="......" />
            </Field>
            <Button>Creat account</Button>
            <p className="text-center text-sm">
              Don't have an account?{" "}
              <Link
                to={"/auth/register"}
                className="text-blue-500 font-semibold"
              >
                Create one
              </Link>
            </p>
          </FieldGroup>
        </FieldSet>
      </Card>
    </div>
  );
};
export default Login;
