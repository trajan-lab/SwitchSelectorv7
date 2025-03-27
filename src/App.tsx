import React, { useState } from 'react';
import { Network, Shield, Layers, Lock } from 'lucide-react';

// Switch data
const switches = [
  {
    id: 1,
    name: "Arista 720XP-96ZC2",
    portCount: "96",
    portSpeed: "80x 100M-2.5G, 16x 100M-5G",
    uplinks: "4x 25G, 2x 100G",
    poe: "60W per port",
    datasheet: "https://www.arista.com/assets/data/pdf/Datasheets/CCS-720XP-Datasheet.pdf",
    zeroTrust: true,
    stacking: true,
    macsec: true
  },
  {
    id: 2,
    name: "Arista 720XP-48ZC2",
    portCount: "48",
    portSpeed: "40x 100M-2.5G, 8x 100M-5G",
    uplinks: "4x 25G, 2x 100G",
    poe: "30W/60W per port",
    datasheet: "https://www.arista.com/assets/data/pdf/Datasheets/CCS-720XP-Datasheet.pdf",
    zeroTrust: true,
    stacking: true,
    macsec: true
  },
  {
    id: 3,
    name: "Arista 720XP-24ZY4",
    portCount: "24",
    portSpeed: "16x 100M-2.5G, 8x 100M-5G",
    uplinks: "4x 25G",
    poe: "30W/60W per port",
    datasheet: "https://www.arista.com/assets/data/pdf/Datasheets/CCS-720XP-Datasheet.pdf",
    zeroTrust: true,
    stacking: true,
    macsec: true
  },
  {
    id: 4,
    name: "Arista 720XP-48Y6",
    portCount: "48",
    portSpeed: "10M-1G",
    uplinks: "6x 25G",
    poe: "30W per port",
    datasheet: "https://www.arista.com/assets/data/pdf/Datasheets/CCS-720XP-Datasheet.pdf",
    zeroTrust: true,
    stacking: true,
    macsec: true
  },
  {
    id: 5,
    name: "Arista 720XP-24Y6",
    portCount: "24",
    portSpeed: "10M-1G",
    uplinks: "6x 25G",
    poe: "30W per port",
    datasheet: "https://www.arista.com/assets/data/pdf/Datasheets/CCS-720XP-Datasheet.pdf",
    zeroTrust: true,
    stacking: true,
    macsec: true
  },
  {
    id: 6,
    name: "Arista 720XP-48TXH-2C-S",
    portCount: "48",
    portSpeed: "1G/2.5G/5G/10G",
    uplinks: "4x25G, 2x 100G",
    poe: "90W per port",
    datasheet: "https://www.arista.com/assets/data/pdf/Datasheets/CCS-720XP-Datasheet.pdf",
    zeroTrust: true,
    stacking: true,
    macsec: true
  },
  {
    id: 7,
    name: "722XPM-48ZY8",
    portCount: "48",
    portSpeed: "mGig(100M - 2.5Gb)",
    uplinks: "8x25G ",
    poe: "90W",
    datasheet: "https://www.arista.com/assets/data/pdf/Datasheets/CCS-722XP-Datasheet.pdf",
    zeroTrust: null,
    stacking: null,
    macsec: true
  },
  {
    id: 8,
    name: "722XPM-48Y4",
    portCount: "48",
    portSpeed: "10M-1GbE)",
    uplinks: "4x 25G, 4 x10G",
    poe: "30W",
    datasheet: "https://www.arista.com/assets/data/pdf/Datasheets/CCS-722XP-Datasheet.pdf",
    zeroTrust: null,
    stacking: null,
    macsec: true
  },
  {
    id: 9,
    name: "722XPM-48Y4",
    portCount: "48",
    portSpeed: "10M-1GbE)",
    uplinks: "4x 25G, 4 x10G",
    poe: "30W",
    datasheet: "https://www.arista.com/assets/data/pdf/Datasheets/CCS-722XP-Datasheet.pdf",
    zeroTrust: null,
    stacking: null,
    macsec: true
  },
  {
    id: 10,
    name: "720DP-24S",
    portCount: "24",
    portSpeed: "24 x 1GigE (10M - 1G)E)",
    uplinks: "4x 10G",
    poe: "30W",
    datasheet: "https://www.arista.com/assets/data/pdf/Datasheets/CCS-720D-Datasheet.pdf",
    zeroTrust: false,
    stacking: null,
    macsec: false
  },
  {
    id: 11,
    name: "720DP-48S",
    portCount: "48",
    portSpeed: "48 x 1GigE (10M - 1G)",
    uplinks: "4x 10G",
    poe: "30W",
    datasheet: "https://www.arista.com/assets/data/pdf/Datasheets/CCS-720D-Datasheet.pdf",
    zeroTrust: true,
    stacking: null,
    macsec: false
  },
  {
    id: 12,
    name: "720DP-24ZS",
    portCount: "24",
    portSpeed: "24 x 2.5GigE (100M - 2.5G)",
    uplinks: "4x 10G",
    poe: "60W",
    datasheet: "https://www.arista.com/assets/data/pdf/Datasheets/CCS-720D-Datasheet.pdf",
    zeroTrust: true,
    stacking: null,
    macsec: false
  },
  {
    id: 13,
    name: "720DP-48ZS",
    portCount: "48",
    portSpeed: "48 x 2.5GigE (100M - 2.5G) ",
    uplinks: "4x 10G",
    poe: "60W",
    datasheet: "https://www.arista.com/assets/data/pdf/Datasheets/CCS-720D-Datasheet.pdf",
    zeroTrust: true,
    stacking: null,
    macsec: false
  },
  {
    id: 14,
    name: "720DT-24S",
    portCount: "24",
    portSpeed: "24 x 1GigE (10M - 1G)",
    uplinks: "4x 10G",
    poe: "0W",
    datasheet: "https://www.arista.com/assets/data/pdf/Datasheets/CCS-720D-Datasheet.pdf",
    zeroTrust: true,
    stacking: null,
    macsec: false
  },
  {
    id: 15,
    name: "720DT-48S",
    portCount: "48",
    portSpeed: "48 x 1GigE (10M - 1G)",
    uplinks: "4x 10G",
    poe: "0W",
    datasheet: "https://www.arista.com/assets/data/pdf/Datasheets/CCS-720D-Datasheet.pdf",
    zeroTrust: true,
    stacking: null,
    macsec: false
  },
  {
    id: 16,
    name: "720DF-48Y",
    portCount: "48",
    portSpeed: "48 x 1GigE (100M-1G)",
    uplinks: "4x 25G",
    poe: "0W",
    datasheet: "https://www.arista.com/assets/data/pdf/Datasheets/CCS-720D-Datasheet.pdf",
    zeroTrust: true,
    stacking: null,
    macsec: false
  },
  {
    id: 17,
    name: "720DF-48Y",
    portCount: "48",
    portSpeed: "48 x 1GigE (100M-1G)",
    uplinks: "4x 25G",
    poe: "0W",
    datasheet: "https://www.arista.com/assets/data/pdf/Datasheets/CCS-720D-Datasheet.pdf",
    zeroTrust: true,
    stacking: null,
    macsec: false
  },
];

