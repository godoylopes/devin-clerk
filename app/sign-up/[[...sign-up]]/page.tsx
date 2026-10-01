import { SignUp } from "@clerk/nextjs";
import { clerkAppearance } from "@/app.config";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignUp appearance={clerkAppearance} />
    </div>
  );
}
