import { drizzle } from "drizzle-orm/postgres-js";
import { sql } from "@vercel/postgres";

import * as schema from "./schema";

/* eslint-disable @typescript-eslint/no-unsafe-argument */
// @ts-expect-error
export const db = drizzle(sql, { schema });
/* eslint-enable @typescript-eslint/no-unsafe-argument */
