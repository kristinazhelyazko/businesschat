export function IconTelegram({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="#39FF8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconVK({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="3" width="20" height="14" rx="2" stroke="#00E5FF" strokeWidth="1.5"/>
      <path d="M8 21h8M12 17v4" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M7 8h10M7 11h6" stroke="#00E5FF" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

export function IconMulti({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke="#A855F7" strokeWidth="1.5"/>
      <path d="M8 12h8M12 8v8" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconMail({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 8l8.5 5.5L21 8M3 8h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconClipboard({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M9 12h6M9 16h4" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconClock({ size = 24, color = "#EF4444" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5"/>
      <path d="M12 7v5l3 3" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconChat({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 10h6M9 13h4" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconChart({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 17l4-8 4 4 4-6 4 5" stroke="#39FF8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconSun({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#B8BFC8" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconStar({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" stroke="#39FF8C" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconLogo({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="#080A0F">
      <path d="M20 2H4C2.9 2 2 2.9 2 4v16l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
    </svg>
  );
}

export function IconChevronDown({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7"/>
    </svg>
  );
}

export function IconCheck({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-5" stroke="#39FF8C" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconLightning({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function IconOrderBox({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="6" width="18" height="13" rx="2" stroke="#39FF8C" strokeWidth="1.5"/>
      <path d="M3 10h18M8 6V4M16 6V4" stroke="#39FF8C" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export function IconMonitor({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="3" width="20" height="14" rx="2" stroke="#00E5FF" strokeWidth="1.5"/>
      <path d="M8 21h8M12 17v4" stroke="#00E5FF" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
