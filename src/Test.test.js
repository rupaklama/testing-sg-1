import { render, screen, fireEvent } from "@testing-library/react";
import Test from "./Test";

describe("<Test />", () => {
  it("should log 'clicked!' when the button is clicked", () => {
    const consoleLogSpy = jest.spyOn(console, "log");
    render(<Test />);

    const button = screen.getByRole("button", { name: /test/i });
    fireEvent.click(button);

    expect(consoleLogSpy).toHaveBeenCalledWith("clicked!");

    consoleLogSpy.mockRestore();
  });
});
