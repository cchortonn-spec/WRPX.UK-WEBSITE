import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

type WhatsAppButtonProps = {
  variant?: "primary" | "outline" | "compact" | "inline";
  label?: string;
  className?: string;
  showIcon?: boolean;
};

export function WhatsAppButton({
  variant = "primary",
  label = "Chat on WhatsApp",
  className,
  showIcon = true,
}: WhatsAppButtonProps) {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "btn-whatsapp",
        variant === "outline" && "btn-whatsapp-outline",
        variant === "compact" && "btn-whatsapp-compact",
        variant === "inline" && "btn-whatsapp-inline",
        className
      )}
      aria-label="Chat with WRPX on WhatsApp"
    >
      {showIcon ? <WhatsAppIcon className="h-5 w-5 shrink-0" /> : null}
      <span>{label}</span>
    </a>
  );
}
