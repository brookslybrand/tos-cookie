import { styled } from "~/stitches.config";
import { Form } from "@remix-run/react";

import Button from "./base/Button";
import Flex from "./base/Flex";
import Link from "./base/Link";
import Text from "./base/Text";

export const SHOW_TOS_BANNER: boolean = true as boolean;
export const LAST_UPDATED_DATE_STRING = "07/11/2022"; // MM/DD/YYYY
export const LAST_UPDATED_DATE = new Date(LAST_UPDATED_DATE_STRING);

const formatDate = new Intl.DateTimeFormat(undefined, {
  day: "numeric",
  month: "long",
  year: "numeric",
}).format;

export function TOSBanner() {
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
      <Form method="post">
        <Button
          color="white"
          shape="regular"
          hoverable
          css={{
            paddingY: "$2",
            paddingX: "$4",
          }}
          //onClick={handleClick}
        >
          Accept
        </Button>
      </Form>
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
