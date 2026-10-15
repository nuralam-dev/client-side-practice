import { Suspense } from "react";
import User from "../components/User";

const UserData = async () => {
  const res = await fetch("http://localhost:4000/");
  return res.json();
};
console.log(UserData);
const page = () => {
  return (
    <div>
      <Suspense fallback={"loading..."}>
        <User UserData={UserData}></User>
      </Suspense>
    </div>
  );
};

export default page;
