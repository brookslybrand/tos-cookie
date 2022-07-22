import type { LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { getCssText } from "~/stitches.config";
import { LAST_UPDATED_DATE, TOSBanner } from "~/components/TOSBanner";
import { tosBannerCookie } from "./cookie.server";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export async function loader({ request }: LoaderArgs) {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = await tosBannerCookie.parse(cookieHeader);

  if (cookie) {
    return json({ showTOSBanner: cookie?.dateTOSRead < LAST_UPDATED_DATE });
  }
  return json(
    { showTOSBanner: true },
    {
      headers: {
        "Set-Cookie": await tosBannerCookie.serialize({
          dateTOSRead: 0,
        }),
      },
    }
  );
}

export default function App() {
  const { showTOSBanner } = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />

        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
          suppressHydrationWarning
        />
      </head>
      <body>
        {showTOSBanner ? <TOSBanner /> : null}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
