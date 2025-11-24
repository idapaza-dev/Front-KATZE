import React from 'react';
export default function Timeline({ items = [] }) {
  return (
    <div className="grid grid-cols-[32px_1fr] gap-x-4">
      {items.map((it, i) => (
        <React.Fragment key={i}>
          <div className="flex flex-col items-center gap-1 pt-3">
            <div className="text-primary bg-primary/20 rounded-full p-2"><span className="material-symbols-outlined">{it.icon || 'check_circle'}</span></div>
            <div className="w-[2px] bg-border-light grow" />
          </div>
          <div className="py-3">
            <p className="font-medium">{it.title}</p>
            <p className="text-sm text-[#9a734c]">{it.desc}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}