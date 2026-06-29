export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">
              Jungle<span className="text-yellow-400">Safari</span>
            </h3>
            <p className="text-gray-400 text-sm mt-1">Tanzania's leading tailor made safari company</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              We always aim to reply within 24 hours.
            </p>
            <p className="text-sm mt-2">
              © {new Date().getFullYear()} Jungle Safari. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}