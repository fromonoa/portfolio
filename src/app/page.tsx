export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Willkommen in meinem Portfolio
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Hier finden Sie eine Übersicht meiner Projekte, Fähigkeiten und Erfahrungen.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Featured Project Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Neueste Projekte</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Entdecken Sie meine aktuellsten Arbeiten und Projekte.
                </p>
              </div>
            </div>

            {/* Skills Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Fähigkeiten</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Lernen Sie mehr über meine technischen Fähigkeiten und Expertise.
                </p>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Kontakt</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Nehmen Sie Kontakt mit mir auf für potenzielle Zusammenarbeit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