// Filter options
const filterOptions = {
  portCount: ["All", "24", "48", "96"],
  portSpeed: ["All", "10M-1G", "100M-2.5G", "100M-5G", "1G/2.5G/5G/10G"],
  uplinks: ["All", "4x 25G", "6x 25G", "4x 25G, 2x 100G", "2x 100G, 4x 25G"],
  poe: ["All", "30W per port", "60W per port", "90W per port", "30W/60W per port"]
};

function App() {
  const [filters, setFilters] = useState({
    portCount: "All",
    portSpeed: "All",
    uplinks: "All",
    poe: "All"
  });

  const filteredSwitches = switches.filter(sw => {
    if (filters.portCount !== "All" && sw.portCount !== filters.portCount) return false;
    if (filters.portSpeed !== "All" && !sw.portSpeed.includes(filters.portSpeed)) return false;
    if (filters.uplinks !== "All" && sw.uplinks !== filters.uplinks) return false;
    if (filters.poe !== "All" && sw.poe !== filters.poe) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 p-4">
      {/* Header */}
      <header className="bg-white shadow-sm rounded-lg mb-8">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center">
            <Network className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Campus Switch Selector</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="grid grid-cols-4 gap-4">
            {Object.entries(filterOptions).map(([key, options]) => (
              <div key={key} className="w-full">
                <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </label>
                <select
                  value={filters[key as keyof typeof filters]}
                  onChange={(e) => setFilters({ ...filters, [key]: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                >
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* Switch Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSwitches.map((sw) => (
            <div key={sw.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{sw.name}</h3>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">Ports: <span className="font-medium">{sw.portCount}</span></p>
                <p className="text-sm text-gray-600">Speed: <span className="font-medium">{sw.portSpeed}</span></p>
                <p className="text-sm text-gray-600">Uplinks: <span className="font-medium">{sw.uplinks}</span></p>
                <p className="text-sm text-gray-600">PoE: <span className="font-medium">{sw.poe}</span></p>
                
                {/* Security Features */}
                <div className="flex flex-wrap gap-2 mt-4">
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${sw.zeroTrust ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    <Shield className="w-3 h-3" />
                    Zero Trust: {sw.zeroTrust ? 'Yes' : 'No'}
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${sw.stacking ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                    <Layers className="w-3 h-3" />
                    Stacking: {sw.stacking ? 'Yes' : 'No'}
                  </div>
                  {sw.macsec && (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-medium">
                      <Lock className="w-3 h-3" />
                      MACsec
                    </div>
                  )}
                </div>

                <div className="mt-4 flex justify-end">
                  <a 
                    href={sw.datasheet}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-flex items-center"
                  >
                    Datasheet
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;