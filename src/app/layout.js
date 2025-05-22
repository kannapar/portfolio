import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "./_SideBar/SideBar";

// Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata
export const metadata = {
  title: "Kavya",
  description: "Personal portfolio and projects showcase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable}
          font-sans antialiased min-h-screen flex
        `}
      >
        <SidebarProvider>
          <AppSidebar className="bg-gradient-to-br from-white via-slate-50 to-white dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A] rounded-3xl" />
          <SidebarInset className={" bg-slate-50"}>
            <div className="flex items-center justify-between p-4 md:p-6">
              <SidebarTrigger className="md:hidden bg-white" />
            </div>
            <main className="prose prose-neutral dark:prose-invert max-w-none px-4 md:px-6 lg:px-8 py-4 flex-1">
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
