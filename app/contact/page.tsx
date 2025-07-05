'use client'

/**
 * 
 * Contact me page
 * 
 */

import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { Label } from "@/components/ui/label"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { resendEmail } from "@/lib/email/email"

import { Send } from "lucide-react"
import { toast } from "sonner"
import { useState } from "react"

export default function Page() {     
    const [name, setName] = useState("")
    const [last_name, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleContact = async(e: React.FormEvent) => {
        e.preventDefault()
        
        /** Cheks if the user actually filled in the fields */
        if (!name || !last_name || !email || !message) {
            toast("Please fill out all fields before submitting.", {
                style: {
                    background: 'red',
                },
            });

            return;
        }
        
        try {

            await resendEmail({
                name: name,
                last_name: last_name,
                reply_to: email,
                reciever: '',
                subject: 'Contact Me Email',
                message: message,
            });

            toast("Message, sent successfully.")
        } catch (err){
            
            let errMsg = "Something Went Wrong Please Try Again";
            
            if (err instanceof Error){
                errMsg = err.message;
            }
            
            /** Setting error message if is any, if not generic message */
            toast(errMsg, {
                style: {
                    background: 'red',
                },
            });
        }
    }
    
    return (
        <div className="max-w-xl items-center flex justify-center ">
            <Card>
                <CardHeader>
                    <CardTitle >
                        Get In Touch
                    </CardTitle>
                    <CardDescription>Fill out the form below to reach out to me, and I&lsquo;ll get back to you as soon as possible.</CardDescription>
                </CardHeader>

                <CardContent>
                    <form className="space-y-4" onSubmit={handleContact}>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-3">
                                <Label >First Name</Label>
                                <Input name="name" onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="grid gap-3">
                                <Label>Last Name</Label>
                                <Input name="lastname " onChange={(e) => setLastName(e.target.value)}/>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <Label>Email*</Label>
                            <Input placeholder="example@email.com" onChange={(e) => setEmail(e.target.value)}></Input>
                        </div>

                        <div className="space-y-4">
                            <Label htmlFor="message">Message*</Label>
                            <Textarea name="message" className="min-h-42" placeholder="Type whats on your mind..." onChange={(e) => setMessage(e.target.value)}></Textarea>
                        </div>
                            
                        <Button type="submit" size="lg" className="w-full">
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                        </Button>

                    </form>
                </CardContent>
            </Card>
        </div>
    )
  }