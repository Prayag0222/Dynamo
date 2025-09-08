'use client';
import Navbar from '@/components/navbar/Navbar';
import React, { useState, useMemo, useEffect } from 'react';

// --- SVG Icons ---
// Using inline SVGs for icons to avoid external dependencies and improve loading.
const RangeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const SpeedIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const CloseIcon = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>;

// --- Mock Data ---
const scooterData = [
    { id: 1, name: "X1", range: 120, speed: 70, price: 85000, image: "https://dynamoindia.com/wp-content/uploads/2025/01/x1.jpg", description: "The Dynamo X1 is the perfect blend of performance and style, designed for the modern urban commuter.", rating: 4.5, motor: "2500W BLDC", chargingTime: "5-6 Hours" },
    { id: 2, name: "X2", range: 150, speed: 80, price: 95000, image: "https://dynamoindia.com/wp-content/uploads/2025/01/Layer-0.png", description: "Experience unparalleled power and range with the top-of-the-line Dynamo Pro.", rating: 4.8, motor: "3000W BLDC", chargingTime: "4-5 Hours" },
    { id: 3, name: "LIMA", range: 90, speed: 55, price: 65000, image: "https://dynamoindia.com/wp-content/uploads/2025/01/lima.jpg", description: "Lightweight, agile, and affordable. The Dynamo Lite is your ideal city companion.", rating: 4.2, motor: "1800W BLDC", chargingTime: "6-7 Hours" },
    { id: 4, name: "RX4 (High Speed)", range: 110, speed: 65, price: 78000, image: "https://dynamoindia.com/wp-content/uploads/2025/01/rx4.jpg", description: "Futuristic design meets practical performance in the eye-catching Dynamo Neo.", rating: 4.4, motor: "2200W BLDC", chargingTime: "5-6 Hours" },
    { id: 5, name: "Dual", range: 140, speed: 75, price: 105000, image: "https://dynamoindia.com/wp-content/uploads/2025/01/dual.jpg", description: "Push the limits with the Dynamo Edge, built for those who demand more.", rating: 4.7, motor: "2800W BLDC", chargingTime: "4-5 Hours" },
    { id: 6, name: "X3T", range: 180, speed: 95, price: 120000, image: "https://dynamoindia.com/wp-content/uploads/2025/01/x3.jpg", description: "The ultimate electric scooter with maximum range, speed, and luxury features.", rating: 4.9, motor: "3500W BLDC", chargingTime: "3-4 Hours" },
    { id: 7, name: "X4", range: 130, speed: 72, price: 99000, image: "https://dynamoindia.com/wp-content/uploads/2025/01/x4.png", description: "A robust and reliable scooter that can handle any weather, any road.", rating: 4.6, motor: "2700W BLDC", chargingTime: "5-6 Hours" },
    { id: 8, name: "VX1", range: 100, speed: 60, price: 70000, image: "https://dynamoindia.com/wp-content/uploads/2025/01/vx1.jpg", description: "Ignite your daily commute with the zippy and efficient Dynamo Spark.", rating: 4.3, motor: "2000W BLDC", chargingTime: "6-7 Hours" },
    { id: 9, name: "Smiley", range: 85, speed: 50, price: 60000, image: "https://dynamoindia.com/wp-content/uploads/2025/01/smily.png", description: "The Dynamo Smiley brings joy to every ride with its cheerful design and efficient performance.", rating: 4.1, motor: "1500W BLDC", chargingTime: "5-6 Hours" },
    { id: 10, name: "Infinity+", range: 160, speed: 85, price: 115000, image: "https://dynamoindia.com/wp-content/uploads/2025/01/infinity.jpg", description: "Infinity+ redefines long-range electric mobility with premium features and unmatched comfort.", rating: 4.8, motor: "3200W BLDC", chargingTime: "4-5 Hours" },
    { id: 11, name: "Flyer", range: 95, speed: 58, price: 72000, image: "https://dynamoindia.com/wp-content/uploads/2025/01/flyer.jpg", description: "Flyer is your lightweight, zippy companion for city commutes and quick getaways.", rating: 4.2, motor: "1800W BLDC", chargingTime: "5-6 Hours" },
    { id: 12, name: "XL", range: 140, speed: 78, price: 99000, image: "https://dynamoindia.com/wp-content/uploads/2025/01/luna.png", description: "The XL is built for those who want more—more power, more range, and more style.", rating: 4.5, motor: "2800W BLDC", chargingTime: "4-5 Hours" },

];

// --- Components ---



