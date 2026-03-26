import { Eye, MapPin, Search } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-gray-100 text-sm text-gray-700 border-b border-gray-200">
      <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center h-10">
        <div className="flex items-center space-x-6">
          <button className="flex items-center hover:text-blue-700 transition-colors">
            <MapPin size={16} className="mr-1" />
            <span>Выбрать регион</span>
          </button>
        </div>
        <div className="flex items-center space-x-6">
          <button className="flex items-center hover:text-blue-700 transition-colors">
            <Eye size={16} className="mr-1" />
            <span>Версия для слабовидящих</span>
          </button>
          <div className="flex items-center space-x-2 border-l border-gray-300 pl-4">
            <button className="font-bold hover:text-blue-700">Рус</button>
            <span className="text-gray-400">/</span>
            <button className="hover:text-blue-700">En</button>
          </div>
          <a href="#" className="hover:text-blue-700 border-l border-gray-300 pl-4">Контакты</a>
          <button className="hover:text-blue-700 border-l border-gray-300 pl-4">
             <Search size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
