import { render, screen, fireEvent } from "@testing-library/react";
import Dashboard from "./Dashboard";
import { describe } from "vitest";
import { AuthContext } from "../../context/AuthContext";
import { vi } from "vitest";
describe("renders the Dashboard with items", () => {
  const mockHandlePageChange = vi.fn();
  const mockHandleBlock = vi.fn();
  const mockHandleFlex = vi.fn();

  const mockContextValue = {
    block: false,
    currentPage: 1,
    handlePageChange: mockHandlePageChange,
    handleBlock: mockHandleBlock,
    handleFlex: mockHandleFlex,
    totalPages: 3,
    currentItems: [
      {
        id: 1,
        name: "Grand Wedding Hall",
        image: "image-url",
        direction: "Lagos, Nigeria",
        facilities: "Parking, Wi-Fi, Catering",
        rating: "4.5",
        rate: "Excellent",
        price: 35000,
        reviews: "200 reviews",
      },
    ],
    input: {
      minPrice: 0,
      maxPrice: 40000,
      event: "",
      location: "",
      price: "",
      rate: "",
    },
    handleInput: vi.fn(),
  };

  it("renders the Dashboard with items", () => {
    render(
      <AuthContext.Provider value={mockContextValue}>
        <Dashboard />
      </AuthContext.Provider>
    );

    expect(screen.getByText(/140 search results/i)).toBeInTheDocument();
    expect(screen.getByText(/Grand Wedding Hall/i)).toBeInTheDocument();
    expect(screen.getByText(/Lagos, Nigeria/i)).toBeInTheDocument();
    expect(screen.getByText(/₦35000/i)).toBeInTheDocument();
  });
  it("handles pagination click", () => {
    render(
      <AuthContext.Provider value={mockContextValue}>
        <Dashboard />
      </AuthContext.Provider>
    );

    const pageButton = screen.getByText("2");
    fireEvent.click(pageButton);
    expect(mockHandlePageChange).toHaveBeenCalledWith(2);
  });
});
