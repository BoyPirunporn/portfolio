'use server';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

export const sendEmail = async (form: HTMLFormElement): Promise<EmailJSResponseStatus> => {
    
    return await emailjs.sendForm(
        process.env.PROJECT_NAME_EMAIL_JS!,
        process.env.TEMPLATE_EMAIL_JS!,
        form.current,
        {
            publicKey: process.env.PUBLIC_KEY_EMAIL_JS,
        }
    );
};