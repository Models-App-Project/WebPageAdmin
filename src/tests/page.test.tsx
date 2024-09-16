import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

describe("Page", () => {
    it("renders a heading", () => {
        render(<Page />);
        const element = screen.getByText("Hello World"); // Exemplo, depende do seu componente
        expect(element).toBeInTheDocument();
    });
});
