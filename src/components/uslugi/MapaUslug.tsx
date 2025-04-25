
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { 
  MessageSquare, 
  FileText, 
  Image, 
  Video, 
  Headphones,
  BarChart3 
} from "lucide-react"

const MapaUslug = () => {
  const modules = [
    {
      name: "AI Chat",
      icon: MessageSquare,
      description: "24/7 asystent, pomysły, research",
      importance: "Oszczędza godziny poszukiwań i doradza jak senior marketer"
    },
    {
      name: "AI Content",
      icon: FileText,
      description: "Writer, Wizard, ReWriter, Smart Editor",
      importance: "Publikujesz artykuł SEO lub ofertę sprzedażową w kilka minut"
    },
    {
      name: "AI Image",
      icon: Image,
      description: "Generacja grafik, mock-upów, zdjęć produktowych",
      importance: "Wyglądasz jakbyś miał sztab grafików, bez ich kosztów"
    },
    {
      name: "AI Video",
      icon: Video,
      description: "Avatary, video z tekstu/obrazów, edycja",
      importance: "Przyciągasz uwagę ruchomym obrazem bez studia filmowego"
    },
    {
      name: "AI Audio",
      icon: Headphones,
      description: "Voice-overy, podcast intro, narracje",
      importance: "Twoje wideo i reklamy brzmią profesjonalnie bez lektora"
    },
    {
      name: "AI Productivity",
      icon: BarChart3,
      description: "Brand Voice, Plagiarism Checker, Detector",
      importance: "Spójna komunikacja, zero ryzyka plagiatu, pełna kontrola"
    }
  ];

  return (
    <section id="mapa-uslug" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Jeden ekosystem, sześć modułów mocy</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-4">
            <span className="font-semibold">Problem:</span> Masz zbyt wiele zadań, za mało czasu i żadnego wsparcia.
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            <span className="font-semibold">Rozwiązanie:</span> 6 modułów, które przejmują Twój marketing, content i operacje.
          </p>
        </div>

        <div className="hidden md:block overflow-x-auto">
          <Table>
            <TableCaption>Kompletny ekosystem BizMundo.ai</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Moduł</TableHead>
                <TableHead>Co robi</TableHead>
                <TableHead className="text-right">Dlaczego to ważne</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {modules.map((module) => (
                <TableRow key={module.name} className="hover:bg-secondary-dark transition-colors">
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <module.icon className="h-5 w-5 text-primary" />
                      <span>{module.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{module.description}</TableCell>
                  <TableCell className="text-right">{module.importance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Mobile version - cards */}
        <div className="md:hidden grid gap-4">
          {modules.map((module) => (
            <div key={module.name} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 hover:border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 bg-primary/10 rounded-full">
                  <module.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{module.name}</h3>
              </div>
              <p className="text-gray-600 mb-2">{module.description}</p>
              <p className="text-gray-800 font-medium">{module.importance}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapaUslug;
