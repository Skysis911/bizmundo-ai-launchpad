
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link } from 'react-router-dom';

const PopularArticles = () => {
  const articles = [
    {
      title: 'Jak wycisnąć 2× więcej z kredytów AI',
      readTime: '3 min',
      views: '2 235'
    },
    {
      title: '10 promptów, które podwoiły CTR w socialu',
      readTime: '5 min',
      views: '1 878'
    },
    {
      title: 'Diagnostyka błędów video avatar (check-lista)',
      readTime: '4 min',
      views: '1 440'
    },
    {
      title: 'Mapowanie Brand Voice w 15 min',
      readTime: '6 min',
      views: '1 312'
    },
    {
      title: 'Integracja z WooCommerce w trzech kliknięciach',
      readTime: '4 min',
      views: '1 205'
    }
  ];
  
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">Najpopularniejsze artykuły</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tytuł</TableHead>
              <TableHead className="text-right">Średni czas czytania</TableHead>
              <TableHead className="text-right">Odsłon w tym miesiącu</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {articles.map((article, index) => (
              <TableRow key={index} className="cursor-pointer hover:bg-gray-50">
                <TableCell className="font-medium">
                  <Link to="#" className="text-primary hover:underline">{article.title}</Link>
                </TableCell>
                <TableCell className="text-right">{article.readTime}</TableCell>
                <TableCell className="text-right">{article.views}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default PopularArticles;
