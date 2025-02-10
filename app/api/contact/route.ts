import EmailTemplate from '@/lib/email_templates/EmailTemplate';
import { Resend } from 'resend'

export type Email = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}
const resend = new Resend(process.env.RESEND_PRIVATE_KEY)
const to = process.env.MY_EMAIL ?? "pirunporn.aia@gmail.com";
export const POST = async (request: Request) => {
    const json = await request.json() as Email;
    await resend.domains.create({ name: 'example.com' });
    try {
        const { data, error } = await resend.emails.send({
            from: "portfolio@example.com",
            replyTo: json.email,
            to: to,
            subject: "Say hi!!",
            react: EmailTemplate({
                firstName: json.firstName,
                email: json.email,
                message: json.message
            }) as React.ReactElement
        });

        console.log({ data, error })
        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json({ data });
    } catch (error) {
        console.log(error);
        return Response.json({ error: "Internal server error please contact to admin" }, { status: 500 })
    }
}