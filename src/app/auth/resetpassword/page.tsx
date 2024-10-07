"use client";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../components/button";
import Input from "../components/Input";

function ResetPassword() {
    const [email, setEmail] = useState("");

    return (
        <>
            <div className="container h-full flex flex-col items-center justify-center">
                <h1 className="text-4xl text-black font-bold mb-6 dark:text-white">
                    Forgot Password?
                </h1>
                <p className="text-gray-400 text-lg mb-10">
                    No worries, we will send you reset instructions.
                </p>

                <form className="flex flex-col w-full max-w-md">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Adicionar o onChange para atualizar o estado
                    />

                    <Button type="submit">Submit</Button>

                    <Link
                        href="/auth/login"
                        className="text-gray-900 dark:text-white  py-2 px-4  rounded flex items-center justify-center focus:outline-none"
                    >
                        <FontAwesomeIcon
                            icon={faArrowLeft}
                            className="w-4 h-4 pr-1"
                        />
                        Back to log in
                    </Link>
                </form>
            </div>
        </>
    );
}

export default ResetPassword;
