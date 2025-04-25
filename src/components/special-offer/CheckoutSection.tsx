
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const CheckoutSection = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('annual');
  const [couponCode, setCouponCode] = useState('GROW30');

  // Prices
  const monthlyPrice = 269;
  const annualMonthlyPrice = 215; // 20% off for annual billing
  const discountPercent = 30;
  
  // Calculate prices with discount
  const discountedMonthlyPrice = Math.round(monthlyPrice * (1 - discountPercent / 100));
  const discountedAnnualMonthlyPrice = Math.round(annualMonthlyPrice * (1 - discountPercent / 100));
  
  return (
    <section id="checkout" className="section-padding bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Czas na decyzję
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Nie przegap tej wyjątkowej okazji - promocja jest limitowana czasowo!
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          <div className="mb-8 flex justify-center">
            <div className="bg-gray-100 p-1 rounded-lg inline-flex">
              <button
                onClick={() => setBillingPeriod('monthly')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  billingPeriod === 'monthly' 
                    ? 'bg-white shadow text-primary' 
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                Miesięcznie
              </button>
              <button
                onClick={() => setBillingPeriod('annual')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  billingPeriod === 'annual' 
                    ? 'bg-white shadow text-primary' 
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                Rocznie (dodatkowe -20%)
              </button>
            </div>
          </div>

          <div className="mb-8 max-w-md mx-auto">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
              <div className="text-center mb-4">
                <div className="text-lg font-medium">Plan Grow</div>
                <div className="flex items-center justify-center mb-1">
                  <span className="line-through text-gray-500 mr-2">
                    {billingPeriod === 'monthly' ? `${monthlyPrice} zł` : `${annualMonthlyPrice} zł/m`}
                  </span>
                  <span className="text-3xl font-bold">
                    {billingPeriod === 'monthly' ? `${discountedMonthlyPrice} zł` : `${discountedAnnualMonthlyPrice} zł/m`}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  {billingPeriod === 'annual' && (
                    <>Rozliczenie roczne {Math.round(discountedAnnualMonthlyPrice * 12)} zł</>
                  )}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Pełny dostęp do wszystkich modułów AI</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>180 000 kredytów miesięcznie</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>50 000 dodatkowych kredytów gratis</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Maksymalnie 3 użytkowników</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Priorytetowe wsparcie techniczne</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Bezpłatny webinar onboardingowy 60 min</span>
                </div>
              </div>

              {/* Coupon code */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Kod promocyjny
                </label>
                <div className="flex">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Wprowadź kod promocyjny"
                  />
                  <button
                    className="px-4 py-2 bg-gray-100 border border-gray-300 border-l-0 rounded-r-md text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    Zastosuj
                  </button>
                </div>
                <div className="text-green-600 text-sm mt-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Kod GROW30 został zastosowany
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary-dark text-white py-6 text-lg font-medium">
                Wejdź do BizMundo teraz
              </Button>

              <div className="text-center text-sm text-gray-500 mt-4">
                14-dniowy okres próbny bez zobowiązań
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-500">
            <p>
              Płatność bezpieczna i szyfrowana. Akceptujemy karty kredytowe, BLIK i przelewy bankowe.
            </p>
            <div className="flex justify-center gap-3 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8" viewBox="0 0 24 24" fill="currentColor">
                <rect width="24" height="24" rx="4" fill="#ececec" />
                <path d="M7.97 7h8.06c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1H7.97c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1z" fill="#ff5f00" />
                <path d="M8.97 15c.79 0 1.48-.35 1.96-.89L8.97 9l-1.96 5.11c.48.54 1.17.89 1.96.89z" fill="#eb001b" />
                <path d="M15.03 15c.79 0 1.48-.35 1.96-.89L15.03 9l-1.96 5.11c.48.54 1.17.89 1.96.89z" fill="#f79e1b" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8" viewBox="0 0 24 24" fill="currentColor">
                <rect width="24" height="24" rx="4" fill="#ececec" />
                <path d="M9.27 6H6v12h3.27v-4.13h2.18L12.73 18H16l-3.27-6 3.27-6h-3.27l-1.28 4.13H9.27V6z" fill="#00579f" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8" viewBox="0 0 24 24" fill="currentColor">
                <rect width="24" height="24" rx="4" fill="#ececec" />
                <path d="M11.41 8.41a2 2 0 10-2.83 2.83l.7.7-2.83 2.83a2 2 0 102.83 2.83l2.83-2.83.7.7a2 2 0 102.83-2.83l-.7-.7 2.83-2.83a2 2 0 10-2.83-2.83l-2.83 2.83-.7-.7z" fill="#181a1c" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
