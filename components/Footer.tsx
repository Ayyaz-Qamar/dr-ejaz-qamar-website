export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-5xl mx-auto px-6 py-8 text-center text-sm">
        <p className="font-semibold text-white">Dr. Muhammad Ejaz Qamar</p>
        <p className="mt-1">Orthopaedic Surgeon & Specialist</p>
        <p className="mt-2">Phone: 0300-7582959</p>
        <p className="mt-4 text-xs text-gray-500">
          © {new Date().getFullYear()} Dr. Ejaz Qamar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
