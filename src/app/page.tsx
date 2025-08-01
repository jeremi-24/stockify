"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Sparkles } from "lucide-react";

function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.21621 3.51351C6.21621 2.2158 7.26551 1.1665 8.56322 1.1665H18.8335C20.1312 1.1665 21.1805 2.2158 21.1805 3.51351V13.7838C21.1805 15.0815 20.1312 16.1308 18.8335 16.1308H8.56322C7.26551 16.1308 6.21621 15.0815 6.21621 13.7838V3.51351Z"
        className="fill-red-500"
      />
      <path
        d="M2.81944 7.82021C2.81944 6.5225 3.86874 5.47321 5.16645 5.47321H15.4367C16.7344 5.47321 17.7837 6.5225 17.7837 7.82021V18.0905C17.7837 19.3882 16.7344 20.4375 15.4367 20.4375H5.16645C3.86874 20.4375 2.81944 19.3882 2.81944 18.0905V7.82021Z"
        className="fill-red-500"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-background text-foreground">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#3e3e3e_1px,transparent_1px)] [background-size:16px_16px]"></div>
       <div className="absolute inset-0 -z-20 h-full w-full bg-gradient-to-br from-background via-indigo-950/40 to-background"></div>

      <header className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2">
            <LogoIcon className="h-6 w-6" />
            <span className="text-xl font-bold">Superlist</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground outline-none transition-colors hover:text-foreground">
                Features <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Feature 1</DropdownMenuItem>
                <DropdownMenuItem>Feature 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground outline-none transition-colors hover:text-foreground">
                Use Cases <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>For Teams</DropdownMenuItem>
                <DropdownMenuItem>For Individuals</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Updates
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Blog
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground outline-none transition-colors hover:text-foreground">
                Download <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>macOS</DropdownMenuItem>
                <DropdownMenuItem>Windows</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost">Sign in</Button>
          <Button className="rounded-full bg-red-500 px-6 font-semibold text-white transition-colors hover:bg-red-600">
            Sign up
          </Button>
        </div>
      </header>

      <main className="container mx-auto flex flex-col items-center justify-center px-4 py-24 text-center md:px-6 md:py-32">
        <div className="mb-8 flex items-center gap-2 rounded-full bg-secondary/70 px-4 py-1.5 text-sm font-medium text-muted-foreground backdrop-blur-sm">
          <span className="rounded-full bg-primary/20 p-1 text-primary">
            <Sparkles className="h-4 w-4 fill-primary" />
          </span>
          <span className="text-foreground">NEW</span> Introducing AI Meeting Notes in Superlist
        </div>

        <h1 className="text-5xl font-bold tracking-tighter md:text-7xl">
          Stay on top <br />
          <span className="bg-gradient-to-b from-red-500 to-orange-500 bg-clip-text text-transparent">
            of everything
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Superlist generates your meeting notes, tracks follow-ups, and lets
          you manage all your tasks and notes in one place.
        </p>

        <Button size="lg" className="mt-8 rounded-full bg-red-500 px-8 text-lg font-semibold text-white transition-colors hover:bg-red-600">
          Sign up for free
        </Button>
      </main>
    </div>
  );
}
