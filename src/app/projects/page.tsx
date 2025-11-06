export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Meine Projekte</h1>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Project Card 1 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Projekt 1</h3>
              <p className="mt-2 text-sm text-gray-500">
                Beschreibung des ersten Projekts...
              </p>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Projekt 2</h3>
              <p className="mt-2 text-sm text-gray-500">
                Beschreibung des zweiten Projekts...
              </p>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">Projekt 3</h3>
              <p className="mt-2 text-sm text-gray-500">
                Beschreibung des dritten Projekts...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}