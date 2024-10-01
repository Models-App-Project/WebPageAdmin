"use client"

import React, { useState } from 'react';
import Input from '../components/Input';
import Link from 'next/link';
import Button from '../components/button';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="container mx-auto px-4 py-12 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center text-black mb-2">Log in</h1>
            <p className="text-gray-900 text-center mb-10">
                Welcome back! Please enter your details
            </p>
            <form className="flex flex-col space-y-4 w-full max-w-md">
                <Input
                    type="email"
                    placeholder="Username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} // Atualizar o valor de email
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Atualizar o valor de password
                />
                
                <div className="text-sm mb-3 text-center">
                    <p className="text-gray-400 text-base">
                        Forgot Password?{' '}
                        <Link href="/auth/resetpassword" className="hover:underline">Reset now</Link>
                    </p>
                </div>

                <Button type="submit">Submit</Button>

                <p className="mt-6 text-center text-gray-400">
                Don't have an account yet?{' '}
                <Link href="#" className="text-blue-600 hover:underline">
                Sign up
                </Link> 
            </p>
            </form>
        </div>
    );
};

export default Login;