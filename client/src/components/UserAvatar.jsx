import Link from 'next/link';
import { formatNameForUrl } from './formatNameForUrl';

export function UserAvatar({ session }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; // Ensure this is set in your environment variables
  const userName = session?.user.name ?? "default-user";
  const formattedName = formatNameForUrl(userName);
  const profileUrl = `${baseUrl}/owners/${formattedName}`;

  return (
    <Link href={profileUrl}>
      <div className="flex items-center justify-center overflow-hidden  w-16 h-16 cursor-pointer ">
        <img
          className="w-[90%] h-[90%] object-cover m-3 rounded-full border-2 border-grey border-solid"
          src={session?.user.image ?? "https://source.boringavatars.com/marble/120"}
          alt="User Avatar"
        />
      </div>
    </Link>
  )
}


