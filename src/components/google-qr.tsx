"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import React, { useEffect } from "react"
import QRCode from "react-qr-code"

// @ts-ignore
export default function GoogleQr({ id }) {
  const [text, setText] = React.useState("")

  const loadGoogleWallet = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/google-wallet/create/${id}`
      );
      setText(response?.data?.URL)
    } catch (error) {
      console.log('', error)
    }
  };

  useEffect(() => {
    loadGoogleWallet();
  }, []);
  
  return (
    <Card className="w-full cursor-pointer">
      <CardHeader>
        <CardTitle>Google Wallet</CardTitle>
      </CardHeader>
      <CardContent>
       {text && <QRCode value={text} />}
      </CardContent>
    </Card>
  )
}
