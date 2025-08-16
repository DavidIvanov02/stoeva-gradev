import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import importPlugin from "eslint-plugin-import";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      // Import ordering rules
      "import/order": [
        "error",
        {
          groups: [
            "builtin",        // Node.js built-in modules
            "external",       // External packages
            "internal",       // Internal modules (configured via paths)
            "parent",         // Parent directories
            "sibling",        // Sibling files
            "index",          // Index files
            "type",           // Type imports
          ],
          pathGroups: [
            {
              pattern: "react",
              group: "external",
              position: "before",
            },
            {
              pattern: "next/**",
              group: "external",
              position: "before",
            },
            {
              pattern: "@/**",
              group: "internal",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["react", "next"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      // Additional import rules
      "import/first": "error",                    // Ensure imports come first
      "import/newline-after-import": "error",    // Require newline after imports
      "import/no-duplicates": "error",           // Prevent duplicate imports
      "import/no-unresolved": "off",             // Turn off as Next.js handles this
      "import/no-relative-packages": "error",    // Prevent relative imports of packages
      "import/no-relative-parent-imports": "error", // Prevent relative imports from parent directories
      // Custom rule to prevent all relative imports (forces absolute paths)
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["../*", "./*"],
              message: "Use absolute imports instead of relative imports. Use '@/' prefix for internal modules."
            }
          ]
        }
      ],
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
    },
  },
];

export default eslintConfig;
