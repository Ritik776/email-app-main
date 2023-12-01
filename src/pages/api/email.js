import AppleReceiptEmail from "@/components/template";
import { promises as fs } from "fs";
import { Resend } from "resend";

const resend = new Resend("re_deCcno5C_2QbwnFW7yXyTvqTdZ3p7if7q");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = JSON.parse(req.body);

    const file = await fs.readFile(
      process.cwd() + "/src/response.json",
      "utf8"
    );
    const {
      content: { order },
    } = JSON.parse(file);

    try {
      const data = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: [email],
        subject: "Hello world",
        react: AppleReceiptEmail({ ...order, email }),
      });

      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }
}
