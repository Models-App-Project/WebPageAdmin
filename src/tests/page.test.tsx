import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Login from "@/app/auth/login/page";
import Register from "@/app/auth/register/page";
import ResetPassword from "@/app/auth/resetpassword/page";

describe("Login", () => {
    it("renders a text in Login page", () => {
        render(<Login />);
        const element = screen.getByText("Login"); // Exemplo, depende do seu componente
        expect(element).toBeInTheDocument();
    });
});
describe("Register", () => {
    it("renders a text in Register page", () => {
        render(<Register />);
        const element = screen.getByText("Register"); // Exemplo, depende do seu componente
        expect(element).toBeInTheDocument();
    });
});
describe("ResetPassword", () => {
    it("renders a text in ResetPassword page", () => {
        render(<ResetPassword />);
        const element = screen.getByText("ResetPassword"); // Exemplo, depende do seu componente
        expect(element).toBeInTheDocument();
    });
});
