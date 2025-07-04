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
import { Button } from "../../components/ui/button"

import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"

import { Label } from "@radix-ui/react-dropdown-menu"

export default async function Page() {     
    return (
        <div className="">
            <form 
            className="bg-background p-8 rounded-xl shadow-md space-y-6 m-8"
            action="">
                <div>
                    <Label>Name*</Label>
                    <Input></Input>
                </div>
                
                <div>
                    <Label>Email*</Label>
                    <Input></Input>
                </div>

                <div>
                    <Label>Message*</Label>
                    <Textarea placeholder="Type your message here."></Textarea>
                </div>
                
                <Button type="submit" className="w-full">Submit</Button>
            </form>
        </div>
    )
  }