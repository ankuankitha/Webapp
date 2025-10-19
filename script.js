const { useState, useEffect, useMemo } = React;

// Icons as SVG components
const Search = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.3-4.3"/>
    </svg>
);

const Building2 = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
        <path d="M9 22v-4h6v4"/>
        <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>
    </svg>
);

const Filter = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
    </svg>
);

const X = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 6 6 18M6 6l12 12"/>
    </svg>
);

const Globe = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
        <path d="M2 12h20"/>
    </svg>
);

const TrendingUp = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
    </svg>
);

const Star = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
);

const Briefcase = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="20" height="14" x="2" y="7" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
);

const MapPin = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
        <circle cx="12" cy="10" r="3"/>
    </svg>
);

const Calendar = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
        <line x1="16" x2="16" y1="2" y2="6"/>
        <line x1="8" x2="8" y1="2" y2="6"/>
        <line x1="3" x2="21" y1="10" y2="10"/>
    </svg>
);

const Users = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
);

const ChevronRight = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m9 18 6-6-6-6"/>
    </svg>
);

// Mock data
const mockCompanies = [
    { id: 1, name: "TechCorp Solutions", location: "San Francisco, USA", industry: "Technology", employees: 250, founded: 2015, revenue: "$50M", description: "Leading AI and Machine Learning solutions provider", rating: 4.8, growth: "+25%", logo: "🚀" },
    { id: 2, name: "GreenEnergy Inc", location: "Austin, USA", industry: "Energy", employees: 180, founded: 2018, revenue: "$35M", description: "Sustainable renewable energy solutions", rating: 4.6, growth: "+18%", logo: "⚡" },
    { id: 3, name: "FinanceHub", location: "New York, USA", industry: "Finance", employees: 420, founded: 2012, revenue: "$120M", description: "Digital banking and investment platform", rating: 4.9, growth: "+30%", logo: "💰" },
    { id: 4, name: "HealthTech Pro", location: "Boston, USA", industry: "Healthcare", employees: 310, founded: 2016, revenue: "$75M", description: "Innovative healthcare technology solutions", rating: 4.7, growth: "+22%", logo: "🏥" },
    { id: 5, name: "EduLearn Global", location: "London, UK", industry: "Education", employees: 150, founded: 2019, revenue: "$25M", description: "Online learning platform for professionals", rating: 4.5, growth: "+35%", logo: "📚" },
    { id: 6, name: "RetailMart Systems", location: "Chicago, USA", industry: "Retail", employees: 890, founded: 2010, revenue: "$200M", description: "E-commerce and retail management systems", rating: 4.4, growth: "+15%", logo: "🛒" },
    { id: 7, name: "CloudNet Services", location: "Seattle, USA", industry: "Technology", employees: 520, founded: 2014, revenue: "$95M", description: "Cloud infrastructure and DevOps solutions", rating: 4.8, growth: "+28%", logo: "☁️" },
    { id: 8, name: "BioPharm Labs", location: "Cambridge, UK", industry: "Healthcare", employees: 280, founded: 2017, revenue: "$60M", description: "Biotechnology research and development", rating: 4.6, growth: "+20%", logo: "🧬" },
    { id: 9, name: "AutoDrive Tech", location: "Detroit, USA", industry: "Automotive", employees: 650, founded: 2013, revenue: "$150M", description: "Autonomous vehicle technology", rating: 4.7, growth: "+32%", logo: "🚗" },
    { id: 10, name: "FoodChain Solutions", location: "Portland, USA", industry: "Food & Beverage", employees: 190, founded: 2020, revenue: "$30M", description: "Farm-to-table supply chain management", rating: 4.5, growth: "+40%", logo: "🍕" },
    { id: 11, name: "MediaStream Plus", location: "Los Angeles, USA", industry: "Entertainment", employees: 340, founded: 2015, revenue: "$80M", description: "Digital content streaming platform", rating: 4.6, growth: "+24%", logo: "🎬" },
    { id: 12, name: "SecureBank Digital", location: "Singapore", industry: "Finance", employees: 480, founded: 2011, revenue: "$140M", description: "Cybersecurity for financial institutions", rating: 4.9, growth: "+27%", logo: "🔒" }
];

