import iconAppend from "../util/iconAppend";
import { render, screen } from "@testing-library/react";
import { v4 as uuidv4 } from "uuid";

let links;

beforeAll(() => {
  links = [
    {
      name: "Github",
      url: "https://jestjs.io/docs/setup-teardown",
    },
    {
      name: "LinkedIn",
      url: "https://developer.mozilla.org/en-US/",
    },
  ];
});

describe("Link reducer", () => {
  test("renders github logo icons", () => {
    const linkLogos = iconAppend(links);

    const githubLink = linkLogos.find((element) => element.name === "Github");
    render(githubLink.linkIcon);
    screen.getByTestId("GitHubIcon");
  });

  test("renders multiple logo icon links", () => {
    const linkLogos = iconAppend(links);

    render(
      linkLogos.map((link) => {
        return <div key={uuidv4()}>{link.linkIcon}</div>;
      })
    );
    screen.debug();
  });
});
