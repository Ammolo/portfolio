import { Span } from "next/dist/trace";

import { MotionConfig, motion } from "framer-motion";
import { useState } from "react";

/** 
 * Navbar hamburger compoennt using Framer 
 * 
*/
export default function NavbarHamburger() {
    const [open, setOpen] = useState(false);
    return(
        <MotionConfig>
        </MotionConfig>
    )
}