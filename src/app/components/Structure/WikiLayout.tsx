// WikiLayout.tsx
import React from 'react';
import { WikiNavigation } from '../Wiki/WikiNavigation';

const WikiLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full">
      <WikiNavigation />
      <main className="flex-1 mx-[30px] my-[20px]">{children}</main>
    </div>
  );
};

export default WikiLayout;
