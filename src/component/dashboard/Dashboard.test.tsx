import { render, screen, fireEvent } from "@testing-library/react";
import Dashboard from "./Dashboard";
import { Context } from "../../context/AuthContext";

describe("Dashboard Component", () => {
  const renderDashboard = () => {
    return render(
      <Context>
        <Dashboard />
      </Context>
    );
  };

  test("renders search results text", () => {
    renderDashboard();
    expect(screen.getByText(/140 search results for/i)).toBeInTheDocument();
  });

  test("renders header text", () => {
    renderDashboard();
    expect(
      screen.getByText(/Wedding, Lagos ₦20k - ₦40k, Excellent/i)
    ).toBeInTheDocument();
  });

  test("toggles view layout when clicking view buttons", () => {
    renderDashboard();
    const flexButton = screen.getByAltText("images");
    const blockButton = screen.getByAltText("image");

    fireEvent.click(flexButton);
    const gridContainer = screen.getByTestId("dashboard");
    expect(gridContainer).toHaveClass("md:grid-cols-2");

    fireEvent.click(blockButton);
    expect(gridContainer).toHaveClass("md:grid-cols-1");
  });

  test("renders pagination buttons and handles page changes", () => {
    renderDashboard();
    const paginationButtons = screen.getAllByRole("button");

    paginationButtons.forEach((button, index) => {
      if (index === 0) {
        expect(button).toHaveClass("bg-[#0166FF]");
      }
      fireEvent.click(button);
      expect(button).toHaveClass("bg-[#0166FF]");
    });
  });

  test("renders booking options button", () => {
    renderDashboard();
    const bookingButtons = screen.getAllByText(/See booking options/i);
    bookingButtons.forEach((button) => {
      expect(button).toHaveClass("bg-[#0166FF]");
    });
  });
});
