import { MapPin, Calendar, Settings2, ArrowRight } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationAndDateStepProps {
  isInviteInputOpen: boolean;
  openInviteInput: () => void,
  closeInviteInput: () => void
}

export function DestinationAndDateStep({
  isInviteInputOpen,
  openInviteInput,
  closeInviteInput
}: DestinationAndDateStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center justify-between shadow-shape">
      <div className="flex">

        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <input
            disabled={isInviteInputOpen}
            type="text"
            placeholder="Para onde você vai?"
            className="bg-transparent text-lg placeholder-zinc-400 w-[256px] outline-none"
          />
        </div>


        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <input
            disabled={isInviteInputOpen}
            type="text"
            placeholder="Quando?"
            className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
          />
        </div>
      </div>

      <div className="w-px h-6 bg-zinc-800" />

      {isInviteInputOpen ? (
        <Button onClick={closeInviteInput} variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={openInviteInput} variant="primary">
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  )
}
