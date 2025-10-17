import BankIcon from "@/assets/products/bank.svg";
import ERPIcon from "@/assets/products/erp.svg";
import TimestampIcon from "@/assets/products/timestamp.svg";
import WarehouseIcon from "@/assets/products/warehouse.svg";
import ChatbotIcon from "@/assets/products/chatbot.svg";
import RentalIcon from "@/assets/products/rental-management.svg";
import Image from "next/image";



const Products = () => {

  const data = [
    { text: 'Rental Management', icon: RentalIcon },
    { text: 'ERP Product', icon: ERPIcon },
    { text: 'Timestamp', icon: TimestampIcon },
    { text: 'Warehouse Management', icon: WarehouseIcon },
    { text: 'Chatbot', icon: ChatbotIcon },
    { text: 'Bank Integration', icon: BankIcon },
  ];

  return (
    <section className="py-10" id="products">
      <div className="container">
        <h3 className="text-4xl font-medium text-center">Our <span className="text-orange">Products</span></h3>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 items-center mt-10">
          {
            data.map((item, index) => (
              <div key={index} className="px-4 py-8 flex flex-col gap-3 items-center justify-center w-44 md:w-56 rounded-md h-full mx-auto bg-green/10">
                <h4 className="text-lg font-semibold text-center">{item.text}</h4>
                <figure className="relative w-16 md:w-20 h-16 md:h-20">
                  <Image
                    src={item.icon}
                    alt={item.text}
                    fill
                  />
                </figure>
              </div>
            ))
          }
        </div>
      </div>


    </section>
  )
}

export default Products