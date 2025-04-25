
import React from 'react';
import { Switch } from '@/components/ui/switch';

interface PlanSelectorProps {
  isYearly: boolean;
  setIsYearly: (value: boolean) => void;
}

const PlanSelector = ({ isYearly, setIsYearly }: PlanSelectorProps) => {
  return (
    <section id="plans" className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center space-x-4 bg-secondary/80 rounded-full px-4 py-2">
          <span className={`text-sm font-medium cursor-pointer ${!isYearly ? 'text-primary font-semibold' : 'text-muted-foreground'}`} 
                onClick={() => setIsYearly(false)}>
            Miesięcznie
          </span>
          <Switch 
            checked={isYearly}
            onCheckedChange={setIsYearly}
          />
          <span className={`text-sm font-medium cursor-pointer ${isYearly ? 'text-primary font-semibold' : 'text-muted-foreground'}`}
                onClick={() => setIsYearly(true)}>
            Rocznie - oszczędzasz 20%
          </span>
        </div>
      </div>
    </section>
  );
};

export default PlanSelector;
