const presets = ["@babel/preset-env"];
const plugins = [[
  "@babel/plugin-proposal-class-properties",
  {
    "loose": true
  }
]];

if (process.env["ENV"] === "prod") {
  plugins.push();
}

module.exports = { presets, plugins };
