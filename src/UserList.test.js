import { render, screen, within } from "@testing-library/react";

import UserList from "./UserList";

describe("<UserList />", () => {
  const users = [
    { name: "testUser1", email: "testUser1@test.com" },
    { name: "testUser2", email: "testUser2@test.com" },
  ];

  const setup = () => {
    render(<UserList users={users} />);
  };

  describe("layout", () => {
    it("should render one row per user", () => {
      // note - avoiding data test ids
      // 'container' is the wrapper element 'div' added by testing library
      const { container } = render(<UserList users={users} />);

      // note - query helper to find elements & roles
      // eslint-disable-next-line testing-library/no-debugging-utils
      screen.logTestingPlaygroundURL();
      // const rows = screen.getAllByRole("cell");
      // expect(rows).toHaveLength(2); - issues here

      // note: two ways to solve issues above

      // note - within function looks up inside of 'given element' only with 'data-testid' attribute
      // const rows = within(screen.getByTestId("users")).getAllByRole("row");
      // expect(rows).toHaveLength(2);

      // note - good approach here since we don't have to modify the component with data-testid
      // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
      const rows = container.querySelectorAll("tbody tr");

      expect(rows).toHaveLength(2);
    });

    it("should render the email and name of each user", () => {
      setup();

      for (let user of users) {
        const name = screen.getByRole("cell", { name: user.name });
        const email = screen.getByRole("cell", { name: user.email });

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
      }
    });
  });
});
