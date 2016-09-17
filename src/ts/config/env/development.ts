import Config from "./config.class";
let dbHost = process.env.DB_HOST || "localhost";
let config = new Config(
  "developmentSessionSecret",
  "mongodb://" + dbHost + ":27017/timeline",
  "ejs");
export default config;
