import { Resend } from 'resend';

import { MailPayload } from '@/lib/types/mail-type';
import { NextApiRequest } from 'next';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * 
 * Simple Email API endpoint using resend
 * Currently just used to send emails to myself
 * 
 */
export async function POST(req: Request) {
    
    const body = await req.json();
    const payload: MailPayload = body;

    console.log(payload.subject)
    console.log(payload.message)
    console.log(payload.reciever)

    try {
        const { data, error } = await resend.emails.send({
            from: "Ammolo<ammolo@mail.ammolo.dev>",
            to: payload.reciever,
            subject: payload.subject,
            text: payload.message,
        });
            
        if (error) {
        return Response.json({ error }, { status: 500 });
        }

        return Response.json({ data });

    } catch (error){
        return Response.json({ error }, { status: 500})            
    }
}

