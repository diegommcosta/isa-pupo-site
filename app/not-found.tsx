import SiteLayout from "@/components/layout/SiteLayout";
import Button from "@/components/ui/Button";
import Sparkle from "@/components/ui/shapes/Sparkle";

export default function NotFound() {
  return (
    <SiteLayout>
      <div className="relative overflow-hidden bg-bege-light min-h-[70vh] pt-[104px] flex items-center justify-center">
        <Sparkle
          size={22}
          className="absolute top-[20%] right-[16%] text-roxo-claro animate-twinkle"
        />
        <Sparkle
          size={14}
          className="absolute bottom-[22%] left-[14%] text-laranja animate-twinkle [animation-delay:1.2s]"
        />
        <div className="text-center px-6 py-16">
          <p
            className="font-display font-normal leading-none text-rosa px-2"
            style={{ fontSize: "clamp(120px, 25vw, 280px)" }}
            aria-hidden="true"
          >
            404
          </p>
          <p className="mt-6 font-sans text-[18px] md:text-[20px] text-marrom">
            Esta página não foi encontrada.
          </p>
          <div className="mt-8 flex justify-center">
            <Button variant="dark" size="md" href="/" rightIcon="arrow-right">
              Voltar para a home
            </Button>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
