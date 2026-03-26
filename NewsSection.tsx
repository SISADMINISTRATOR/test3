import { FileText, PlayCircle, BookOpen } from 'lucide-react';

const newsItems = [
  {
    date: '10 Фев 2026',
    title: 'Утвержден план работы НАК на 2026 год',
    category: 'Решения НАК'
  },
  {
    date: '08 Фев 2026',
    title: 'В Республике Дагестан проведены плановые антитеррористические учения',
    category: 'Учения НАК'
  },
  {
    date: '05 Фев 2026',
    title: 'Методические рекомендации по антитеррористической защищенности объектов',
    category: 'Документы'
  }
];

export default function NewsSection() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main News Block */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6 border-b-2 border-blue-900 pb-2">
              <h2 className="text-2xl font-bold font-serif text-gray-900 uppercase">Последние новости</h2>
              <a href="#" className="text-sm text-blue-700 hover:underline font-semibold">Все новости</a>
            </div>
            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <div key={index} className="flex border-b border-gray-100 pb-6 group cursor-pointer">
                  <div className="w-24 flex-shrink-0 text-sm font-bold text-blue-900 pt-1">
                    {item.date}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-gray-800 group-hover:text-blue-700 transition">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links Sidebar */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase border-b border-gray-300 pb-2">
                Ресурсы
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="flex items-center text-gray-700 hover:text-blue-700 font-medium group">
                    <FileText className="mr-3 text-blue-500 group-hover:text-blue-700" size={20} />
                    Нормативная база
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-gray-700 hover:text-blue-700 font-medium group">
                    <BookOpen className="mr-3 text-blue-500 group-hover:text-blue-700" size={20} />
                    Библиотека
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center text-gray-700 hover:text-blue-700 font-medium group">
                    <PlayCircle className="mr-3 text-blue-500 group-hover:text-blue-700" size={20} />
                    Видеоматериалы
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-blue-900 rounded-lg p-6 shadow-sm text-white relative overflow-hidden">
               <div className="absolute right-[-20px] top-[-20px] opacity-10">
                 <FileText size={150} />
               </div>
               <h3 className="text-xl font-bold mb-2 relative z-10 uppercase">
                 Сообщить о терроризме
               </h3>
               <p className="text-sm text-blue-100 mb-4 relative z-10">
                 Если вы обладаете информацией о готовящемся террористическом акте, немедленно сообщите об этом.
               </p>
               <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-bold transition w-full relative z-10">
                 Номера телефонов доверия
               </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
