
import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageSquare, 
  FileText, 
  Image, 
  Video, 
  Headphones,
  Share2,
  BarChart3,
  Link as LinkIcon,
  LayoutDashboard
} from "lucide-react";
import { Link } from "react-router-dom";

const MapaFunkcji = () => {
  const modules = [
    {
      id: "ai-chat",
      name: "AI Chat",
      icon: MessageSquare,
      description: "Doradca 24/7 + research",
      link: "/funkcje/ai-chat"
    },
    {
      id: "ai-content",
      name: "AI Content",
      icon: FileText,
      description: "Writer, Wizard, ReWrite",
      link: "/funkcje/ai-content-writer"
    },
    {
      id: "ai-image",
      name: "AI Image",
      icon: Image,
      description: "Grafiki on-demand",
      link: "/funkcje/ai-image"
    },
    {
      id: "ai-video",
      name: "AI Video",
      icon: Video,
      description: "Filmy & avatary",
      link: "/funkcje/ai-video-avatar"
    },
    {
      id: "ai-audio",
      name: "AI Audio",
      icon: Headphones,
      description: "Voice-over w sekundy",
      link: "/funkcje/ai-audio-voiceover"
    },
    {
      id: "ai-social",
      name: "AI Social",
      icon: Share2,
      description: "Posty & YouTube",
      link: "/funkcje/ai-social-media"
    },
    {
      id: "ai-productivity",
      name: "AI Productivity",
      icon: BarChart3,
      description: "Brand Voice + checker",
      link: "/funkcje/brand-voice-builder"
    },
    {
      id: "integracje",
      name: "Integracje",
      icon: LinkIcon,
      description: "Łącz z CRM i sklepem",
      link: "/funkcje/integracje"
    },
    {
      id: "dashboard",
      name: "Dashboard",
      icon: LayoutDashboard,
      description: "Kontrola w real-time",
      link: "/funkcje/dashboard"
    },
  ];

  return (
    <section id="mapa-funkcji" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mapa Funkcji
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map((module) => (
            <Link to={module.link} key={module.id}>
              <Card className="h-full hover:shadow-lg transition-shadow border-gray-200 hover:border-primary/30 cursor-pointer group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                    <module.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{module.name}</h3>
                  <p className="text-gray-600">{module.description}</p>
                  <span className="mt-4 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Dowiedz się więcej →
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapaFunkcji;
