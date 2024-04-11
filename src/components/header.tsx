import React from "react"
import { Button } from "./ui/button"

export default function Header() {
  return (
    <header className="flex justify-between items-center px-2">
      <div className="text-2xl font-bold">Templates</div>
      <Button size={"sm"}>Create</Button>
    </header>
  )
}
