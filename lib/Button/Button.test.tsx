import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

it("should render a button", () => {
  // arrange
  render(<Button>Click Me!</Button>);

  // assert
  expect(screen.getByRole("button", { name: "Click Me!" })).toBeInTheDocument();
});

it("should call onClick when clicked", async () => {
  // arrange
  const onClick = vi.fn();
  render(<Button onClick={onClick}>Click Me!</Button>);

  // action
  await userEvent.click(screen.getByRole("button", { name: "Click Me!" }));

  // assert
  expect(onClick).toHaveBeenCalled();
});

it("should not call onClick when disabled", async () => {
  // arrange
  const onClick = vi.fn();
  render(
    <Button onClick={onClick} disabled>
      Click Me!
    </Button>,
  );
  const button = screen.getByRole("button", { name: "Click Me!" });

  // action
  await userEvent.click(button);

  // assert
  expect(button).toBeDisabled();
  expect(onClick).not.toHaveBeenCalled();
});

describe("variants", () => {
  it.each([
    ["color", "success", "bg-green-500"],
    ["color", "info", "bg-blue-500"],
    ["color", "warning", "bg-amber-500"],
    ["color", "error", "bg-red-500"],
    ["color", "primary", "bg-indigo-500"],
    ["size", "small", "text-xs"],
    ["size", "medium", "text-sm"],
    ["size", "large", "text-base"],
  ] as const)(
    'should apply the correct class for %s="%s"',
    (propName, propValue, expectedClass) => {
      // arrange
      const props = { [propName]: propValue };
      render(<Button {...props}>Click Me!</Button>);

      // assert
      expect(screen.getByRole("button", { name: "Click Me!" })).toHaveClass(
        expectedClass,
      );
    },
  );
});
