"use client";

import React, { useState } from "react";
import Input from "../components/Input";
import Link from "next/link";
import Button from "../components/button";

type RegisterInputProps = {
    email: string;
    password: string;
    confirmPassword: string;
};

const Register = () => {
    const [inputStates, setInputStates] = useState<RegisterInputProps>({
        email: "",
        password: "",
        confirmPassword: "",
    });

    return (
        <div className="container h-full flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center text-black mb-2">
                Create Account
            </h1>
            <p className="text-gray-400 text-center mb-10">
                Sign up and manage by your point of view!
            </p>
            <form className="flex flex-col w-full max-w-md">
                <div className="pb-4">
                    {" "}
                    <Input
                        type="email"
                        placeholder="Username"
                        value={inputStates.email}
                        onChange={(e) =>
                            setInputStates((state) => ({
                                ...state,
                                email: e.target.value,
                            }))
                        } // Atualizar o valor de email
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={inputStates.password}
                        onChange={(e) =>
                            setInputStates((state) => ({
                                ...state,
                                password: e.target.value,
                            }))
                        } // Atualizar o valor de password
                    />
                    <Input
                        type="password"
                        placeholder="Confirm Password"
                        value={inputStates.confirmPassword}
                        onChange={(e) =>
                            setInputStates((state) => ({
                                ...state,
                                confirmPassword: e.target.value,
                            }))
                        } // Atualizar o valor de password
                    />
                </div>

                <Button type="submit">Submit</Button>

                <p className="mt-6 text-center text-gray-400">
                    Do not have an account yet?{" "}
                    <Link
                        href="/auth/login"
                        className="text-blue-600 hover:underline"
                    >
                        Sign in
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
