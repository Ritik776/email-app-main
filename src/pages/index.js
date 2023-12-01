import Image from "next/image";
import { Inter } from "next/font/google";
import { headers } from "../../next.config";
import Form from "@/components/ui/form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const fetchDetails = async () => {
  //   try {
  //     const res = await fetch(
  //       "https://reset.commercengine.dev/api/v1/x2yh61zw4k/storefront/orders/17013255362321262",

  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization:
  //             "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAzOTE2MDcwLCJpYXQiOjE3MDEzMjQwNzAsImp0aSI6IjEyZWQ4YjY4YWU3ZjRiM2M4NzhmMjg1N2E1ODczZDM1IiwidWxpZCI6IjAxSEY5OVcyMFNFUVhQS0FQU1dWUjJQRkJBIiwiZW1haWwiOiJtYW10YUBiZ2wuY29tIiwicGhvbmUiOm51bGwsInVzZXJuYW1lIjoibWFtdGFAYmdsLmNvbSIsImZpcnN0X25hbWUiOiJhbmlsIiwibGFzdF9uYW1lIjoiSyIsInN0b3JlX3VsaWQiOiJ4MnloNjF6dzRrIiwiaXNfbG9nZ2VkX2luIjp0cnVlfQ.IIP6jg4k0hFLxbvL-F9RpIozjpJSO5QQAQv8qREHO4k",
  //         },
  //       }
  //     );
  //   } catch (error) {}
  // };
  // fetchDetails();
  return (
    <main>
      <Form />
    </main>
  );
}
