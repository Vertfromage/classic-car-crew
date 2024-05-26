
import { signIn, signOut } from "@/auth"
 
export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button className=" px-8 py-2 bg-white text-blue-600 rounded-lg font-semibold shadow hover:bg-gray-100 transition-colors" type="submit">Signin with GitHub</button>
    </form>
  )
} 

export function SignOut() {
    return (
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <button className=" px-8 py-2 bg-white text-blue-600 rounded-lg font-semibold shadow hover:bg-gray-100 transition-colors" type="submit">Signout</button>
      </form>
    )
  }
