import Shimmer from "./Shimmer";
import useUser from "../utils/useUser";

const User = () => {
  const userDetail = useUser();

  if (userDetail === "") return <Shimmer />;

  const { name, location, bio, public_repos, followers } = userDetail;
  return (
    <>
      <div className="user-container">
        <div className="user-card">
          <h2>Name : {name}</h2>
          <h3>Location : {location}</h3>
          <h3>Bio : {bio}</h3>
          <h3>Public_repos : {public_repos}</h3>
          <h3>Followers : {followers}</h3>
        </div>
      </div>
    </>
  );
};
export default User;
