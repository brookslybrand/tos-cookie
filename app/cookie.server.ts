import { createCookie } from "@remix-run/node";

export const tosBannerCookie = createCookie("tos-banner", {
  maxAge: 31_536_000, // one year
});
