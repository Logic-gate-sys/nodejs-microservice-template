import { z } from 'zod';

export const UserSchema = z.object({
  id: z.number().int(),
  email: z.string().email(),
  username: z.string(),
  password: z.string(), 
  p_level: z.string(),
  rank: z.string(),
  bio: z.string(),
  avatar: z.string(),
  total_score: z.number().int(),
  created_at: z.coerce.date(), 
});

export type User = z.infer<typeof UserSchema>;