// Main Component
function CompaniesDirectory() {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedIndustry, setSelectedIndustry] = useState('all');
    const [showFilters, setShowFilters] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        setTimeout(() => {
            setCompanies(mockCompanies);
            setLoading(false);
        }, 1000);
    }, []);

    const industries = useMemo(() => {
        const unique = [...new Set(companies.map(c => c.industry))];
        return ['all', ...unique.sort()];
    }, [companies]);

    const filteredCompanies = useMemo(() => {
        return companies.filter(company => {
            const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                company.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesIndustry = selectedIndustry === 'all' || company.industry === selectedIndustry;
            return matchesSearch && matchesIndustry;
        });
    }, [companies, searchTerm, selectedIndustry]);

    const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);

    const paginatedCompanies = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        return filteredCompanies.slice(start, start + itemsPerPage);
    }, [filteredCompanies, currentPage]);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedIndustry]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-20 h-20 border-4 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                    <h2 className="text-2xl font-bold text-white mb-2">Loading Companies</h2>
                    <p className="text-purple-300">Discovering amazing businesses...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20"></div>
                
                <div className="relative max-w-7xl mx-auto px-4 py-16">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-2xl mb-6">
                            <div className="w-12 h-12 text-white"><Building2 /></div>
                        </div>
                        <h1 className="text-6xl font-black text-white mb-4">
                            Discover Top <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Companies</span>
                        </h1>
                        <p className="text-xl text-purple-200 max-w-2xl mx-auto">
                            Explore leading businesses across industries and connect with innovation
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto mb-8">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur opacity-50"></div>
                            <div className="relative bg-white/10 rounded-2xl p-2 flex items-center">
                                <div className="w-6 h-6 text-white ml-4"><Search /></div>
                                <input
                                    type="text"
                                    placeholder="Search companies by name or description..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="flex-1 bg-transparent text-white placeholder-purple-300 px-4 py-3 focus:outline-none text-lg"
                                />
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition flex items-center gap-2"
                                >
                                    <div className="w-5 h-5"><Filter /></div>
                                    Filters
                                </button>
                            </div>
                        </div>

                        {showFilters && (
                            <div className="mt-4 bg-white/10 rounded-2xl p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-white font-semibold text-lg">Filter by Industry</h3>
                                    <button onClick={() => setShowFilters(false)}>
                                        <div className="w-5 h-5 text-white"><X /></div>
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {industries.map(industry => (
                                        <button
                                            key={industry}
                                            onClick={() => setSelectedIndustry(industry)}
                                            className={`px-4 py-2 rounded-xl font-medium transition ${
                                                selectedIndustry === industry
                                                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                                                    : 'bg-white/10 text-white hover:bg-white/20'
                                            }`}
                                        >
                                            {industry === 'all' ? 'All Industries' : industry}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                        <div className="bg-white/10 rounded-xl p-6 text-center">
                            <div className="w-8 h-8 text-pink-400 mx-auto mb-2"><Building2 /></div>
                            <div className="text-3xl font-bold text-white">{filteredCompanies.length}</div>
                            <div className="text-purple-300">Companies</div>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 text-center">
                            <div className="w-8 h-8 text-purple-400 mx-auto mb-2"><Globe /></div>
                            <div className="text-3xl font-bold text-white">{industries.length - 1}</div>
                            <div className="text-purple-300">Industries</div>
                        </div>
                        <div className="bg-white/10 rounded-xl p-6 text-center">
                            <div className="w-8 h-8 text-blue-400 mx-auto mb-2"><TrendingUp /></div>
                            <div className="text-3xl font-bold text-white">+24%</div>
                            <div className="text-purple-300">Avg Growth</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                {paginatedCompanies.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="w-20 h-20 text-white/20 mx-auto mb-4"><Building2 /></div>
                        <h3 className="text-2xl font-bold text-white mb-2">No companies found</h3>
                        <p className="text-purple-300">Try adjusting your search or filters</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {paginatedCompanies.map((company) => (
                                <div
                                    key={company.id}
                                    className="group relative bg-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition"></div>
                                    <div className="relative p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center text-2xl">
                                                    {company.logo}
                                                </div>
                                                <div>
                                                    <h3 className="text-white font-bold text-lg group-hover:text-pink-400 transition">
                                                        {company.name}
                                                    </h3>
                                                    <div className="flex items-center gap-1 text-yellow-400">
                                                        <div className="w-4 h-4"><Star /></div>
                                                        <span className="text-sm font-semibold">{company.rating}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                                                <div className="w-3 h-3"><TrendingUp /></div>
                                                {company.growth}
                                            </div>
                                        </div>

                                        <p className="text-purple-200 text-sm mb-4 line-clamp-2">
                                            {company.description}
                                        </p>

                                        <div className="space-y-2 mb-4">
                                            <div className="flex items-center gap-2 text-purple-300 text-sm">
                                                <div className="w-4 h-4 text-pink-400"><Briefcase /></div>
                                                <span>{company.industry}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-purple-300 text-sm">
                                                <div className="w-4 h-4 text-purple-400"><MapPin /></div>
                                                <span>{company.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-purple-300 text-sm">
                                                <div className="w-4 h-4 text-blue-400"><Calendar /></div>
                                                <span>Founded {company.founded}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                            <div className="flex items-center gap-4">
                                                <div>
                                                    <div className="text-xs text-purple-300">Employees</div>
                                                    <div className="text-white font-bold flex items-center gap-1">
                                                        <div className="w-4 h-4"><Users /></div>
                                                        {company.employees}
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="text-xs text-purple-300">Revenue</div>
                                                    <div className="text-green-400 font-bold">{company.revenue}</div>
                                                </div>
                                            </div>
                                            <div className="w-6 h-6 text-white group-hover:translate-x-1 transition"><ChevronRight /></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-3">
                                <button
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    className="px-6 py-3 bg-white/10 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition"
                                >
                                    Previous
                                </button>
                                <div className="flex gap-2">
                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i + 1}
                                            onClick={() => setCurrentPage(i + 1)}
                                            className={`w-12 h-12 rounded-xl font-bold transition ${
                                                currentPage === i + 1
                                                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                                                    : 'bg-white/10 text-white hover:bg-white/20'
                                            }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                    disabled={currentPage === totalPages}
                                    className="px-6 py-3 bg-white/10 text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition"
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

// Render the app
ReactDOM.render(<CompaniesDirectory />, document.getElementById('root'));