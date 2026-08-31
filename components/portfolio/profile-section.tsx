import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { ResearchInterests } from "./research-interests"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

export function ProfileSection() {
  return (
    <section id="about" className="bg-ink-700 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent">
          01 &nbsp;/&nbsp; About Me
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Dae Hyun Lee
        </h2>
        <p className="mt-2 font-serif text-lg text-white/50">
          M.S. Student in Data Science &middot; University of Washington, Seattle
        </p>

        <div className="mt-14 grid gap-12 md:grid-cols-[220px_1fr] md:gap-16">
          <div className="relative w-[180px] shrink-0 self-start md:w-[220px]">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-lg border border-accent/35"
            />
            <Image
              src={`${basePath}/images/dhlee.JPG`}
              alt="Dae Hyun Lee"
              width={220}
              height={264}
              className="relative rounded-lg object-cover grayscale transition-[filter] duration-500 hover:grayscale-0"
              priority
            />
          </div>

          <div>
            <div className="space-y-5 text-[15px] leading-[1.8] text-white/70">
              <p>
                I am a Master&apos;s student in Data Science at the University of Washington
                with research interests spanning machine learning and deep learning. My work
                is driven by a long-term goal of becoming a research scientist who develops
                principled learning systems that generalize across domains and scales.
              </p>
              <p>
                Currently, I am conducting research on neuroimaging and cognitive aging,
                focusing on operationalizing cognitive reserve using deep learning on
                structural brain MRI. My pipeline spans 3D CNN-based Alzheimer&apos;s disease
                classification, residual-based cohort identification, and causal graph
                construction.
              </p>
              <p>
                I work primarily in PyTorch and am interested in the intersection of
                representation learning, causal inference, and clinical neuroscience. More
                broadly, I am drawn to problems where rigorous statistical modeling can
                surface structure in high-dimensional biomedical data.
              </p>
            </div>

            <div className="mt-10">
              <ResearchInterests />
            </div>

            <a
              href={`${basePath}/cv.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 border border-accent px-6 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-accent transition-colors hover:bg-accent hover:text-ink-900"
            >
              View my CV
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
