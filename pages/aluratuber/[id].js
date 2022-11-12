import Link from "next/link";
import config from "../../config.json";
import { useRouter } from "next/router";
import { StyledUser } from "../../src/components/AluraTubes/aluraTuber";

export default function User() {
  const router = useRouter();
  const { id } = router.query;

  const user = config.favorites[id <= 2 ? id : 0];

  return (
    <StyledUser>
      <header>
        <div className="banner"></div>
        <div className="user-info">
          <img src={user.image} alt={`${user.name} profile`} />
          <h2>{user.username}</h2>
          <span>@{user.name}</span>
        </div>
      </header>
      <main>
        <Link className="back-button" href="/">
          &lt; Go to home
        </Link>
        <Link href={`https://github.com/${user.name}`}>GitHub</Link>
        {user.channel ? <Link href={user.channel}>YouTube Channel</Link> : null}
      </main>
    </StyledUser>
  );
}
