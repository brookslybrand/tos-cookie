import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { tosBannerCookie } from "~/cookie.server";

export async function loader() {
  return json("Method not allowed", { status: 405 });
}

export async function action({ request }: ActionArgs) {
  const redirectUrl = (await request.formData()).get("redirectUrl");
  return redirect(typeof redirectUrl === "string" ? redirectUrl : "/", {
    headers: {
      "Set-Cookie": await tosBannerCookie.serialize({
        // set the date that the TOS were read
        dateTOSRead: new Date().valueOf(),
      }),
    },
  });
}
