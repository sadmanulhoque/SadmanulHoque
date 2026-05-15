import React, { useState } from 'react';

export function Tooltip({ children }) {
  return <>{children}</>;
}

export function TooltipTrigger({ asChild, children, ...props }) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { ...props });
  }
  return <div {...props}>{children}</div>;
}

export function TooltipContent({ children, side = 'top', className = '' }) {
  const sideClasses = {
    top: 'bottom-full mb-2',
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    right: 'left-full ml-2',
  };

  return (
    <div
      className={`
        absolute ${sideClasses[side]} left-1/2 -translate-x-1/2
        bg-popover text-popover-foreground px-2 py-1 rounded
        text-xs whitespace-nowrap pointer-events-none ${className}
      `}
    >
      {children}
    </div>
  );
}

export function TooltipProvider({ delayDuration = 200, children }) {
  return <>{children}</>;
}
