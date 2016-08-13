import Config from "./config.class";

let config = new Config(
  "developmentSessionSecret",
  "mongodb://localhost:27017/timeline",
  "ejs");
export default config;
