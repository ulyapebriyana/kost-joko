import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await auth();
  // console.log(session);
  
  return <div>hello this is protected route</div>;
};

export default Dashboard;
