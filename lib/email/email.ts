'use server'

import { MailPayload } from "../types/mail-type";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * 
 * Sends an actual email using the Resend API
 * 
 */
export async function resendEmail(payload: MailPayload){
    
    console.log(payload.subject)
    console.log(payload.message)
    console.log(payload.reciever)

    const { data, error } = await resend.emails.send({
            from: "Ammolo<ammolo@mail.ammolo.dev>",
            to: payload.reciever,
            subject: payload.subject,
            text: payload.message,
        });
}