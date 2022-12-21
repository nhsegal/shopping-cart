import React from "react";
import { render, screen } from '@testing-library/react';
import App from './App';

describe("App component", () => {
  it("renders the App", () => {
    render(<App />);
    //screen.debug();
  });
});