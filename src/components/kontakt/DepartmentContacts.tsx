
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const DepartmentContacts = () => {
  const departments = [
    {
      name: "Sprzedaż",
      email: "sales@bizmundo.ai",
      phone: "+48 22 153 00 88",
      hours: "9:00-17:00"
    },
    {
      name: "Wsparcie Premium",
      email: "support@bizmundo.ai",
      phone: "– (czat w aplikacji)",
      hours: "8:00-18:00"
    },
    {
      name: "Media / PR",
      email: "pr@bizmundo.ai",
      phone: "+48 22 153 00 89",
      hours: "9:00-15:00"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Kontakt do konkretnych działów
        </h2>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Dział</TableHead>
                <TableHead>E-mail</TableHead>
                <TableHead>Telefon</TableHead>
                <TableHead>Godziny (CET)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {departments.map((dept) => (
                <TableRow key={dept.name}>
                  <TableCell className="font-medium">{dept.name}</TableCell>
                  <TableCell>
                    <a href={`mailto:${dept.email}`} className="text-primary hover:underline">
                      {dept.email}
                    </a>
                  </TableCell>
                  <TableCell>{dept.phone}</TableCell>
                  <TableCell>{dept.hours}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <div className="mt-8 bg-secondary p-6 rounded-lg">
          <p className="font-medium">
            Chcesz rozwiązać problem w 5 minut? Zamiast pisać maila, zaloguj się do panelu i użyj czatu Premium – 
            sztuczna inteligencja + człowiek odpowiedzą 2× szybciej niż tradycyjny e-mail.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DepartmentContacts;
