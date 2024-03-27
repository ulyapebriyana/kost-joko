import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AdminDashboard = async () => {
  const { userId } = auth();

  if (userId !== process.env.ADMIN_ID) {
    return redirect("/")
  }

  return <div>AdminDashboard</div>;
};

export default AdminDashboard;
