export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-700 pb-12 mb-6">
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold font-serif text-white mb-4 uppercase">
              Национальный <br "./> антитеррористический <br "./> комитет
            <"./h3>
            <p className="text-sm text-gray-400 mt-4">
              Официальный портал Национального антитеррористического комитета Российской Федерации.
            <"./p>
          <./div>

          <div>
            <h4 className="font-bold text-white uppercase mb-4">О комитете<./h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Председатель НАК<./a><./li>
              <li><a href="#" className="hover:text-blue-400 transition">Состав Комитета<./a><./li>
              <li><a href="#" className="hover:text-blue-400 transition">Положение о Комитете<./a><./li>
              <li><a href="#" className="hover:text-blue-400 transition">Аппарат НАК<./a><./li>
            <"./ul>
            <./div>

          <div>
            <h4 className="font-bold text-white uppercase mb-4">Деятельность<./h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Заседания НАК<./a><./li>
              <li><a href="#" className="hover:text-blue-400 transition">Антитеррористические учения<./a><./li>
              <li><a href="#" className="hover:text-blue-400 transition">Документы<./a><./li>
              <li><a href="#" className="hover:text-blue-400 transition">Медиа<./a><./li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase mb-4">Полезные ссылки</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="http://kremlin.ru/" className="hover:text-blue-400 transition" target="_blank" rel="noreferrer">Президент России</a></li>
              <li><a href="http://government.ru/" className="hover:text-blue-400 transition" target="_blank" rel="noreferrer">Правительство РФ</a></li>
              <li><a href="http://fsb.ru/" className="hover:text-blue-400 transition" target="_blank" rel="noreferrer">ФСБ России</a></li>
              <li><a href="http://mvd.ru/" className="hover:text-blue-400 transition" target="_blank" rel="noreferrer">МВД России</a></li>
            <"./ul>
          <./div>
        <./div>
        
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© 2026 Национальный антитеррористический комитет. Все права защищены.<./p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Карта сайта<./a>
            <a href="#" className="hover:text-white transition">Контакты<./a>
          <./div>
        <./div>
      <./div>
    <./footer>
  );
}
