import PassSigner from "passsigner-js"
import crypto from "crypto"
import fs from "fs"

export async function POST(req: Request) {
  function getFileSHA1(filePath: string): string {
    const shasum = crypto.createHash("sha1")
    shasum.update(fs.readFileSync(filePath))
    return shasum.digest("hex")
  }

  const manifest: { [key: string]: string } = {
    "icon.png": getFileSHA1("path/to/your/icon.png"),
    "icon@2x.png": getFileSHA1("path/to/your/icon@2x.png"),
    "logo.png": getFileSHA1("path/to/your/logo.png"),
    "logo@2x.png": getFileSHA1("path/to/your/logo@2x.png"),
    "pass.json": getFileSHA1("path/to/your/pass.json"),
  }

  const passSigner = new PassSigner({
    appleWWDRCA: "D:/wallets/app/src/lib/pass/AppleWWDRCA.cer",
    signCert: "D:/wallets/app/src/lib/pass/passmaker.p12",
    password: "test",
  })

  const pkpassBuffer = passSigner.sign(JSON.stringify(manifest))
  fs.writeFileSync("wallet/pass.pkpass", pkpassBuffer)
}
