import { getEnv } from "@utils/get-env.util";

const appConfig = () => ({
  PORT: getEnv("PORT", "5000"),
  NODE_ENV: getEnv("NODE_ENV", "development"),
  BASE_PATH: getEnv("BASE_PATH", "/v1/api"),

  // Database
  MONGO_URI: getEnv("MONGO_URI", ""),
  MONGO_USER_NAME: getEnv("MONGO_USER_NAME", ""),
  MONGO_USER_PASSWORD: getEnv("MONGO_USER_PASSWORD", ""),

  // Session
  SESSION_SECRET: getEnv("SESSION_SECRET", ""),
  SESSION_MAX_AGE: getEnv("SESSION_MAX_AGE", ""),
  CLIENT_URL: getEnv("CLIENT_URL", "localhost"),
  CLIENT_GOOGLE_CALLBACK_URL: getEnv("CLIENT_GOOGLE_CALLBACK_URL", ""),
});

export const config = appConfig();
