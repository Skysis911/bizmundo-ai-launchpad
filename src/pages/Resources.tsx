
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ResourcesHero from '@/components/resources/ResourcesHero';
import ResourcesCategories from '@/components/resources/ResourcesCategories';
import QuickStartPaths from '@/components/resources/QuickStartPaths';
import PopularArticles from '@/components/resources/PopularArticles';
import SupportSection from '@/components/resources/SupportSection';
import ResourcesCta from '@/components/resources/ResourcesCta';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <ResourcesHero />

        <div className="container mx-auto px-4 py-8">
          <div className="relative max-w-2xl mx-auto mb-12">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              placeholder="Wpisz problem lub słowo kluczowe..."
              className="pl-10 h-12"
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>

          <ResourcesCategories />
          <QuickStartPaths />
          <PopularArticles />
          <SupportSection />
          <ResourcesCta />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
