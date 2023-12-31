import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { VscAccount, VscHome, VscSignIn, VscSignOut } from "react-icons/vsc";
import IconHoverEffect from "./IconHoverEffect";

function SideNav() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <nav className=" sticky top-0 px-2 py-2">
      <ul className="flex flex-col items-start gap-2 whitespace-nowrap">
        <li>
          <Link href="/">
            <IconHoverEffect>
              <span className="flex items-center gap-4">
                <VscHome className="h-8 w-8" />
                <span className="hidden text-lg md:inline">Home</span>
              </span>
            </IconHoverEffect>
          </Link>
        </li>
        {user != null && (
          <li>
            <Link href={`/profiles/${user.id}`}>
              <IconHoverEffect>
                <span className="flex items-center gap-4">
                  <VscAccount className="h-8 w-8" />
                  <span className="hidden text-lg md:inline">Profile</span>
                </span>
              </IconHoverEffect>
            </Link>
          </li>
        )}
        {user == null ? (
          <li>
            <IconHoverEffect>
              <span className="flex items-center gap-4">
                <button onClick={() => void signIn()}>
                  <span className="flex gap-4">
                    <VscSignIn className="h-8 w-8 fill-green-700" />
                    <span className="hidden text-lg text-green-700 md:inline">
                      Sign In
                    </span>
                  </span>
                </button>
              </span>
            </IconHoverEffect>
          </li>
        ) : (
          <li>
            <IconHoverEffect>
              <span className="flex items-center gap-4">
                <button onClick={() => void signOut()}>
                  <span className="flex gap-4">
                    <VscSignOut className="h-8 w-8 fill-red-500" />

                    <span className="hidden text-lg text-red-500 md:inline">
                      Sign Out
                    </span>
                  </span>
                </button>
              </span>
            </IconHoverEffect>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default SideNav;
