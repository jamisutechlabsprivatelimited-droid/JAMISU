import Image from "next/image"
import CraftedErp from "@/assets/crafted-erp-diagram.jpeg"

const CraftedERP = () => {
  return (
    <section id="solutions">
      <div className="pt-14 relative">
        <div className="grid md:grid-cols-2 gap-y-10 gap-x-20">
          <div >
            <h2 className="text-5xl font-semibold text-blue">Trust Us</h2>
            <h3 className="text-5xl font-semibold text-blue">Get More of What You Want From Your Business</h3>
            <div className="text-muted-foreground text-balance mt-7 space-y-5 font-secondary text-15 text-gray-800 leading-7">
              <p>
                &apos;Helping business owners & leaders follow a proven process to build a more valuable business-so you can live the life you&apos;ve always dreamed of&apos;
              </p>

              <ul className="mt-6 space-y-4 text-lg text-gray-800">
                <li className="flex flex-col">
                  <span className="text-blue font-bold text-xl">✓ CONFIDENCE</span>
                  <span className="italic">Follow a proven system to grow your company</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-blue font-bold text-xl">✓ PEACE OF MIND</span>
                  <span className="italic">Knowing your business can survive and thrive</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-blue font-bold text-xl">✓ FINANCIAL FREEDOM</span>
                  <span className="italic">For you and your family&apos;s future</span>
                </li>
              </ul>

            </div>
          </div>
          <figure className="relative w-full h-[400] md:h-full md:translate-y-10">
            <Image
              alt="Image"
              src={CraftedErp}
              fill
              className="object-contain"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default CraftedERP