import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { tosBannerCookie } from "~/cookie.server";

export async function loader() {
  return json("Method not allowed", { status: 405 });
}

export async function action({ request }: ActionArgs) {
  console.log(request);
  const redirectUrl = (await request.formData()).get("redirectUrl");
  return redirect(typeof redirectUrl === "string" ? redirectUrl : "/", {
    headers: {
      "Set-Cookie": await tosBannerCookie.serialize({
        showTOSBanner: false,
      }),
    },
  });
}
