import AppleQr from "@/components/apple-qr"
import GoogleQr from "@/components/google-qr"

export default function Page() {
  return (
    <main className=" container max-w-screen-xl p-6 space-y-6">
      <div className="flex w-full gap-4">
        <AppleQr />
        <GoogleQr />
      </div>
    </main>
  )
}
