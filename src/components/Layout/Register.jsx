import { SignUp } from "@clerk/clerk-react";

import { dark } from "@clerk/themes";
const Register = () => {
  return (
    <main className="flex justify-center items-center my-12">
      <SignUp
        appearance={{
          baseTheme: dark,
        }}
      />
    </main>
  );
};

export default Register;
