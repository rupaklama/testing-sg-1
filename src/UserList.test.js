import { render, screen } from "@testing-library/react";

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
      // 'container' is the wrapper element added by testing library
      const { container } = render(<UserList users={users} />);

      // note - query helper to find elements & roles
      // screen.logTestingPlaygroundURL();
      // const rows = screen.getAllByRole("cell");
      // expect(rows).toHaveLength(4);

      // note - within function look up inside of given element only
      // const rows = within(screen.getByTestId("users")).getAllByRole("row");

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
