import BankIcon from "@/assets/products/bank.svg";
import ERPIcon from "@/assets/products/erp.svg";
import TimestampIcon from "@/assets/products/timestamp.svg";
import WarehouseIcon from "@/assets/products/warehouse.svg";
import ChatbotIcon from "@/assets/products/chatbot.svg";
import RentalIcon from "@/assets/products/rental-management.svg";
import Image from "next/image";

const Products = () => {

  const data = [

    { text: 'JAMISU ERP System  ', icon: ERPIcon, link: "https://app.jamisu.com/" },
    { text: 'JAMISU Timestamp', icon: TimestampIcon, link: "http://hourflux.com/signin/" },
    { text: 'JAMISU Warehouse Management', icon: WarehouseIcon, link: "#" },
    { text: 'JAMISU Rental Management', icon: RentalIcon, link: "#" },
    { text: 'Chatbot/AI', icon: ChatbotIcon, link: "#" }, 
    { text: 'Integration', icon: BankIcon, link: "#" },
  ];

  return (
    <section className="py-10" id="products">
      <div className="container">
        <h3 className="text-4xl font-medium text-center">
          Our <span className="text-yellow">Products</span>
        </h3>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 items-center mt-10">
          {
            data.map((item, index) => (
              <a 
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-8 flex flex-col gap-3 items-center justify-center 
                           w-44 md:w-56 rounded-md h-full mx-auto bg-green/10 
                           hover:scale-105 transition-all duration-200"
              >
                <h4 className="text-lg font-semibold text-center">{item.text}</h4>
                <figure className="relative w-16 md:w-20 h-16 md:h-20">
                  <Image
                    src={item.icon}
                    alt={item.text}
                    fill
                  />
                </figure>
              </a>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Products;
