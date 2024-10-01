"use client"

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../components/button';


function ResetPassword() {
  const [email, setEmail] = useState('');

  return (
    <>
      <div className="container  mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <h1 className="text-4xl text-black font-bold mb-6">Forgot Password?</h1>
        <p className="text-gray-400 text-lg mb-10">No worries, we will send you reset instructions.</p>

        <form className="flex flex-col space-y-4 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Adicionar o onChange para atualizar o estado
            className="w-full px-4 py-2 mb-6 bg-transparent border-0 border-b border-gray-600 focus:outline-none"
          />

          <Button type="submit">Submit</Button>

          <Link href="/auth/login" className="text-gray-900  py-2 px-4  rounded flex items-center justify-center focus:outline-none">
            {/* <IoArrowBackSharp size={18} /> */}

            <FontAwesomeIcon icon={faArrowLeft} className='w-4 h-4'/>
            Back to log in
          </Link>
        </form>
      </div>
    </>
  );
}

export default ResetPassword;