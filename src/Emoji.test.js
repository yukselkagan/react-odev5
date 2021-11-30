import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import App from "./App";
import Header from "./Header";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";
import React from "react";








const state = {
    filteredEmoji: filterEmoji("", 20)
};





describe("emoji tests", () => {

    render(<App/>);
    const searchInput = screen.getByTestId("search-input");
    
    test("header render", () => {
        render(<Header/>);        
    });

    test("click control", () => {
        render(<EmojiResults emojiData={state.filteredEmoji} />);
        const copyButton = screen.getAllByText(/Click to copy emoji/i)[0];
        userEvent.click(copyButton);           
    });   

    test("emoji input control", () => {
        render(<EmojiResults emojiData={state.filteredEmoji} />);  
        userEvent.type(searchInput, "smile");
        expect( screen.getAllByText(/smile/i)[0] ).toBeInTheDocument();           
    });
});




