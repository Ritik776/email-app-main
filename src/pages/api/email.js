
import AppleReceiptEmail from "@/emails/receipt";
import { promises as fs } from "fs";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = JSON.parse(req.body);

    // const file = await fs.readFile(
    //   process.cwd() + "/src/response.json",
    //   "utf8"
    // );
    // const {
    //   content: { order}
    // } = JSON.parse(file);

    try {
      const orderRes = await fetch('https://reset.commercengine.dev/api/v1/x2yh61zw4k/storefront/orders/17013394640359297', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.API_KEY}`
        },
      });
      const orderData = await orderRes.json();
      console.log(orderData);
      const { order } = orderData.content;
      const data = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: [email],
        subject: "Hello world",
        react: AppleReceiptEmail({ ...order,  email }),
      });

      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }
}
