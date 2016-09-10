import Config from "./config.class";

let config = new Config(
    "productionSessionSecret",
    "mongodb://localhost:27017/timeline",
    "ejs");
export default config;
