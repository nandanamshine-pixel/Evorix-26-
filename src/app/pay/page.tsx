import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function PayPage() {
  return (
    <main id="main-content" className="py-20">
      <Container className="grid gap-10">
        <div className="grid gap-6 rounded-3xl border border-white/10 bg-slate-950/65 p-8 shadow-2xl shadow-cyan-500/5">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Payment</p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">Pay with Google Pay</h1>
            <p className="mx-auto max-w-2xl text-base leading-7 text-slate-300">
              Use the QR code below to complete your payment through any UPI app. Once the payment is successful, share the transaction details with the EVORIX coordinator.
            </p>
          </div>

          <div className="mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(15,23,42,0.35)]">
            <Image
              src="/gpay-qr.svg"
              alt="Google Pay QR code"
              width={920}
              height={920}
              className="mx-auto max-w-full rounded-3xl bg-white"
              priority
            />
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
