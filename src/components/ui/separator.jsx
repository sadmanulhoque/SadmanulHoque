export function Separator({ orientation = 'horizontal', className = '' }) {
  const baseClasses = orientation === 'vertical' 
    ? 'h-full w-px bg-muted' 
    : 'h-px w-full bg-muted';
  
  return <div className={`${baseClasses} ${className}`} />;
}
