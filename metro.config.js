const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);
config.resolver.assetExts.push("db", "sqlite");
module.exports = withNativeWind(config, { input: "./src/styles/global.css" });
