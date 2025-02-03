import { fireEvent, render, screen } from "@testing-library/react";
import CustomFilters from "./CustomFilters";
import { Context } from "../../context/AuthContext";

describe("renders custom filter",()=>{
const renderWithContext = (ui:JSX.Element)=>{
    render (<Context>{ui}</Context>)
}
it("renders custom filter",()=>{
    renderWithContext(
        <CustomFilters
        name="username"
        label="Username"
        id="username"
        />
    )
    const input = screen.getByLabelText(/username/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "checkbox");
    expect(input).toHaveAttribute("name", "username");
    expect(input).toHaveAttribute("id", "username");
})
it("checkbox is toggle",()=>{
    renderWithContext(
        <CustomFilters
        name="username"
        label="Username"
        id="username"
        />
    )
    const checkbox = screen.getByRole("checkbox")
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
    fireEvent.click(checkbox)
    expect(checkbox).not.toBeChecked();
})
})