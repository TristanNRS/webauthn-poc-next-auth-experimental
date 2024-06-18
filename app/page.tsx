import { SignInButton } from "@/components/SignInButton";
import { SignOutButton } from "@/components/SignOutButton";
import { UserData } from "@/components/UserData";

export default function Home() {
  return (
    <main>
      <UserData />
      <div className="mt-10 w-1/6 flex justify-around bg-gray-200">
        <SignInButton />
        <SignOutButton />
      </div>
    </main>
  );
}
