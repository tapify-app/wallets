import { NextApiResponse } from "next"
import PassGenerator from "passgenerator-js"

const passGenerator = new PassGenerator({
  appleWWDRCA: "D:/wallets/app/src/lib/pass/AppleWWDRCA.cer",
  signCert: "D:/wallets/app/src/lib/pass/passmaker.p12",
  password: "test",
})

export async function POST(req: Request, res: NextApiResponse) {
  const pass = passGenerator.createPass()

  pass.add("icon.png", "D:/wallets/app/src/lib/pass/assests/icon.png")
  pass.add("icon@2x.png", "D:/wallets/app/src/lib/pass/assests/icon@2x.png")
  pass.add("logo.png", "D:/wallets/app/src/lib/pass/assests/logo.png")
  pass.add("logo@2x.png", "D:/wallets/app/src/lib/pass/assests/icon@2x.png")
  pass.add("pass.json", "D:/wallets/app/src/lib/pass/pass.json")
  pass.add("strip.png", "D:/wallets/app/src/lib/pass/assests/strip.png")
  pass.add("strip@2x.png", "D:/wallets/app/src/lib/pass/assests/strip@2x.png")

  const pkpass = pass.generate()

  res.setHeader("Content-Type", "application/vnd.apple.pkpass")
  res.setHeader("Content-Disposition", "attachment; filename=pass.pkpass")
  res.send(pkpass)
}
