import { SignIn } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

const Login = () => {
  return (
    <main className=" h-screen w-full">
      <div className="flex justify-center  items-center h-screen w-full">
        <SignIn
          appearance={{
            baseTheme: dark,
          }}
        />
      </div>
    </main>
  );
};

export default Login;
