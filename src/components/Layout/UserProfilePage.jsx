import { useAuth, UserProfile } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import Swal from "sweetalert2";
import { PiSignOutFill } from "react-icons/pi";

const UserProfilePage = () => {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      Swal.fire({
        title: "Drag me!",
        icon: "success",
        draggable: true,
      });
    } catch (error) {
      Swal.fire({
        title: { error },
        icon: "success",
        draggable: true,
      });
    }
  };
  return (
    <>
      <div className="m-5">
        <button
          onClick={handleSignOut}
          className="flex justify-center items-center gap-2 font-semibold text-red-500 cursor-pointer"
        >
          Sign Out <PiSignOutFill className="w-6 h-6" />
        </button>
      </div>
      <div className="flex justify-center items-center gap-3  py-8 ">
        <UserProfile
          appearance={{
            baseTheme: dark,
          }}
        />
      </div>
    </>
  );
};

export default UserProfilePage;
