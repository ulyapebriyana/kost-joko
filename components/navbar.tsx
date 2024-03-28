import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { auth } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import logo from "@/public/images/logo.png";
import Image from "next/image";

const Navbar = async () => {
  const { userId } = auth();
  const isAdmin = userId === process.env.ADMIN_ID;

  return (
    <nav className="w-full h-[10vh] border-b-2 flex items-center">
      <div className="flex justify-between items-center w-full container">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="kostmbagdjoko.png"
            height={60}
            width={80}
            priority
          />
        </Link>
        {userId ? (
          <div className="flex justify-center items-center gap-4">
            {isAdmin && (
              <Link
                href={"/dashboard"}
                className={buttonVariants({ variant: "destructive" })}
              >
                Admin Dashboard
              </Link>
            )}
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <div className="flex justify-center items-center gap-4">
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
