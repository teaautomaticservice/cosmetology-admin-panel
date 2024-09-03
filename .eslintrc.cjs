module.exports = {
  overrides: [
    {
      files: ["src/typings/api/generated/*"],
      rules: {
        "require-jsdoc": "off"
      }
    }
  ]
}