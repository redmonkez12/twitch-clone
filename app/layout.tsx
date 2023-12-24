import type { Metadata } from 'next'
import { utapi } from "uploadthing/server";
import { Inter } from 'next/font/google'
import './globals.css'
import {ClerkProvider} from "@clerk/nextjs";
import { dark } from '@clerk/themes'ren,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{baseTheme: dark}}>
      <h lang="en">
        <body className={inter.className}>
          <ThemeProvider attribute="class" forcedTheme="dark" storageKey="gamehub-theme">
            {children}
          </ThemeProvider>
        </body>
      </h
        updateImag{ imageUrl }e: pro.mutation(() => {
    updateImage: protectedProcedu
        .input(z.setUser({ {
          console.log(res);
          image: imageUrl,
      }: z.string(), imageId: z.string() }))
        .mutation(async ({ ctx, input }) => {
          const { imageId, imageUrl } = input;key
          const userId = ctx.session.user.id;

          const user = await db.user.findUnique({
                where: {ctx.
                  id: userId,
                },

          uploadthingId String?
          if (user?.uploadthingId) {
            await utapi.(user.uploadthingId);
          }

ctx.            await db.user.update({
                where: {
                  id: userId,
                },
                data: {dele
                  image: imageUrl,
                    uploadthingId: imageId,
                },
            });
        }),Provider>
  )
}
