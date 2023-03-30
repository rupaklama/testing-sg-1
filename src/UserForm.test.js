import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserForm from "./UserForm";

describe("<UserForm />", () => {
  const setup = () => {
    render(<UserForm />);
  };

  // import aspect of the component
  describe("layout", () => {
    it("should render Inputs initially empty", () => {
      setup();

      const nameInput = screen.getByRole("textbox", { name: /name/i });
      const emailInput = screen.getByRole("textbox", { name: /email/i });

      expect(nameInput.value).toBe("");
      expect(emailInput.value).toBe("");
    });

    it("should render a Add User button", () => {
      setup();

      const buttonEl = screen.getByRole("button", { name: /add user/i });
      expect(buttonEl).toBeInTheDocument();
    });
  });

  describe("interactions", () => {
    it("should call onUserAdd and submit form on button click", () => {
      const mock = jest.fn();

      render(<UserForm onUserAdd={mock} />);

      const nameInput = screen.getByRole("textbox", { name: /name/i });

      // userEvent.type(nameInput, "admin");
      userEvent.click(nameInput);
      userEvent.keyboard("admin");

      const emailInput = screen.getByRole("textbox", { name: /email/i });
      userEvent.type(emailInput, "admin@test.com");

      const buttonEl = screen.getByRole("button", { name: /add user/i });
      userEvent.click(buttonEl);

      expect(mock).toHaveBeenCalled();
      expect(mock).toHaveBeenCalledWith({ name: "admin", email: "admin@test.com" });
    });
  });
});
