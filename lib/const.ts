import { MailPayload } from "./types/mail-type";

/** The id for the Key */
export const KEY_ID = 'demo_key';
export const expiration = 86400;

export const mail_payload: MailPayload = {
    name: '',
    last_name: '',
    reciever: 'ammarmujezinovic@outlook.com',
    message: '',
    reply_to: '',
    subject: 'New Key',
}
