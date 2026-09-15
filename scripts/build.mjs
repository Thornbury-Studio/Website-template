import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { execSync } from "node:child_process";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");
const showcase = join(root, "showcase");

if (existsSync(dist)) {
  rmSync(dist, { recursive: true, force: true });
}
mkdirSync(dist, { recursive: true });

const friendItems = [
  "index.html",
  "contributing.html",
  "css",
  "js",
  "img",
  "templates",
  "CONTRIBUTING.md",
];

for (const item of friendItems) {
  const from = join(root, item);
  if (!existsSync(from)) continue;
  cpSync(from, join(dist, item), { recursive: true });
}

execSync("npm install", { cwd: showcase, stdio: "inherit" });
execSync("npm run build", { cwd: showcase, stdio: "inherit" });
cpSync(join(showcase, "out"), join(dist, "showcase"), { recursive: true });

console.log("Built dist/ with Template Commons + /showcase gallery");
