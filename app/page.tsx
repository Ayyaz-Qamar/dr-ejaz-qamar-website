import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  Building2,
  Stethoscope,
  Bone,
  Activity,
  Dumbbell,
  HeartPulse,
  ClipboardCheck,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-shrink-0">
            <Image
              src="/images/doctor.jpg"
              alt="Dr. Muhammad Ejaz Qamar - Orthopaedic Surgeon & Specialist"
              width={260}
              height={260}
              className="rounded-2xl object-cover shadow-lg border-4 border-white"
              priority
            />
          </div>

          <div className="text-center md:text-left">
            <span className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
              PMDC CERTIFIED
            </span>
            <h1 className="text-4xl font-bold text-gray-900">
              Dr. Muhammad Ejaz Qamar
            </h1>
            <p className="mt-2 text-xl text-teal-700 font-semibold">
              Orthopaedic Surgeon & Specialist
            </p>
            <p className="mt-4 text-gray-600 max-w-xl leading-relaxed">
              With years of dedicated service across leading hospitals in
              Azad Kashmir and Islamabad, Dr. Ejaz Qamar provides expert
              orthopaedic care, from trauma and fracture management to joint
              and bone-related treatments, combining surgical expertise with
              genuine patient care.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/appointment"
                className="bg-teal-700 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-800 transition-colors text-center"
              >
                Book an Appointment
              </Link>
              <Link
                href="tel:03007582959"
                className="border border-teal-700 text-teal-700 px-6 py-3 rounded-full font-medium hover:bg-teal-50 transition-colors text-center flex items-center justify-center gap-2"
              >
                <Phone size={16} />
                0300-7582959
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            About Dr. Ejaz Qamar
          </h2>
          <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed space-y-4">
            <p>
              Dr. Muhammad Ejaz Qamar is a qualified Orthopaedic Surgeon and
              Specialist, certified by the Pakistan Medical and Dental
              Council (PMDC), with an MBBS from Ayub Medical College,
              Abbottabad.
            </p>
            <p>
              He has served in senior clinical roles including Registrar at
              PIMS, Islamabad, and Resident Surgeon at H.H. Sheikh Khalifa
              Bin Zayed Hospital, A.K. CMH Muzaffarabad. His earlier
              postings include Medical Officer positions at THQ Kel and DHQ
              Neelum, where he provided essential care to underserved
              communities in Azad Kashmir.
            </p>
            <p>
              Dr. Ejaz currently serves at DHQ Hospital, Bagh, and also
              runs a private clinic in Muzaffarabad, offering accessible
              and personalized orthopaedic surgical care to patients across
              the region.
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Experience and Qualifications
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-sm flex gap-3">
              <GraduationCap className="text-teal-700 shrink-0" size={22} />
              <div>
                <p className="font-semibold text-gray-900">MBBS</p>
                <p className="text-sm text-gray-600 mt-1">
                  Ayub Medical College, Abbottabad
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm flex gap-3">
              <Award className="text-teal-700 shrink-0" size={22} />
              <div>
                <p className="font-semibold text-gray-900">
                  Orthopaedic Surgery Specialization
                </p>
                <p className="text-sm text-gray-600 mt-1">PMDC Certified</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm flex gap-3">
              <Building2 className="text-teal-700 shrink-0" size={22} />
              <div>
                <p className="font-semibold text-gray-900">
                  Former Registrar
                </p>
                <p className="text-sm text-gray-600 mt-1">PIMS, Islamabad</p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm flex gap-3">
              <Stethoscope className="text-teal-700 shrink-0" size={22} />
              <div>
                <p className="font-semibold text-gray-900">
                  Former Resident Surgeon
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  H.H. Sheikh Khalifa Bin Zayed Hospital, A.K. CMH
                  Muzaffarabad
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm flex gap-3">
              <Building2 className="text-teal-700 shrink-0" size={22} />
              <div>
                <p className="font-semibold text-gray-900">
                  Former Medical Officer
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  THQ Kel and DHQ Neelum
                </p>
              </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm flex gap-3">
              <HeartPulse className="text-teal-700 shrink-0" size={22} />
              <div>
                <p className="font-semibold text-gray-900">
                  Currently Serving
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  DHQ Hospital, Bagh
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Comprehensive orthopaedic surgical and non-surgical care for
            patients of all ages, combining modern techniques with
            compassionate treatment.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-3">
                <Bone className="text-teal-700" size={20} />
              </div>
              <p className="font-semibold text-gray-900">
                Fracture and Trauma Care
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Emergency and planned management of bone fractures and
                injuries.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-3">
                <Activity className="text-teal-700" size={20} />
              </div>
              <p className="font-semibold text-gray-900">
                Joint Pain Treatment
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Diagnosis and management of knee, hip, shoulder, and other
                joint conditions.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-3">
                <HeartPulse className="text-teal-700" size={20} />
              </div>
              <p className="font-semibold text-gray-900">Spine Care</p>
              <p className="text-sm text-gray-600 mt-1">
                Assessment and treatment of back pain and spinal conditions.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-3">
                <Dumbbell className="text-teal-700" size={20} />
              </div>
              <p className="font-semibold text-gray-900">Sports Injuries</p>
              <p className="text-sm text-gray-600 mt-1">
                Treatment for ligament, tendon, and muscle injuries.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-3">
                <Bone className="text-teal-700" size={20} />
              </div>
              <p className="font-semibold text-gray-900">
                Bone Deformity Correction
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Evaluation and treatment planning for congenital and
                acquired deformities.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-3">
                <ClipboardCheck className="text-teal-700" size={20} />
              </div>
              <p className="font-semibold text-gray-900">
                Post-Surgical Care
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Follow-up and rehabilitation guidance after orthopaedic
                surgery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gradient-to-b from-teal-50 to-white py-16 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            For appointments, queries, or emergencies, reach out directly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="tel:03007582959"
              className="bg-teal-700 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-800 transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={16} />
              Call: 0300-7582959
            </Link>
            <Link
              href="/appointment"
              className="border border-teal-700 text-teal-700 px-6 py-3 rounded-full font-medium hover:bg-teal-50 transition-colors"
            >
              Book an Appointment
            </Link>
          </div>

          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-left space-y-4">
            <div className="flex gap-3">
              <MapPin className="text-teal-700 shrink-0 mt-0.5" size={18} />
              <div>
                <p className="font-semibold text-gray-900 text-sm">
                  Private Clinic
                </p>
                <p className="text-sm text-gray-600">
                  Usman Plaza, Basement, Opposite H.H. Sheikh Khalifa Bin
                  Zayed Hospital A.K. CMH Muzaffarabad
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="text-teal-700 shrink-0 mt-0.5" size={18} />
              <div>
                <p className="font-semibold text-gray-900 text-sm">
                  Clinic Timing
                </p>
                <p className="text-sm text-gray-600">
                  Friday and Saturday: 10:00 AM to 5:00 PM
                </p>
                <p className="text-sm text-gray-600">
                  Sunday to Thursday: 6:00 PM to 8:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
