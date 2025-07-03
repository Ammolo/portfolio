
/**
 * Need To figure out the best way to route tings and the use of layout what and where
 * 
 * Need to sell myself here, display who i am, what i can do and how i am useful
 * 
 * GOAL
 * - Page needs to be clean
 * - Needs to load fast
 * - Yet look sleek and modern
 * - and stil be simple to navigate
 * - since this is MY space, ammolos corner
 *    - need to enjoy using it myself and brownsing
 * 
 *
 * WHAT DO I NEED ON MY Landing page
 * - Should include some of my photos
 * - Maybe widgets that link to my github
 * - where should i include my github link as well as my linked in profile
 *    - should this be included at the landing page?
 *    - one does not want this to be hidden
 *        - or should i force the user to look trough the webpage to find my github link and linked in?
 * 
 * 
 * 
 /** Root Layout for the webpage */

 /** Navbar and Footer Import from global components */
import Navbar from "./ui/navbar"
import Footer from "./ui/footer"

/** Global Tailwind file */
import "./globals.css";

/** Import metadata and fonts */
import type { Metadata } from "next";

/** Theme Provider */
import { ThemeProvider } from "@/components/ui/theme-provider";

// Title for this Layout
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
          {/* Container for the full screen height */}
          <div id="main" className="h-screen">
            <div className="min-h-screen flex flex-col">
              
              {/* <Navbar/> */}
              <Navbar/>

              <div className="grow flex justify-center">
                {children}
              </div>
            
              {/* <Footer/> */}
              <Footer/>

            </div>
          </div>     
        </ThemeProvider>    
      </body>
    </html>
  
);
}
