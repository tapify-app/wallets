"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import React, { useEffect } from "react"
import QRCode from "react-qr-code"

// @ts-ignore
export default function AppleQr({ id }) {
  const [text, setText] = React.useState("")

  const loadAppleWallet = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/pkpass/create/${id}`
      );
      setText(response?.data?.URL)
    } catch (error) {
      console.log('error', error)
    }
  };

  useEffect(() => {
    loadAppleWallet();
  }, []);

  return (
    <Card className="w-full cursor-pointer">
      <CardHeader>
        <CardTitle>Apple Wallet</CardTitle>
      </CardHeader>
      <CardContent>
        {text && <QRCode value={text} />}
      </CardContent>
    </Card>
  )
}
