import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { auth } from "@/lib/auth";
import { SignOutButton } from "./buttons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = async () => {
  const session = await auth();
  const imageAvatar = session?.user?.image as string
  return (
    <nav className="w-full h-[10vh] border-b-2 flex items-center">
      <div className="flex justify-between items-center w-full container">
        <Link href={"/"}>Logo</Link>
        {session ? (
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={imageAvatar} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <SignOutButton />
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link href={"/sign-in"} className={buttonVariants()}>
              Sign In
            </Link>
            <Link
              href={"/sign-up"}
              className={buttonVariants({ variant: "outline" })}
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
