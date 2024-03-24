import { SignInButton } from "@/components/buttons";
import LoginForm from "@/components/login-form";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const SignIn = async () => {
  const session = await auth();
  if (session) {
    return redirect("/");
  }
  return (
    <section className="flex items-center justify-center w-full h-[90vh]">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter>
          <SignInButton />
        </CardFooter>
      </Card>
    </section>
  );
};

export default SignIn;
