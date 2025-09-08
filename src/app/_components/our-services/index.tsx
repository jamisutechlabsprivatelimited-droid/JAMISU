

import Image from "next/image";
import ERPImplementationImage from "@/assets/services/erp-implementation.jpg"
import ERPIntegrationImage from "@/assets/services/erp-integration.jpg"
import ManagedServicesImage from "@/assets/services/managed-servicecs.jpg"
import styles from "./styles.module.css"


const OurServices = () => {
  const cardClass = `relative min-h-72 md:min-h-[500px] rounded-sm overflow-hidden p-4 flex flex-col h-full justify-between ${styles.serviceCard}`
  return (
    <section className="py-20">
      <div className="container">
        <div className="space-y-5 w-full max-w-xl">
          <h3 className="text-7xl font-medium tracking-tight font-primary">Our services</h3>
          <p className="text-gray-600 ml-auto text-lg font-secondary">
            When it comes to growing a business, most entrepreneurs tend to get stuck at a certain point and become frustrated, as they don&apos;t know what to do or how to fix it
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-x-8 mt-14 gap-y-5">
          {/* ERP Implementation  */}
          <article className={cardClass}>
            <h4 className="font-semibold text-4xl">ERP <br /> Implementation</h4>
            <p className="text-white px-2 py-3 min-h-72 text-lg transition duration-400 bg-orange">
              We specialize in delivering tailored NetSuite ERP solutions to streamline your business processes and boost your productivity.
            </p>

            <Image src={ERPImplementationImage} layout="fill" alt="erp implemenation" className="object-cover -z-10 transition" />

            <PlusIcon />

          </article>

          {/* ERP Integration */}

          <article className={cardClass}>
            <h4 className=" font-semibold text-4xl">ERP <br /> Integration</h4>
            <p className="text-white px-2 py-3 min-h-72 text-lg transition duration-400 bg-orange">
              We specialize in delivering tailored NetSuite ERP solutions to streamline your business processes and boost your productivity.
            </p>
            <Image src={ERPIntegrationImage} layout="fill" alt="erp implemenation" className="object-cover -z-10 transition" />

            <PlusIcon />

          </article>

          {/* Managed Services */}
          <article className={cardClass}>
            <h4 className="font-semibold text-4xl">Managed <br /> Services</h4>
            <p className="text-white px-2 py-3 min-h-72 text-lg transition duration-400 bg-orange">
              We specialize in delivering tailored NetSuite ERP solutions to streamline your business processes and boost your productivity.
            </p>
            <Image src={ManagedServicesImage} layout="fill" alt="erp implemenation" className="object-cover -z-10 transition" />

            <PlusIcon />
          </article>
        </div>
      </div>
    </section>
  )
}

export default OurServices


const PlusIcon = () => {
  return (
    <div className="min-md:hidden absolute bottom-5 right-5 w-12 bg-white rounded-full">
      <svg aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
        <path fill="currentColor" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2">
        </path>
      </svg>
    </div>
  )
}