"use client";

// import {  UserButton, useUser } from "@clerk/nextjs";

export default function User() {
  // const { user } = useUser();
  // if (!user) return null
  return (
    <div className="self-end flex w-full justify-between mb-4 p-2">
      {/* <p className='font-semibold'>{user.firstName}</p> */}
      <p className="font-semibold">Elias</p>

      {/* <UserButton afterSignOutUrl='/' /> */}
    </div>
  );
}
