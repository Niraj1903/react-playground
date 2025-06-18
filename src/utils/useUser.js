import { useEffect, useState } from "react";
import { GITHUB_API } from "../utils/constants";

const useUser = () => {
  const [userDetail, setUserDetail] = useState("");
  useEffect(() => {
    fetchGit();
  }, []);

  const fetchGit = async () => {
    const gitURL = await fetch(GITHUB_API);
    const gitURLjson = await gitURL.json();
    setUserDetail(gitURLjson);
  };
  return userDetail;
};
export default useUser;
