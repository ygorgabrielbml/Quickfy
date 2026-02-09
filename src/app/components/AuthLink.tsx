interface AuthLinkProps {
  text: string;
  linkText: string;
  href: string;
}

export function AuthLink({ text, linkText, href }: AuthLinkProps) {
  return (
    <div className="mt-8 pt-6 border-t border-white/5">
      <p className="text-center text-xs text-zinc-500">
        {text}{' '}
        <a href={href} className="text-white hover:text-zinc-300 transition-colors font-medium">
          {linkText}
        </a>
      </p>
    </div>
  )
}
