import { fireEvent, render, screen } from "@testing-library/react";
import CustomInput from "./CustomInput";
import { vi } from "vitest";
import { Context } from "../../context/AuthContext";




describe("renders custom input", () => {
  const renderWithContext = (ui:JSX.Element)=>{
    render (<Context>{ui}</Context>)
}
  it("renders custom input", () => {
    renderWithContext(
      <CustomInput
        name="username"
        label="Username"
        type="text"
        id="username"
        placeholder="Enter your username"
        value=""
        onChange={() => {}}
      />
    );
    const input = screen.getByPlaceholderText(/enter your username/i);
    const label = screen.getByLabelText(/username/i);
    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("name", "username");
    expect(input).toHaveAttribute("id", "username");
    expect(input).toHaveAttribute("placeholder", "Enter your username");
    expect(input).toHaveValue("");
  });
it("input value changes", () => {
  const mockOnChange = vi.fn(); 
    renderWithContext(
      <CustomInput
        name="username"
        label="Username"
        type="text"
        id="username"
        placeholder="Enter your username"
        value="testUser"
        onChange={mockOnChange}
      />
    );
    const input = screen.getByPlaceholderText(/enter your username/i);
    fireEvent.change(input, { target: { value: "textUser" } });
    expect(input).toHaveValue("testUser");
  });
})