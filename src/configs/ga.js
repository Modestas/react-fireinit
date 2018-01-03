let cfg = process.env;

export default {
  enabled: cfg.REACT_APP_GA_ENABLED === "true",
  id: cfg.REACT_APP_GA_ID
};