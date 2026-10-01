import { SignIn } from "@clerk/nextjs";
import { clerkAppearance } from "@/app.config";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn appearance={clerkAppearance} />
    </div>
  );
}
