import { render } from "@testing-library/react";

import { Header } from "./Header";

test("must render", () => {
  const { container } = render(<Header />);

  expect(container.firstChild).toMatchInlineSnapshot(`
    <header>
      <nav
        class="navbar navbar-expand navbar-light bg-light"
      >
        <div
          class="container"
        >
          <a
            class="navbar-brand"
            href="#home"
          >
            React Testing Demo
          </a>
        </div>
      </nav>
    </header>
  `);
});
