import iconReducer from "../util/iconReducer";
import { render, screen } from "@testing-library/react";
import { v4 as uuidv4 } from "uuid";

let links;

beforeAll(() => {
  links = {
    github: "https://jestjs.io/docs/setup-teardown",
    linkedin: "https://developer.mozilla.org/en-US/",
  };
});

describe("Link reducer", () => {
  test("renders github logo icons", () => {
    const linkLogos = iconReducer(links);
    render(linkLogos.github);
    screen.getByTestId("GitHubIcon");
  });

  test("renders multiple logo icon links", () => {
    const linkLogos = iconReducer(links);
    const frag = render(
      Object.values(linkLogos).map((link) => {
        return <div key={uuidv4()}>{link}</div>;
      })
    );
    // screen.debug();
  });
});
