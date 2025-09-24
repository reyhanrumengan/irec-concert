// app/page.tsx
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/en"); // send users to default locale
}
