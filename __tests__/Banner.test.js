/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import Banner from "../components/Banner";

describe("Banner는", () => {
  it("배너라는 텍스트를 가지고 있어야 한다", () => {
    const { getByText } = render(<Banner />);

    const bannerText = getByText("배너");

    expect(bannerText).toBeInTheDocument();
  });
});
