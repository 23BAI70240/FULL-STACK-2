import { screen, render } from "@testing-library/react";
import Product from "./Product";
import * as api from "../api/productApi";

jest.mock("../api/productApi");

test("renders product", async () => {
  api.fetchProducts.mockResolvedValue({
    id: 1,
    name: "phone",
    price: 2000
  });

  render(<Product />);

  const productName = await screen.findByText("phone");

  expect(productName).toBeInTheDocument();
});
