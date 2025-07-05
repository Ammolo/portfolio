
/**
 * 
 * TS type for the mail payload for the mailing API
 * 
 */
export type MailPayload = {
    name: string;
    last_name: string;
    reciever: string;
    subject: string;
    reply_to: string;
    message: string;
}

export interface ContactFormData {
    name: string;
    last_name: string;
    email: string;
    message: string;
}