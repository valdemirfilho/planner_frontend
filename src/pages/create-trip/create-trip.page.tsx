import { FormEvent, useState } from 'react'
import { useNavigate } from "react-router-dom";

import { InviteModal } from "./invite-modal.tsx";
import { ConfirmTripModal } from "./confirm-trip-modal.tsx";
import { DestinationAndDateStep } from "./steps/destination-and-date-step.tsx";
import { InviteGuestsStep } from "./steps/invite-guests-step.tsx";


export function CreateTripPage() {
  const navigate = useNavigate()

  const [isInviteInputOpen, setIsInviteInputOpen] = useState(false)
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState(["valdemirfilho@gmail.com"])
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false)

  function openInviteInput() {
    setIsInviteInputOpen(true)
  }

  function closeInviteInput() {
    setIsInviteInputOpen(false)
  }

  function openInviteModal() {
    setIsInviteModalOpen(true)
  }

  function closeInviteModal() {
    setIsInviteModalOpen(false)
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true)
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) return

    if (emailsToInvite.includes(email)) return

    console.log(email)

    setEmailsToInvite([...emailsToInvite, email])

    event.currentTarget.reset()
  }

  function removeEmailFromInvites(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)
    setEmailsToInvite(newEmailList)
  }

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate("/trips/123")
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="w-full max-w-3xl px-6 text-center space-y-10">
        <div className="flex flex-col items-center">
          <img src="/logo.svg" alt="plann.er logo" />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>


        <div className="space-y-4">
          <DestinationAndDateStep
            isInviteInputOpen={isInviteInputOpen}
            openInviteInput={openInviteInput}
            closeInviteInput={closeInviteInput}
          />

          {isInviteInputOpen && (
            <InviteGuestsStep
              emailsToInvite={emailsToInvite}
              openConfirmTripModal={openConfirmTripModal}
              openInviteModal={openInviteModal}
            />
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda <br /> com nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{" "}e{" "}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isInviteModalOpen && (
        <InviteModal
          addNewEmailToInvite={addNewEmailToInvite}
          emailsToInvite={emailsToInvite}
          closeInviteModal={closeInviteModal}
          removeEmailFromInvites={removeEmailFromInvites}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          closeConfirmTripModal={closeConfirmTripModal}
          createTrip={createTrip}
        />
      )}

    </div >
  );
}
