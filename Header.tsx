import { Shield, ShieldAlert, BadgeInfo, Anchor } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white border-b-2 border-blue-900">
      <div className="container mx-auto px-4 max-w-7xl py-6 flex items-center justify-between">
        <div className="flex items-center space-x-6 w-1/2">
          {/* Emblem Placeholder (Double-headed eagle styled) */}
          <div className="w-20 h-24 flex-shrink-0 bg-yellow-600 rounded-lg flex items-center justify-center text-white border-2 border-yellow-800 shadow-md">
             <Shield className="w-12 h-12" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 font-serif uppercase tracking-wide leading-tight">
              Национальный <br />
              антитеррористический <br />
              комитет
            </h1>
          </div>
        </div>

        {/* Agency Links */}
        <div className="hidden lg:flex items-center space-x-8 text-blue-900 font-bold">
          <a href="#" className="flex flex-col items-center hover:text-blue-700 transition">
            <ShieldAlert size={32} className="mb-1" />
            <span className="text-sm">ФСБ</span>
          </a>
          <a href="#" className="flex flex-col items-center hover:text-blue-700 transition">
            <BadgeInfo size={32} className="mb-1" />
            <span className="text-sm">МВД</span>
          </a>
          <a href="#" className="flex flex-col items-center hover:text-blue-700 transition">
            <Shield size={32} className="mb-1" />
            <span className="text-sm">СК</span>
          </a>
          <a href="#" className="flex flex-col items-center hover:text-blue-700 transition">
            <Anchor size={32} className="mb-1" />
            <span className="text-sm">МЧС</span>
          </a>
        </div>
      </div>
    </header>
  );
}
