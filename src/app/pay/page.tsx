import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function PayPage() {
  return (
    <main id="main-content" className="py-20">
      <Container className="mx-auto max-w-3xl">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-slate-950/75 p-8 shadow-2xl shadow-cyan-500/10">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Payment</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Pay with Google Pay</h1>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-300">
              Scan the QR code below with any UPI app to make payment. If the image does not render, use the UPI ID shown below.
            </p>
          </div>

          <div className="mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
            <img
              src="/gpay-qr.svg"
              alt="Google Pay QR code"
              className="mx-auto max-w-full rounded-[1.5rem]"
            />
          </div>

          <div className="space-y-2 text-center text-slate-200">
            <p className="text-lg font-semibold text-white">UPI ID: ranjithars@okicici</p>
            <p className="text-sm text-slate-300">Scan to pay with any UPI app</p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg">
              <a href="/registration">
                Back to registration <ArrowLeft className="size-5" />
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
