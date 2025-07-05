import { MailPayload } from "../types/mail-type";

/**
 * 
 * Sends An Email Using the mailPayload using the exposed endpoint
 * 
 * Wrapper function for sending mails using MailPayload type  
 * 
 * @param Payload - recipient, subject, message
 */
export async function sendEmailAPI(payload: MailPayload){
    await fetch('/api/send', {
        method:'POST',
        
        headers: {
            'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(payload),
    });
}