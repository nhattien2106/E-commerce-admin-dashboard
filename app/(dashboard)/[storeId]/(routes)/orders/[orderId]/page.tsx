import prismadb from "@/lib/prismadb";
import { BilboardsForm } from "./components/order-form";

const OrdersPage = async ({ params }: { params: { billboardId: string } }) => {
  const orders = await prismadb.order.findUnique({
    where: {
      id: params.billboardId,
    },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BilboardsForm initialData={orders} />
      </div>
    </div>
  );
};

export default OrdersPage;
