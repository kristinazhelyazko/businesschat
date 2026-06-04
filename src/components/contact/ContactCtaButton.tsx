"use client";

import { type CSSProperties, type ReactNode } from "react";
import { IconTelegramSend } from "@/components/ui/SvgIcons";
import { useContactModal } from "./ContactModalProvider";

type ContactCtaButtonProps = {
  className?: string;
  style?: CSSProperties;
  showIcon?: boolean;
  children?: ReactNode;
};

export default function ContactCtaButton({
  className = "btn-primary",
  style,
  showIcon = true,
  children = "Получить решение",
}: ContactCtaButtonProps) {
  const { openContactModal } = useContactModal();

  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={openContactModal}
    >
      {showIcon && <IconTelegramSend size={18} stroke="#080A0F" />}
      {children}
    </button>
  );
}
