const EmailTemplate = ({
    firstName,
    message,
    email
}: {
    firstName: string;
    message: string;
    email:string;
}) => {
    return (
        <div>
            <p className="text-md">FirstName : {firstName}</p>
            <p className="text-md">Please Contact to: {email}</p>
            <br />
            <br />
            <br />
            <p className="text-sm">{message}</p>
        </div>
    );
}

export default EmailTemplate;