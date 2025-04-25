
import React from 'react';

const StackSection = () => {
  return (
    <section id="stack" className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Co otrzymasz w ramach oferty specjalnej?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Pełna wartość pakietu przekracza 3800 zł. Teraz wszystko to w jednej niskiej cenie!
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          <div className="space-y-6">
            {/* Plan Grow */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex-grow">
                <h3 className="font-bold text-lg">Plan Grow</h3>
                <p className="text-gray-700">Miesięczna subskrypcja z pełnym dostępem do wszystkich modułów</p>
              </div>
              <div className="text-right">
                <div className="line-through text-gray-500">269 zł/m</div>
                <div className="text-xl font-bold text-primary">188 zł/m</div>
              </div>
            </div>
            
            {/* Webinar Live */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex-grow">
                <h3 className="font-bold text-lg">Webinar Live 60 min</h3>
                <p className="text-gray-700">Personalizowana sesja z ekspertem BizMundo.ai</p>
                <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded mt-1">GRATIS</div>
              </div>
              <div className="text-right">
                <div className="line-through text-gray-500">499 zł</div>
                <div className="text-xl font-bold text-green-600">0 zł</div>
              </div>
            </div>
            
            {/* Extra credits */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex-grow">
                <h3 className="font-bold text-lg">Pakiet 50k ekstra kredytów</h3>
                <p className="text-gray-700">Dodatkowe kredyty AI na dowolne zadania</p>
                <div className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded mt-1">GRATIS</div>
              </div>
              <div className="text-right">
                <div className="line-through text-gray-500">350 zł</div>
                <div className="text-xl font-bold text-green-600">0 zł</div>
              </div>
            </div>
            
            {/* Free trial */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex-grow">
                <h3 className="font-bold text-lg">14-dniowy okres próbny</h3>
                <p className="text-gray-700">Testuj wszystkie funkcje bez zobowiązań</p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-green-600">0 zł</div>
              </div>
            </div>
            
            {/* Total value */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h3 className="font-bold text-xl">Łączna wartość</h3>
                <div className="text-lg text-primary font-bold">Płacisz tylko 188 zł/m</div>
              </div>
              <div className="text-right">
                <div className="line-through text-gray-500">3 825 zł</div>
                <div className="text-2xl font-bold">188 zł/m</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackSection;
