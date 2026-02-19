import { redirect } from 'next/navigation'

// This folder was misnamed. Redirect to the correct route.
export default function page() {
  redirect('/verify-otp')
}
