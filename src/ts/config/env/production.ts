import Config from "./config.class";

let config = new Config(
  "productionSessionSecret",
  "mongodb://admin:THVtih7CgW-a@" + process.env.OPENSHIFT_MONGODB_DB_HOST + ":" + process.env.OPENSHIFT_MONGODB_DB_PORT + "/timeline",
  "ejs");
export default config;