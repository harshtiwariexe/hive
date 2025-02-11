"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo2 from "@/assets/logo.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { useConvexAuth } from "convex/react";
import { SignInButton, SignOutButton, UserButton } from "@clerk/clerk-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productvity
        </p>
        <div className="inline-flex gap-1 items-center">
          {!isAuthenticated && !isLoading && (
            <>
              <SignInButton mode="modal">
                <div className="flex cursor-pointer items-center">
                  <p>Get started for free</p>
                  <ArrowRight className="h-4 w-4 ml-1 inline-flex justify-center items-center" />
                </div>
              </SignInButton>
            </>
          )}
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo2} alt="Logo" height={60} width={60} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="">About</a>
              <a href="">Features</a>
              <a href="">Custmers</a>
              <a href="">Updates</a>
              <a href="">Help</a>
              {!isAuthenticated && !isLoading && (
                <>
                  <SignInButton mode="modal">
                    <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                      Sign In
                    </button>
                  </SignInButton>
                </>
              )}
              {isAuthenticated && !isLoading && (
                <>
                  <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                    <Link href="/main">Enter Hive</Link>
                  </button>

                  <UserButton />
                </>
              )}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
