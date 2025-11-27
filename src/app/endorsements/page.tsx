import { redirect } from "next/navigation"

export default function Page() {
  // Route removed — redirect to home (anchor fragments can cause issues during build)
  redirect("/")
}
