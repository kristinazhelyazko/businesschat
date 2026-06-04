"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { SITE_CONFIG } from "@/data/content";
import { IconTelegramSend } from "@/components/ui/SvgIcons";

type ContactModalContextValue = {
  openContactModal: () => void;
  closeContactModal: () => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error("useContactModal must be used within ContactModalProvider");
  return ctx;
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openContactModal = useCallback(() => setOpen(true), []);
  const closeContactModal = useCallback(() => setOpen(false), []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(SITE_CONFIG.email);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = SITE_CONFIG.email;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToastVisible(true);
    toastTimer.current = setTimeout(() => setToastVisible(false), 2200);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeContactModal();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeContactModal]);

  return (
    <ContactModalContext.Provider value={{ openContactModal, closeContactModal }}>
      {children}

      {open && (
        <div
          className="contact-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeContactModal();
          }}
        >
          <div className="contact-modal">
            <div className="contact-modal-shine" />
            <div className="contact-modal-header">
              <h2 id="contact-modal-title" className="contact-modal-title">
                Связаться с нами
              </h2>
              <button
                type="button"
                className="contact-modal-close"
                onClick={closeContactModal}
                aria-label="Закрыть"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="contact-modal-body">
              <div className="contact-modal-item">
                <span className="contact-modal-label">Для связи в Телеграм</span>
                <a
                  href={SITE_CONFIG.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-modal-btn contact-modal-btn--tg"
                >
                  <IconTelegramSend size={16} stroke="#080A0F" />
                  Написать в Telegram
                </a>
              </div>

              <div className="contact-modal-divider" />

              <div className="contact-modal-item">
                <span className="contact-modal-label">Если удобнее в ВК</span>
                <a
                  href={SITE_CONFIG.vkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-modal-btn contact-modal-btn--vk"
                >
                  Написать во ВКонтакте
                </a>
              </div>

              <div className="contact-modal-divider" />

              <div className="contact-modal-item contact-modal-item--email">
                <span className="contact-modal-label">
                  Почта для связи:{" "}
                  <button type="button" className="contact-modal-email" onClick={copyEmail}>
                    {SITE_CONFIG.email}
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={`site-toast${toastVisible ? " visible" : ""}`} role="status" aria-live="polite">
        Почта скопирована в буфер обмена
      </div>
    </ContactModalContext.Provider>
  );
}
