import { Button } from '@/components/ui/button';
import { Code } from 'lucide-react';

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Mon Entreprise</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-base font-medium hover:underline underline-offset-4" href="#">
            Fonctionnalités
          </a>
          <a className="text-base font-medium hover:underline underline-offset-4" href="#">
            Tarifs
          </a>
          <a className="text-base font-medium hover:underline underline-offset-4" href="#">
            À propos
          </a>
          <a className="text-base font-medium hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Créez des sites web encore plus rapidement
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Avec des composants de qualité production basés sur Tailwind CSS.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
