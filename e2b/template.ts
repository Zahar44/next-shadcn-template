import { Template, waitForPort } from "e2b";

const REPO = "https://github.com/Xydozhneak/next-shadcn-template";

export const template = Template()
  .fromNodeImage("20-slim")
  .aptInstall("curl")
  .aptInstall("git")
  .runCmd(`git clone ${REPO} /tmp/repo && cp -a /tmp/repo/. /home/user/ && rm -rf /tmp/repo`)
  .setWorkdir("/home/user")
  .runCmd("npm ci")
  .setStartCmd("npx next dev --turbo", waitForPort(3000));
