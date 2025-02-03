import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

describe("footer",()=>{
    const renderFooter =()=>{
    render(
    
        <BrowserRouter>
        <Footer/>
        </BrowserRouter>
    )
}

it("renders logo section",()=>{
    renderFooter()
    const logo = screen.getByRole("heading", {name:/SHARP EVENT/i})
    const logoTest = screen.getByText(/service provider site/i)
    expect(logo).toBeInTheDocument()
    expect(logoTest).toBeInTheDocument()
})
it("renders service section",()=>{
  renderFooter();
    const serviceHeading = screen.getAllByRole("heading", { name: /Our service/i });
    const helpCenterLink = screen.getAllByRole("link", { name: /Help center/i });
    const faqLink = screen.getAllByRole("link", { name: /FAQ/i });
    expect(serviceHeading.length).toBeGreaterThan(0); 
    expect(helpCenterLink.length).toBeGreaterThan(0);  
    expect(faqLink.length).toBeGreaterThan(0);  
})
it("renders company section",()=>{
  renderFooter();
    const companyHeading = screen.getAllByRole("heading", { name: /Company/i });
    const aboutUsLink = screen.getAllByRole("link", { name: /About us/i });
    const hostLink = screen.getAllByRole("link", { name: /Host/i });
    const activitiesLink = screen.getAllByRole("link", { name: /Activities/i });
    const citiesLink = screen.getAllByRole("link", { name: /Cities/i });
    expect(companyHeading.length).toBeGreaterThan(0);
    expect(aboutUsLink.length).toBeGreaterThan(0);
    expect(hostLink.length).toBeGreaterThan(0);
    expect(activitiesLink.length).toBeGreaterThan(0);
    expect(citiesLink.length).toBeGreaterThan(0);
})
it("renders get in touch section",()=>{
  renderFooter();
    const getInTouchHeading = screen.getAllByRole("heading", { name: /Get in touch/i });
    const emailLink = screen.getAllByText (/Emailadress@gmail.com/i);
    const addressLink = screen.getAllByText (/Address of the company/i);
    expect(getInTouchHeading.length).toBeGreaterThan(0);
    expect(emailLink.length).toBeGreaterThan(0);
    expect(addressLink.length).toBeGreaterThan(0);
})
})