interface AuthLinkProps {
  text: string;
  linkText: string;
  href: string;
}

export function AuthLink({ text, linkText, href }: AuthLinkProps) {
  return (
    <div className="mt-6">
      <p className="text-center text-sm text-white/50">
        {text}{' '}
        <a href={href} className="text-white/90 hover:text-white transition-colors font-medium">
          {linkText}
        </a>
      </p>
    </div>
  )
}
