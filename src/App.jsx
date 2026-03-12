import React from 'react'

// Шкалы оценок
const SCALES = {
  male: ['sub5', 'ltn', 'mtn', 'htn', 'chad', 'тру адам'],
  female: ['sub 3', 'sub 5', 'ltn', 'mtb', 'stacy', 'true eve']
}

// Тестовые данные с гендером и рейтингом
const PROFILES = [
  { id: 1, name: "Арнольд", age: 17, gender: 'male', rating: 9.8, photo: "https://via.placeholder.com/400x500" },
  { id: 2, name: "Елизавета", age: 16, gender: 'female', rating: 9.9, photo: "https://via.placeholder.com/400x500" },
  { id: 3, name: "Максим", age: 18, gender: 'male', rating: 7.2, photo: "https://via.placeholder.com/400x500" },
  { id: 4, name: "Диана", age: 17, gender: 'female', rating: 8.5, photo: "https://via.placeholder.com/400x500" },
]

function App() {
  // Сортируем для ТОПа (просто для визуализации)
  const topProfiles = [...PROFILES].sort((a, b) => b.rating - a.rating);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-200 font-sans pb-40">
      
      {/* HEADER */}
      <header className="py-12 px-4 text-center">
        <h1 className="text-6xl font-black tracking-tighter uppercase bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          LooxmaxZs
        </h1>
        <div className="flex justify-center gap-4 mt-4">
          <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.2em] text-slate-400">
            Зареченская школа
          </span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        
        {/* СЕКЦИЯ ТОП-1 (Лидер рейтинга) */}
        <section className="mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-amber-400 mb-8 text-center flex items-center justify-center gap-2">
            <span className="w-8 h-[1px] bg-amber-400/30"></span>
            👑 Текущий Лидер 👑
            <span className="w-8 h-[1px] bg-amber-400/30"></span>
          </h2>
          <div className="flex justify-center">
             <div className="relative p-1 rounded-[3rem] bg-gradient-to-tr from-amber-500 to-yellow-200 shadow-[0_0_50px_rgba(251,191,36,0.2)]">
                <div className="bg-[#070b14] rounded-[2.8rem] p-2">
                   <img src={topProfiles[0].photo} className="w-48 h-48 rounded-[2.5rem] object-cover" />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black font-black px-4 py-1 rounded-full text-sm">
                   {topProfiles[0].name} — {topProfiles[0].rating}
                </div>
             </div>
          </div>
        </section>

        {/* ОСНОВНАЯ СЕТКА */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {PROFILES.map((user) => {
            const isFemale = user.gender === 'female';
            const buttons = isFemale ? SCALES.female : SCALES.male;
            
            return (
              <div key={user.id} className="group relative">
                {/* КАРТОЧКА */}
                <div className={`relative overflow-hidden backdrop-blur-2xl border rounded-[2.5rem] p-4 transition-all duration-500 
                  ${isFemale 
                    ? 'bg-pink-500/[0.03] border-pink-500/20 hover:border-pink-500/50 hover:bg-pink-500/[0.07]' 
                    : 'bg-indigo-500/[0.03] border-indigo-500/20 hover:border-indigo-500/50 hover:bg-indigo-500/[0.07]'
                  }`}>
                  
                  {/* ФОТО */}
                  <div className="relative h-80 w-full mb-6 overflow-hidden rounded-[2rem]">
                    <img src={user.photo} alt={user.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md border 
                      ${isFemale ? 'bg-pink-500/20 border-pink-500/40 text-pink-200' : 'bg-indigo-500/20 border-indigo-500/40 text-indigo-200'}`}>
                      {user.gender}
                    </div>
                  </div>

                  {/* ИНФО */}
                  <div className="px-2 mb-6 text-center">
                    <h3 className="text-2xl font-bold text-white tracking-tight">{user.name}, {user.age}</h3>
                  </div>

                  {/* КНОПКИ ОЦЕНКИ */}
                  <div className="grid grid-cols-3 gap-2">
                    {buttons.map((label) => (
                      <button 
                        key={label} 
                        className={`py-3 px-1 text-[9px] font-black uppercase tracking-tighter border rounded-2xl transition-all active:scale-90
                        ${isFemale 
                          ? 'bg-pink-500/5 border-pink-500/10 text-pink-300/60 hover:bg-pink-500 hover:text-white hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]' 
                          : 'bg-indigo-500/5 border-indigo-500/10 text-indigo-300/60 hover:bg-indigo-500 hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* КНОПКА ТГ */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
        <a href="https://t.me/твой_ник" className="flex items-center gap-4 px-8 py-4 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2rem] hover:bg-white/10 transition-all hover:scale-105 active:scale-95 group">
           <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
           <span className="text-sm font-bold uppercase tracking-widest">Добавить анкету</span>
        </a>
      </div>
    </div>
  )
}

export default App