
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

const BusinessInquiryForm = () => {
  const [formStage, setFormStage] = useState(1);
  const [formData, setFormData] = useState({
    inquiryType: '',
    companySize: '',
    description: '',
    name: '',
    email: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (formData.inquiryType && formData.companySize && formData.description && formData.description.length >= 30) {
      setFormStage(2);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          Masz sprawę biznesową?
        </h2>
        <p className="text-lg text-center mb-10">
          Chcesz zobaczyć demo, omówić większą liczbę użytkowników lub partnerstwo white-label? Odezwij się!
        </p>
        
        {submitted ? (
          <div className="text-center bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">Dziękujemy za wiadomość!</h3>
            <p className="text-muted-foreground">Odpowiemy w 1 dzień roboczy.</p>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <form onSubmit={handleSubmit}>
              {formStage === 1 ? (
                <div className="space-y-6">
                  <div>
                    <label className="block font-medium mb-2">Rodzaj zapytania</label>
                    <Select 
                      onValueChange={(value) => handleChange('inquiryType', value)} 
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Wybierz rodzaj zapytania" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pricing">Wycena / większe limity</SelectItem>
                        <SelectItem value="partnership">Partnerstwo / integracja</SelectItem>
                        <SelectItem value="media">Media / PR</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block font-medium mb-2">Wielkość firmy</label>
                    <Select 
                      onValueChange={(value) => handleChange('companySize', value)} 
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Wybierz wielkość firmy" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="solo">Solo</SelectItem>
                        <SelectItem value="small">2-10 osób</SelectItem>
                        <SelectItem value="medium">10-50 osób</SelectItem>
                        <SelectItem value="large">50+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block font-medium mb-2">
                      Opis celu (min. 30 znaków)
                    </label>
                    <Textarea 
                      placeholder="Opisz dokładnie czego potrzebujesz..." 
                      className="min-h-[100px]"
                      value={formData.description}
                      onChange={(e) => handleChange('description', e.target.value)}
                      required
                      minLength={30}
                      maxLength={300}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>{formData.description.length} znaków</span>
                      <span>Max. 300</span>
                    </div>
                  </div>
                  
                  <Button 
                    type="button" 
                    onClick={handleNext}
                    className="w-full"
                    disabled={
                      !formData.inquiryType || 
                      !formData.companySize || 
                      !formData.description ||
                      formData.description.length < 30
                    }
                  >
                    Dalej
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div>
                    <label className="block font-medium mb-2">Imię i nazwisko</label>
                    <Input 
                      placeholder="Jan Kowalski" 
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block font-medium mb-2">Adres e-mail</label>
                    <Input 
                      type="email" 
                      placeholder="jan@firma.pl" 
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block font-medium mb-2">Telefon (opcjonalnie)</label>
                    <Input 
                      type="tel" 
                      placeholder="+48 123 456 789" 
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                    />
                  </div>
                  
                  <div className="flex gap-4">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => setFormStage(1)}
                      className="flex-1"
                    >
                      Wstecz
                    </Button>
                    <Button 
                      type="submit" 
                      className="flex-1"
                      disabled={!formData.name || !formData.email}
                    >
                      Wyślij zapytanie
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default BusinessInquiryForm;
