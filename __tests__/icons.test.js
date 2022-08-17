import { render, screen } from "@testing-library/react";
import { v4 as uuidv4 } from "uuid";
import iconMap from "../util/iconMap";

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
  test("renders github logo icons with refactored function", () => {
    const linkLogoes = iconMap(links);
    const githubLink = linkLogoes.find((element) => element.name === "Github");
    render(githubLink.icon);
    screen.getByTestId("GitHubIcon");
  });

  test("renders multiple logo icon links", () => {
    const linkLogos = iconMap(links);
    render(
      linkLogos.map((link) => {
        return <div key={uuidv4()}>{link.icon}</div>;
      })
    );
    // screen.debug();
  });
});
