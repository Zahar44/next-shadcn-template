import { Template, waitForPort } from "e2b";

const REPO = "https://github.com/Zahar44/next-shadcn-template.git";

export const template = Template()
  .fromNodeImage("20-slim")
  .aptInstall("curl")
  .aptInstall("git")
  .skipCache()
  .runCmd(`git clone ${REPO} /tmp/repo && cp -a /tmp/repo/. /home/user/ && rm -rf /tmp/repo`)
  .setWorkdir("/home/user")
  .runCmd("npm install")
  .setStartCmd("npm run dev", waitForPort(3000));
