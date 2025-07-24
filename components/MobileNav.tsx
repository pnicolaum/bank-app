'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
// import Footer from "./Footer"

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-fulll max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="w-[264px] max-w-[80vw] border-none bg-white">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <Link href="/" className="nav-mobile-top" >
            <Image 
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Horizon logo"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                  {sidebarLinks.map((item) => {
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

                return (
                  <SheetClose asChild key={item.route} >
                    <Link href={item.route} key={item.label}
                      // className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })}
                      className="mobilenav-sheet_close w-full"
                        style={isActive ? { background: '#0179FE' } : undefined}
                    >
                        <Image 
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                          className={cn({
                            'brightness-[3] invert-0': isActive
                          })}
                        />
                      <p 
                        className={cn("text-16 font-semibold text-black-2", { "text-white": isActive })}
                        style={isActive ? { color: '#FFFFFF' } : undefined}
                      >
                        {item.label}
                      </p>
                    </Link>
                  </SheetClose>
                )
              })}

              USER
              </nav>
            </SheetClose>

            {/* <Footer user={user} type="mobile" /> */}
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav