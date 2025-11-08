export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            SGuard
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Advanced Discord moderation bot with AI-powered content analysis to keep your server safe
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg">
              Add to Discord
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
            </button>
            
            <button className="group border-2 border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
              View Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Features</h2>
            <p className="text-lg text-gray-600">Everything you need to moderate your Discord server</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Moderation</h3>
              <p className="text-gray-600">Advanced AI-powered content analysis to detect toxic behavior automatically</p>
            </div>
            
            <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Real-time Processing</h3>
              <p className="text-gray-600">Instant message processing and immediate action on rule violations</p>
            </div>
            
            <div className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Server Protection</h3>
              <p className="text-gray-600">Comprehensive protection against spam, raids, and unwanted content</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Trusted by Discord Communities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Servers Protected</div>
            </div>
            
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
              <div className="text-gray-600">Messages Moderated</div>
            </div>
            
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}