
import React from 'react';
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', name: 'Português', flag: '🇧🇷' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
];

const LanguageSwitcher: React.FC = () => {
  const handleLanguageChange = (code: string) => {
    // In a real implementation, this would change the app's language
    console.log(`Language changed to: ${code}`);
    // For demonstration purposes only - normally would use i18n library
    alert(`Language would change to ${code}. In a real implementation, this would use an i18n library like react-i18next.`);
  };

  return (
    <div className="fixed top-20 right-4 z-40">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-9 w-9 p-0 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white">
            <Globe className="h-4 w-4" />
            <span className="sr-only">Switch language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {languages.map((language) => (
            <DropdownMenuItem 
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className="cursor-pointer"
            >
              <span className="mr-2">{language.flag}</span>
              {language.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;
