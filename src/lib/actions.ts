"use server"

import { db } from "@/db"
import {
  AppleWallet,
  GoogleWallet,
  NewAppleWallet,
  apple_wallet,
  google_wallet,
} from "@/db/schema"
import { eq } from "drizzle-orm"

interface UpdateAppleWalletProps {
  data: NewAppleWallet
}

export async function updateAppleWallet({ data }: UpdateAppleWalletProps) {
  await db
    .update(apple_wallet)
    .set({ ...data })
    .where(eq(apple_wallet.templates_id, data.templates_id!))
}

interface UpdateGoogleWalletProps {
  data: GoogleWallet
}

export async function updateGoogleWallet({ data }: UpdateGoogleWalletProps) {
  await db
    .update(google_wallet)
    .set({ ...data })
    .where(eq(google_wallet.templates_id, data.templates_id!))
}
