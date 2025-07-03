/**
 * 
 * Page to contact me
 * should just be a form
 * with personal information
 * and should be forwarded to my email
 *  - should i create a new email just for this prehaps
 *  - does my domain support anything like this ?
 * 
 * 
 */
import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"


export default async function Page() {     
    return (
        <div className="">
            <form 
            className="bg-background p-8 rounded-xl shadow-md space-y-6 m-8"
            action="">
                
                <div>
                    <label htmlFor="" className="px-1 py-0.5 rounded font-semibold font-[family-name:var(--font-geist-mono)]">Name*</label>
                    <Input></Input>
                </div>
                
                <div>
                    <label htmlFor="" className="px-1 py-0.5 rounded font-semibold font-[family-name:var(--font-geist-mono)]">Email*</label>
                    <Input></Input>
                </div>

                <div>
                    <label htmlFor="" className="px-1 py-0.5 rounded font-semibold font-[family-name:var(--font-geist-mono)]">Message*</label>
                    <Textarea placeholder="Type your message here."></Textarea>
                </div>
                
                <Button type="submit" className="w-full">Submit</Button>
            </form>
        </div>
    )
  }