/**
 * Shared SVG Icon Library
 *
 * Centralizes all UI, navigation, trust, app-store, and social icons so
 * stroke weights, viewBoxes, and accessibility attributes remain consistent.
 */

function Icon({ children, className = "", viewBox = "0 0 24 24", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
}

/* --------------------------------------------------------------------------
   Navigation & Directional Arrows
   -------------------------------------------------------------------------- */
export function ArrowRight({ className = "size-5", ...props }) {
  return (
    <Icon className={className} {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </Icon>
  );
}

export function ArrowLeft({ className = "size-5", ...props }) {
  return (
    <Icon className={className} {...props}>
      <path d="M20 12H5" />
      <path d="m11 18-6-6 6-6" />
    </Icon>
  );
}

export function ArrowUpRight({ className = "size-4", ...props }) {
  return (
    <Icon className={className} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </Icon>
  );
}

export function ChevronLeft({ className = "size-4", ...props }) {
  return (
    <Icon className={className} {...props}>
      <path d="m14.5 6-5 6 5 6" />
    </Icon>
  );
}

export function ChevronRight({ className = "size-4", ...props }) {
  return (
    <Icon className={className} {...props}>
      <path d="m9.5 6 5 6-5 6" />
    </Icon>
  );
}

export function Menu({ className = "size-5", ...props }) {
  return (
    <Icon className={className} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Icon>
  );
}

export function Close({ className = "size-5", ...props }) {
  return (
    <Icon className={className} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </Icon>
  );
}

export function Sun({ className = "size-5", ...props }) {
  return (
    <Icon className={className} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.2M12 19.8V22M4.93 4.93l1.56 1.56M17.51 17.51l1.56 1.56M2 12h2.2M19.8 12H22M4.93 19.07l1.56-1.56M17.51 6.49l1.56-1.56" />
    </Icon>
  );
}

export function Moon({ className = "size-5", ...props }) {
  return (
    <Icon className={className} {...props}>
      <path d="M20.2 14.8A8.5 8.5 0 0 1 9.2 3.8a8.5 8.5 0 1 0 11 11Z" />
    </Icon>
  );
}

/* --------------------------------------------------------------------------
   UI, Feature & Trust Icons
   -------------------------------------------------------------------------- */
export function PlayCircle({ className = "size-5", ...props }) {
  return (
    <Icon className={className} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m10 8.5 5 3.5-5 3.5v-7Z" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function Check({ className = "size-5", ...props }) {
  return (
    <Icon className={className} {...props}>
      <path d="m5 12.5 4.2 4.2L19 6.8" />
    </Icon>
  );
}

export function Sparkle({ className = "size-6", ...props }) {
  return (
    <Icon className={className} {...props}>
      <path d="M12 3c.6 4.7 2.9 7 7.5 7.5-4.6.5-6.9 2.8-7.5 7.5-.6-4.7-2.9-7-7.5-7.5C9.1 10 11.4 7.7 12 3Z" />
    </Icon>
  );
}

export function Bolt({ className = "size-5", ...props }) {
  return (
    <Icon className={className} {...props}>
      <path d="M13 2 5.5 13.2H11L10 22l7.5-11.2H12L13 2Z" />
    </Icon>
  );
}

export function Rupee({ className = "size-5", ...props }) {
  return (
    <Icon className={className} {...props}>
      <path d="M7 4h10M7 8h10M15.5 4c0 4.1-2.6 6.2-6.7 6.2H7l8.5 9.8" />
    </Icon>
  );
}

export function BadgeCheck({ className = "size-5", ...props }) {
  return (
    <Icon className={className} {...props}>
      <path d="M12 3 14 5l2.8-.2.7 2.7 2.3 1.6-1.3 2.5.6 2.8-2.6 1.1-1.6 2.3-2.6-1-2.6 1-1.6-2.3L5 14.4l.6-2.8-1.3-2.5 2.3-1.6.7-2.7L10 5l2-2Z" />
      <path d="m9.2 12 1.8 1.8 3.8-3.9" />
    </Icon>
  );
}

export function ShieldCheck({ className = "size-5", ...props }) {
  return (
    <Icon className={className} {...props}>
      <path d="M19 12c0 5-3.3 7.4-7 8.7C8.3 19.4 5 17 5 12V6l7-3 7 3v6Z" />
      <path d="m9 11.5 2 2 4-4" />
    </Icon>
  );
}

export function Star({ className = "size-5", ...props }) {
  return (
    <Icon className={className} {...props}>
      <path
        d="m12 3 2.5 5.4 5.8.7-4.3 4 1.1 5.7L12 16l-5.1 2.8 1.1-5.7-4.3-4 5.8-.7L12 3Z"
        fill="currentColor"
        stroke="none"
      />
    </Icon>
  );
}

export function Megaphone({ className = "size-5", ...props }) {
  return (
    <Icon className={className} {...props}>
      <path d="M4 11v2a1 1 0 0 0 1 1h2l7 4V6L7 10H5a1 1 0 0 0-1 1Z" />
      <path d="M17 9a4 4 0 0 1 0 6" />
      <path d="M7 14v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2.5" />
    </Icon>
  );
}

export function Video({ className = "size-5", ...props }) {
  return (
    <Icon className={className} {...props}>
      <rect x="3" y="5" width="13" height="14" rx="3" />
      <path d="m16 10 4.2-2.4v8.8L16 14" />
      <path d="m7.5 9 4 3-4 3V9Z" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function Users({ className = "size-5", ...props }) {
  return (
    <Icon className={className} {...props}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5.3a3 3 0 0 1 0 5.4" />
      <path d="M17 14.5a5 5 0 0 1 4 4.1" />
    </Icon>
  );
}

export function Gift({ className = "size-5", ...props }) {
  return (
    <Icon className={className} {...props}>
      <rect x="4" y="8" width="16" height="4" rx="1.2" />
      <path d="M6 12v8h12v-8M12 8v12" />
      <path d="M12 8C10 8 7.5 7.4 7.5 5.5A2.5 2.5 0 0 1 12 4a2.5 2.5 0 0 1 4.5 1.5C16.5 7.4 14 8 12 8Z" />
    </Icon>
  );
}

export function Wallet({ className = "size-5", ...props }) {
  return (
    <Icon className={className} {...props}>
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H6.5A2.5 2.5 0 0 1 4 17.5v-10Z" />
      <path d="M4 8h14" />
      <path d="M15 12h6v3h-6a1.5 1.5 0 0 1 0-3Z" />
    </Icon>
  );
}

export function TrendUp({ className = "size-5", ...props }) {
  return (
    <Icon className={className} {...props}>
      <path d="m3 17 6-6 4 4 8-8" />
      <path d="M15 7h6v6" />
    </Icon>
  );
}

export function Rocket({ className = "size-5", ...props }) {
  return (
    <Icon className={className} {...props}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4.5c1.62-1.63 5-2.5 5-2.5" />
      <path d="M12 15v5s3.03-.55 4.5-2c1.63-1.62 2.5-5 2.5-5" />
    </Icon>
  );
}

export function Tv({ className = "size-5", ...props }) {
  return (
    <Icon className={className} {...props}>
      <rect width="20" height="15" x="2" y="7" rx="2" />
      <polyline points="17 2 12 7 7 2" />
    </Icon>
  );
}

export function Crown({ className = "size-5", ...props }) {
  return (
    <Icon className={className} {...props}>
      <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </Icon>
  );
}

/* --------------------------------------------------------------------------
   App Store & Social Platform Icons
   -------------------------------------------------------------------------- */
export function GooglePlay({ className = "size-5", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <path d="M3.6 2.3a1.7 1.7 0 0 0-.9 1.5v16.4a1.7 1.7 0 0 0 .9 1.5l.2.1 9.2-9.2v-.3L3.8 2.2l-.2.1Z" opacity=".9" />
      <path d="m16.2 15.8-3.2-3.2v-.3l3.2-3.2.1.1 3.8 2.2c1.1.6 1.1 1.6 0 2.2l-3.8 2.2h-.1Z" opacity=".75" />
      <path d="m16.3 15.7-3.3-3.3-9.4 9.4c.4.1.8 0 1.3-.2l11.4-5.9Z" opacity=".6" />
      <path d="M16.3 8.3 4.9 2.4c-.5-.3-.9-.3-1.3-.2l9.4 9.4 3.3-3.3Z" opacity=".8" />
    </svg>
  );
}

export function Apple({ className = "size-5", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <path d="M16.2 12.7c0-2.5 2-3.7 2.1-3.8-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.1-2.9.9-3.6.9-.7 0-1.9-.9-3.1-.9-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.5.8 1.1 1.8 2.4 3.1 2.3 1.2 0 1.7-.8 3.2-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.1-1.2 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.8-1.1-2.9-4.5ZM14 4.8c.7-.8 1.1-1.9 1-3-.9.1-2 .6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1 .1 2-.5 2.7-1.3Z" />
    </svg>
  );
}

export function Instagram({ className = "size-5", ...props }) {
  return (
    <Icon className={className} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </Icon>
  );
}

export function LinkedIn({ className = "size-5", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <path d="M6.5 8.2H3.4V21h3.1V8.2ZM4.9 3A1.8 1.8 0 1 0 5 6.6 1.8 1.8 0 0 0 4.9 3ZM21 13.5c0-3.6-1.9-5.6-4.5-5.6-2 0-3 1.1-3.5 1.9V8.2H9.9V21H13v-6.4c0-1.7.3-3.3 2.4-3.3s2.4 1.9 2.4 3.4V21H21v-7.5Z" />
    </svg>
  );
}

export function YouTube({ className = "size-5", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.8 12 4.8 12 4.8s-5.9 0-7.6.4a2.8 2.8 0 0 0-2 2C2 8.9 2 12 2 12s0 3.1.4 4.8a2.8 2.8 0 0 0 2 2c1.7.4 7.6.4 7.6.4s5.9 0 7.6-.4a2.8 2.8 0 0 0 2-2c.4-1.7.4-4.8.4-4.8s0-3.1-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

export function XSocial({ className = "size-5", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <path d="M17.5 3h3.2l-7 8 8.3 10h-6.5l-5-6.2L4.7 21H1.5l7.5-8.6L1 3h6.7l4.5 5.7L17.5 3Zm-1.1 16.2h1.8L7.6 4.7H5.7l10.7 14.5Z" />
    </svg>
  );
}

export function Facebook({ className = "size-5", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.9H7v3.1h2.8v8h3.7Z" />
    </svg>
  );
}
