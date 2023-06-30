import React from "react";
import { getProviders, signIn } from "next-auth/react";

function Login({ provider }) {
  return (
    <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
      <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="" />
      {Object.values(provider).map((provider) => (
        <div key={provider.name}>
          <button
            className="bg-[#18D860] text-white rounded-full p-5"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const provider = await getProviders();
  console.log("provider",provider)
  return {
    props: {
      provider,
    },
  };
}
export default Login;
