import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Login from "@/app/auth/login/page";
import ResetPassword from "@/app/auth/resetpassword/page";

describe("Login", () => {
    it("renders a text in Login page", () => {
        render(<Login />);
        const element = screen.getByText("Login");
        expect(element).toBeInTheDocument();
    });
});
describe("ResetPassword", () => {
    it("renders a text in ResetPassword page", () => {
        render(<ResetPassword />);
        const element = screen.getByText("ResetPassword");
        expect(element).toBeInTheDocument();
    });
});
