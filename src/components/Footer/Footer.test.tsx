import { render } from "@testing-library/react";

import { Footer } from "./Footer";

test("must render", () => {
  const { container } = render(<Footer />);

  expect(container.firstChild).toMatchInlineSnapshot(`
    <footer
      class="bg-light py-3 text-muted"
    >
      <div
        class="container"
      >
        © 2021 Compiled Creations Limited.
      </div>
    </footer>
  `);
});
