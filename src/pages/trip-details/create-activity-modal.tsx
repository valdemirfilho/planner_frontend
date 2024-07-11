import { X, Tag, Calendar } from "lucide-react";
import { Button } from "../../components/button";

interface CreateActivityModalProps {
  openCreateActivityModal: () => void,
  closeCreateActivityModal: () => void
}

export function CreateActivityModal({
  openCreateActivityModal,
  closeCreateActivityModal
}: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Confirmar criação de viagem</h2>
            <button onClick={closeCreateActivityModal} className="size-5 text-zinc-400">
              <X />
            </button>
          </div>
          <p className="text-sm text-zinc-400">Todos convidados podem ver as atividades.</p>
        </div>

        <form onClick={openCreateActivityModal} className="space-y-3">
          <div className="px-4 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="text-zinc-400 size-5" />
            <input
              name="title"
              type="text"
              placeholder="Qual a atividade?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <div className="flex items-center gap-2">
            <div className="px-4 h-14 bg-zinc-950 border border-zinc-800 rounded-lg flex flex-1 items-center gap-2">
              <Calendar className="text-zinc-400 size-5" />
              <input
                name="occurs_at"
                type="datetime-local"
                placeholder="Seu e-mail pessoal"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-scheme:dark]"
              />
            </div>

          </div>
          <Button
            type="submit"
            variant="primary"
            size="full"
          >
            Salvar atividade
          </Button>
        </form>

      </div>
    </div>
  )
}
