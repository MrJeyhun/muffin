import { router, publicProcedure } from "./trpc";

export const appRouter = router({
  helloWorldRoute: publicProcedure.query(() => {
    return "hello world!";
  }),
});

export type AppRouter = typeof appRouter;
