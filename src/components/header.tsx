"use client";
import { useState } from "react";

import { createTemplate } from "@/lib/actions";
export default function Header() {
  const [templateName, setTemplateName] = useState("");

  const createNewTemplate = async () => {
    await createTemplate({ name: templateName });
    setTemplateName("");
  };
  return (
    <header className="flex justify-between items-center px-2">
      <div className="text-2xl font-bold">Templates</div>
      <input
        type="text"
        placeholder="Template Name"
        value={templateName}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        onChange={(event) => {
          setTemplateName(event.target.value);
        }}

      />{" "}
      <button onClick={createNewTemplate}>Create</button>
    </header>
  );
}
