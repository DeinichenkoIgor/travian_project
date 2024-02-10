// layouts/WikiLayout.tsx или components/Structure/WikiLayout.tsx
import React from 'react';
import { WikiNavigation } from '../Wiki/WikiNavigation'; // Путь к вашему компоненту левой навигации

const WikiLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <WikiNavigation />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default WikiLayout;
