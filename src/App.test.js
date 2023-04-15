import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("<App />", () => {
  describe("happy path testing", () => {
    it("should receive a new user and show it on a list", () => {
      render(<App />);

      const nameInput = screen.getByRole("textbox", { name: /name/i });
      userEvent.type(nameInput, "admin");

      const emailInput = screen.getByRole("textbox", { name: /email/i });
      userEvent.type(emailInput, "admin@test.com");

      const buttonEl = screen.getByRole("button", { name: /add user/i });
      userEvent.click(buttonEl);

      // screen.debug();

      const name = screen.getByRole("cell", { name: "admin" });
      const email = screen.getByRole("cell", { name: "admin@test.com" });

      expect(name).toBeInTheDocument();
      expect(email).toBeInTheDocument();
    });
  });
});
