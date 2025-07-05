 /** Root Layout for the webpage */

 /** Navbar and Footer Import from global components */
import Navbar from "../components/navbar"
import Footer from "../components/footer"

/** Global Tailwind file */
import "./globals.css";

/** Import metadata and fonts */
import type { Metadata } from "next";

/** Theme Provider */
import { ThemeProvider } from "../components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";

/** Title for this Layout */
export const metadata: Metadata = {
  title: "Ammolos Corner",
  description: "Portofolio website created by Ammolo",
};

/** Layout of the root directory for my webpage */
export default function RootLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`antialiased`}
      >
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div id="main" className="h-screen">
            <div className="min-h-screen flex flex-col">
              <Navbar/>
                {/* Content Div */}
                <div className="grow flex justify-center pl-6 pr-6 pt-4 mb-8 bg-gradient-to-b from-muted/30 to-background">
                  {children}
                </div>
              <Footer/>
            </div>
          </div>     
        </ThemeProvider>
        <Toaster/>
      </body>
    </html>
  
);
}
