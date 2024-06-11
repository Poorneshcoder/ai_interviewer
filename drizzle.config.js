/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:mQpG2BCUYLF0@ep-odd-credit-a5wz2udu.us-east-2.aws.neon.tech/ai_interviewer?sslmode=require',
    }
  };