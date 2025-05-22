import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function FooterComponents() {
  return (
    <div className="flex items-center gap-2">
      <Link
        href="https://www.linkedin.com/in/kavya-annapareddy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline" className="p-2" title="LinkedIn">
          <LinkedInLogoIcon className="h-6 w-6" />
        </Button>
      </Link>
      <Link
        href="https://github.com/kannapar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline" className="p-2" title="GitHub">
          <GitHubLogoIcon className="h-6 w-6" />
        </Button>
      </Link>
    </div>
  );
}
