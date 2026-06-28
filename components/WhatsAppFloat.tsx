import { siteConfig } from "@/lib/site-config";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function WhatsAppFloat() {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with WRPX on WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
