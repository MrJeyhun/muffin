import { initTRPC } from "@trpc/server";

const tInit = initTRPC.context().create();

export const router = tInit.router;
export const publicProcedure = tInit.procedure;
