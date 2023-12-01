"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const Form = () => {
  const ref = useRef(null);

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({ email: ref.current.value }),
      });
    } catch (error) {}
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 space-y-4 flex items-center flex-col">
        <Input ref={ref} />
        <Button variant="secondary" onClick={handleSubmit}>
          Send Email
        </Button>
      </div>
    </div>
  );
};

export default Form;
