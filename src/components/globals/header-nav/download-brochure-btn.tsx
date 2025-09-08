import Link from "next/link"

const DownloadBrochureBtn= () => {
  return (
    <Link href={"/"} className="bg-orange px-5 py-2.5 text-sm text-white rounded-sm font-semibold transition hover:bg-black">
      Download Brochure
    </Link>
  )
}

export default DownloadBrochureBtn