import { styled } from "~/stitches.config";
import { useFetcher, useLocation } from "@remix-run/react";

import Button from "./base/Button";
import Flex from "./base/Flex";
import Link from "./base/Link";
import Text from "./base/Text";

export const LAST_UPDATED_DATE = new Date("07/11/2022").valueOf();

const formatDate = new Intl.DateTimeFormat(undefined, {
  day: "numeric",
  month: "long",
  year: "numeric",
}).format;

export function TOSBanner() {
  const { pathname, search } = useLocation();
  const fetcher = useFetcher();

  return (
    <Flex
      css={{
        fontFamily: "$body",
        flexDirection: "column",
        justifyContent: "flex-end",
        position: "fixed",
        left: 10,
        bottom: 10,
        right: 10,
        zIndex: 999,
        backgroundColor: "$black80",
        borderRadius: "$3",
        paddingX: "$4",
        paddingY: "$3",
        "@bp0": {
          flexDirection: "row",
          alignItems: "center",
          left: "unset",
          bottom: 20,
          right: 20,
        },
      }}
    >
      <Text
        size={0}
        css={{
          color: "$white100",
          marginRight: "$4",
          marginBottom: "$4",
          "@bp0": { marginBottom: 0 },
        }}
      >
        As of {formatDate(LAST_UPDATED_DATE)} we have updated our{" "}
        <TextLink to="/terms" target="_blank" rel="noreferrer">
          Terms of Service
        </TextLink>{" "}
        and{" "}
        <TextLink to="/privacy" target="_blank" rel="noreferrer">
          Privacy Policy.
        </TextLink>
      </Text>
      <fetcher.Form method="post" action="/hide-tos-banner">
        <input hidden name="redirectUrl" value={pathname + search} readOnly />
        <Button
          color="white"
          shape="regular"
          hoverable
          css={{
            paddingY: "$2",
            paddingX: "$4",
          }}
        >
          Accept
        </Button>
      </fetcher.Form>
    </Flex>
  );
}

const TextLink = styled(Link, {
  display: "inline",
  color: "$black30",
  textDecoration: "none",
  transition: "color $2 $ease",
  "@hover": {
    "&:hover": { color: "$white100" },
  },
});
