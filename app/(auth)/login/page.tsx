import React from "react";
import { Input } from "@nextui-org/react";
import Button from "@/components/Button";

export default function Login() {
  return (
    <div>
      <h1 className="text-4xl font-thin flex">
        Next
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Cloud
        </span>
      </h1>
      <h1 className="text-2xl flex py-4">Login</h1>
      <div className="rounded-2xl bg-neutral-700 text-white shadow-lg px-3">
        <Input
          label="Email"
          isClearable
          radius="lg"
          classNames={{
            label: "text-black/50 dark:text-white/90 mb-6",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
          }}
          placeholder="Enter your email"
        />
      </div>
      <div className="mt-5 rounded-2xl bg-neutral-700 text-white shadow-lg px-3">
        <Input
          label="Password"
          isClearable
          radius="lg"
          classNames={{
            label: "text-black/50 dark:text-white/90 mb-6",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
          }}
          placeholder="Enter your Password"
        />
      </div>
      <Button
        onClick={() => {}}
        className="mt-5 p-1 px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:from-pink-500 hover:to-yellow-500"
      >
        Login
      </Button>
    </div>
  );
}
