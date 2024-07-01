import sgMail, { MailDataRequired } from "@sendgrid/mail";

type Props = {
  to: string,
  templateName: string,
  dynamicTemplateData: Record<string, string>;
}

export const sendEmail = async ({ 
  to, 
  templateName, 
  dynamicTemplateData
}: Props) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

  const msg = {
    to,
    from: {
      email: "noreply@gritdesarrollos.com",
      name: "Grit Desarrollos"
    },
    templateId: templates.ContactSubmission,
    dynamicTemplateData
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email");
  }
}


export const subscriptionNewsletter = async ({ 
  to, 
  templateName, 
  dynamicTemplateData
}: Props) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

  const msg = {
    to,
    from: {
      email: "noreply@gritdesarrollos.com",
      name: "Grit Desarrollos"
    },
    templateId: templates.Newsletter,
    dynamicTemplateData
  };

  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email");
  }
}


const templates = {
  ContactSubmission: "d-119853bc64474dc8874876197e161047",
  Newsletter: "d-c00896a650a9421fb7eaced3e01527a8"
}