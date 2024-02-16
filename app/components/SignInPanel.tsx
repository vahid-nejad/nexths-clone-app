import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Avatar } from "@nextui-org/react";
import React from "react";

const SignInPanel = () => {
  const { isAuthenticated, user } = useKindeBrowserClient();

  if (isAuthenticated)
    return (
      <div className="flex gap-2">
        <p>
          {user?.given_name} {user?.family_name}
          {user?.picture!! && <Avatar src={user.picture} />}
        </p>
      </div>
    );
  return (
    <div className="flex gap-2">
      <LoginLink>Sign In</LoginLink>
      <RegisterLink>Sign Up</RegisterLink>
    </div>
  );
};

export default SignInPanel;
