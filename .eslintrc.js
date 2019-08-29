module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  "extends": [
    "plugin:vue/essential",
    "@vue/standard"
  ],
  //  indent: [0, 2],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "indent ": [
      "error",
      "2"
    ],
    "linebreak-style": [
      "error",
      "windows"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "no-console": 0,
    "semi": [
      "error",
      "never"
    ]
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  overrides: [{
    files: [
      "**/__tests__/*.{j,t}s?(x)"
    ],
    env: {
      jest: true
    }
  }]
}