const ScooterCard = ({ scooter, onDetailsClick, style }) => (
    <div style={style} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-purple-500/30 hover:border-purple-500/50 hover:-translate-y-2 group">
        <div className="relative">
            <img src={scooter.image} alt={scooter.name} className="w-full h-full object-cover" />
            <div className="absolute top-0 right-0 m-3 bg-slate-900 bg-opacity-70 rounded-full px-3 py-1 text-sm font-semibold">
                ⭐ {scooter.rating}
            </div>
        </div>
        <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-3">{scooter.name}</h2>
            <div className="flex flex-col space-y-2 text-gray-300 mb-5">
                <span className="flex items-center"><RangeIcon /> {scooter.range} km Range</span>
                <span className="flex items-center"><SpeedIcon /> {scooter.speed} km/h Top Speed</span>
            </div>
            <p className="text-white font-bold text-3xl mb-6">₹{scooter.price.toLocaleString('en-IN')}</p>
            <div className="flex">
                <button onClick={() => onDetailsClick(scooter)} className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 rounded-xl hover:opacity-90 transition-opacity">View Details</button>
            </div>
        </div>
    </div>
);

const ScooterModal = ({ scooter, onClose }) => {
    if (!scooter) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] p-10 transition-opacity" onClick={onClose}>
            <div className="bg-slate-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative border border-slate-700 shadow-2xl shadow-purple-500/20" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"><CloseIcon /></button>
                <div className="grid md:grid-cols-2 h-full gap-0">
                    <img src={scooter.image} alt={scooter.name} className="w-full h-full object-cover md:rounded-l-2xl" />
                    <div className="p-10">
                        <h2 className="text-4xl font-extrabold text-white mb-3">{scooter.name}</h2>
                        <div className="mb-5 text-lg font-semibold text-purple-400">⭐ {scooter.rating} / 5.0</div>
                        <p className="text-gray-300 mb-6">{scooter.description}</p>
                        <div className="space-y-3 mb-8">
                           <h3 className="text-xl font-bold text-white border-b border-slate-700 pb-2 mb-3">Specifications</h3>
                           <p className="flex justify-between"><strong>Range:</strong> <span className="text-cyan-300">{scooter.range} km</span></p>
                           <p className="flex justify-between"><strong>Top Speed:</strong> <span className="text-cyan-300">{scooter.speed} km/h</span></p>
                           <p className="flex justify-between"><strong>Price:</strong> <span className="text-cyan-300">₹{scooter.price.toLocaleString('en-IN')}</span></p>
                           <p className="flex justify-between"><strong>Charging Time:</strong> <span className="text-cyan-300">{scooter.chargingTime}</span></p>
                           <p className="flex justify-between"><strong>Motor:</strong> <span className="text-cyan-300">{scooter.motor}</span></p>
                        </div>
                        <button className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold py-4 rounded-xl text-lg hover:opacity-90 transition-opacity">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Animated background component
const AnimatedBackground = () => (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
);


// Main App Component
export default function App() {
    const [sortKey, setSortKey] = useState('price-asc');
    const [selectedScooter, setSelectedScooter] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Trigger animations on load
        setIsLoaded(true);
    }, []);

    // --- SCROLL LOCK FIX ---
    // This effect locks the body scroll when a modal is open.
    useEffect(() => {
        const isModalOpen = !!selectedScooter;
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        // Cleanup function to restore scroll when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedScooter]); // Re-run when modal state changes

    const sortedScooters = useMemo(() => {
        return [...scooterData].sort((a, b) => {
            switch (sortKey) {
                case 'price-asc': return a.price - b.price;
                case 'price-desc': return b.price - a.price;
                case 'range': return b.range - a.range;
                case 'speed': return b.speed - a.speed;
                default: return 0;
            }
        });
    }, [sortKey]);
    
    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-purple-500 selection:text-white relative">
            <AnimatedBackground />
           <Navbar/>
            
            <main className="pt-32 pb-24 relative z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Section */}
                    <div className="text-center py-16">
                        <h1 className={`text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4 transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            The Future of Motion
                        </h1>
                        <p className={`text-lg text-gray-400 max-w-3xl mx-auto transition-all duration-700 ease-out delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                            Experience the thrill of electric. Our scooters blend cutting-edge technology with breathtaking design to redefine your urban journey.
                        </p>
                    </div>

                    {/* Filters and Sorting */}
                    <div className={`mb-12 flex justify-end transition-all duration-700 ease-out delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                       <div className="w-full md:w-auto">
                           <label htmlFor="sort-by" className="sr-only">Sort By</label>
                           <select
                               id="sort-by"
                               value={sortKey}
                                onChange={(e) => setSortKey(e.target.value)}
                                className="bg-slate-800 border border-slate-700 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-3"
                            >
                                <option value="price-asc">Sort by Price: Low to High</option>
                                <option value="price-desc">Sort by Price: High to Low</option>
                                <option value="range">Sort by Range: High to Low</option>
                                <option value="speed">Sort by Speed: High to Low</option>
                            </select>
                        </div>
                    </div>

                    {/* Scooters Grid */}
                    <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {sortedScooters.map((scooter, index) => (
                            <ScooterCard 
                                key={scooter.id} 
                                scooter={scooter} 
                                onDetailsClick={setSelectedScooter}
                                style={{ transitionDelay: `${index * 100}ms`}}
                                className={`transition-all duration-500 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            />
                        ))}
                    </div>
                </div>
            </main>
            
            <ScooterModal scooter={selectedScooter} onClose={() => setSelectedScooter(null)} />
        </div>
    );
}

