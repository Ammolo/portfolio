'use server'

import { mail_payload } from "../const";
import { MailPayload } from "../types/mail-type";
import { Resend } from "resend";


/**
 * 
 * Sends an actual email using the Resend API
 * 
 * TODO: Implement error handling
 * regex email verification
 * form submission type
 * 
*/
export async function resendEmail(payload: MailPayload){
    
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    /** TODO: find a beter way for this... */
    mail_payload.name = payload.name;
    mail_payload.last_name = payload.last_name;
    mail_payload.subject = payload.subject;
    mail_payload.message = payload.message;
    mail_payload.reply_to = payload.reply_to;

    const { data, error } = await resend.emails.send({
            from: "Ammolo<ammolo@mail.ammolo.dev>",
            to: mail_payload.reciever,
            replyTo: payload.reply_to,
            subject: mail_payload.subject,
            text: mail_payload.message,
    });

    if(error){
        console.error("Failed To Send Email:", data)
        throw new Error("Unexpected Response")
    }

    console.log("Email Was Sent Successfully,", data?.id)
}

/**
 * 
 * Handle the form form the frontend here?
 * 
 */
// export async function sendFormEmail(data: FormData){
//     const formData = Object.fromEntries(data.entries())
//     // resendEmail()


//     return await resendEmail(mail_payload)
// }