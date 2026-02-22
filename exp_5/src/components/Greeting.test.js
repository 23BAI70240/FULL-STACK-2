import { render, screen } from "@testing-library/react";
import Greeting from "./Greetings";

test("renders greeting message", () => {
  render(<Greeting name="John" />);
  expect(screen.getByText("Hello John")).toBeInTheDocument();
});
