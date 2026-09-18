import { config } from 'dotenv'
import {z } from 'zod';

//load for appropriate environment
config({
  path: `../config/.env.${process.env.NODE_ENV}`
})


// environment viriable schema
const envSchema = z.object({
  SERVER_PORT: z.coerce.number(),
  DATABASE_URL: z.string().url().refine((url) => url.startsWith('postgres://') || url.startsWith('postgresql://'),
        { message: 'DATABASE_URL must be a valid PostgreSQL connection string' }),
})

// export envschema type
export type Env = z.infer<typeof envSchema>;

const results = envSchema.safeParse(process.env);
if (!results.success) {
 console.error(results.error.issues.map((iss) => ({
    path: iss.path.join('.'),
    message: iss.message
  })));
  process.exit(1); // shut down process
}

// export env
export const env = results.data;
export default results.data;
