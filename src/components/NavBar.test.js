import React from "react";
import { BrowserRouter} from "react-router-dom";
import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';
import '@testing-library/jest-dom'

describe("NavBar component", () => {
  it("renders a home link and a shop link", () => {
    render(<BrowserRouter><NavBar /></BrowserRouter>)
    const homeLink = screen.getByRole('link',{ name: "Home" })
    expect(homeLink).toBeInTheDocument();
    const shopLink = screen.getByRole('link', { name: "Shop"});
    expect(shopLink).toBeInTheDocument();
  });
});