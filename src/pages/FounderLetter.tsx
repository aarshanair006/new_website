import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FounderLetter() {
  return (
    <div className="bg-[#f4f4f4] min-h-screen text-black font-sans pt-32 pb-20 selection:bg-[#0055ff]/10 selection:text-black">
      <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-12">
        {/* Back link */}
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black/50 hover:text-black transition-colors"
          >
            <ArrowLeft size={14} /> Back to Homepage
          </Link>
        </div>

        {/* Letter Header */}
        <div className="space-y-6 border-b border-black/10 pb-8">
          <div className="inline-block border-b border-[#0055ff] pb-1.5">
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-black/60">
              Founder’s Statement
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">
            A note from our Founder, Kabir Sharma.
          </h1>
          <div className="flex justify-between items-center text-xs font-mono text-black/40 pt-4">
            <span>DATE: 6 FEBRUARY 2026</span>
            <span>READ TIME: 6 MINS</span>
          </div>
        </div>

        {/* Letter Body */}
        <div className="space-y-8 text-base md:text-lg text-black/80 font-light leading-relaxed">
          <p className="font-medium text-black">
            Dear Shareholders, Partners, and Friends,
          </p>

          <p>
            When we first wrote the code for our delivery platform in 2018, we had a simple, singular goal: to help local restaurants reach customers online. We didn't anticipate how deeply integrated we would become in the daily lives of millions of people, or how our operations would expand to encompass grocery delivery and merchant business software.
          </p>

          <p>
            Today, our business is no longer just food delivery. It is hyper-local commerce in its entirety.
          </p>

          <p>
            Over the past few years, we have operated several independent brands. We acquired and scaled <strong>Janhal</strong>, turning it into India's fastest-growing quick-commerce network, delivering fresh produce and daily essentials to households in under 10 minutes. We built <strong>Local Branding Software</strong>, a powerful merchant SaaS suite that empowers over 250,000 local store owners to manage their digital presence, run hyper-local campaigns, and gain deep customer insights.
          </p>

          <p>
            Internally, we have always viewed ourselves as a single, cohesive team working toward a shared mission. However, our corporate structure and external communication have remained fragmented.
          </p>

          <p>
            To align our long-term vision and build an institution that endures, our Board of Directors has approved the transition of our corporate entity to a unified name: <strong>LocalSM Limited</strong>.
          </p>

          <blockquote className="border-l-2 border-[#0055ff] pl-6 my-10 py-2 text-2xl md:text-3xl font-light tracking-tight text-black italic">
            “LocalSM isn’t just a name. It’s a mission statement.”
          </blockquote>

          <p>
            The name "LocalSM" represents our absolute commitment to the hyper-local ecosystem. The "Local" represents our roots—the neighborhood grocery store, the local bakery, the delivery partner on the street. The "SM" stands for <em>Scale</em> and <em>Management</em>—our promise to provide the world-class technology, logistics, and software infrastructure to help these local heroes scale and thrive in a digital world.
          </p>

          <p>
            I want to make it clear that this is a corporate-level change. Our consumer-facing applications—the apps you use to order food or groceries—will retain their familiar brands. LocalSM will serve as the parent corporate identity, uniting our three core pillars:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            <div className="border border-black/10 p-6 bg-black/[0.01]">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-[#0055ff] mb-2">01 / Delivery</h4>
              <p className="text-sm text-black/60 font-light leading-relaxed">
                <strong>LocalSM Delivery</strong> (formerly our core food app), connecting diners and restaurants across 800+ cities.
              </p>
            </div>
            <div className="border border-black/10 p-6 bg-black/[0.01]">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-[#0055ff] mb-2">02 / Quick Commerce</h4>
              <p className="text-sm text-black/60 font-light leading-relaxed">
                <strong>Janhal</strong>, our ultra-fast commerce network delivering groceries and essentials in minutes.
              </p>
            </div>
            <div className="border border-black/10 p-6 bg-black/[0.01]">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-[#0055ff] mb-2">03 / Software</h4>
              <p className="text-sm text-black/60 font-light leading-relaxed">
                <strong>Local Branding Software</strong>, our merchant suite empowering retail store owners with marketing SaaS.
              </p>
            </div>
          </div>

          <p>
            Our mission remains unchanged: <strong>to endure, evolve, and empower</strong>.
          </p>

          <p>
            We are not building a company for the next quarter or the next fiscal year. We are building an institution that will stand for decades. This requires extreme operational discipline, a relentless focus on first-principles thinking, and an willingness to disrupt our own business models before others do.
          </p>

          <p>
            As we embark on this next chapter as LocalSM, our focus on sustainability and responsibility will only deepen. We are accelerating our transition to an all-electric delivery fleet by 2030, and we are working toward absolute net-zero emissions across our value chain by 2033.
          </p>

          <p>
            Thank you for your continued trust, partnership, and belief in our mission.
          </p>

          <div className="pt-12 space-y-2">
            <p className="font-mono text-xs uppercase tracking-widest text-black/40">Sincerely,</p>
            <p className="font-semibold text-black text-xl">Kabir Sharma</p>
            <p className="text-sm text-black/50 font-mono">Founder & CEO, LocalSM Limited</p>
          </div>
        </div>
      </div>
    </div>
  );
}
