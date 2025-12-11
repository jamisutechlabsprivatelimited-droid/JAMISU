import Link from "next/link"

const DownloadBrochureBtn= () => {
  return (
    <Link href="public/jamisu-brochure.pdf" className="bg-blue px-5 py-2.5 text-sm text-yellow rounded-sm font-semibold transition hover:bg-black">
      Download Brochure
    </Link>
  )
}

export default DownloadBrochureBtn