import { defineConfig } from "vitest/config";

export default defineConfig({
    oxc: {
        jsx: {
            runtime: "classic",
            pragma: "React.createElement",
            pragmaFrag: "React.Fragment",
        },
    },
    test: {
        include: ["tests/**/*.test.{ts,tsx}"],
    },
});
