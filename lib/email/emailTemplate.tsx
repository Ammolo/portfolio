
import { ContactFormData } from "../types/mail-type";

import {
  Body,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components"

/**
 * 
 * Template used for the sending of emails with resend
 * 
 */
export default function emailTemplate(
{    name,
    last_name,
    email,
    message
}:ContactFormData){
    return(
        <Html>
            <Head>
                <Preview>New contact form submission from {name} {last_name} at {email}</Preview>
            </Head>
            <Body>
                <Section>
                    <Heading>Message</Heading>
                    <Text >{message}</Text>
                </Section>
            </Body>
        </Html>
    )
}