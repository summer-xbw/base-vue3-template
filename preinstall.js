console.log("执行了");
if (!/pnpm/.test(process.env.npm_execpath || "")) {
  console.warn(
    `\u001b[33m This repository requires using pnpm as the package manager for scripts to work properly.\u001b[39m\n`
  );
  process.exit(1);
}
