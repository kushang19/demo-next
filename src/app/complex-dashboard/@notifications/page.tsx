import { Card } from "@/app/components/card";
import Link from "next/link";

export default function NotificationsSlots() {
  return (
    <>
      <Card>
        <p>Notifications </p>
        <Link href='/complex-dashboard/archived'> - Archived</Link>
      </Card>
    </>
  );
}
