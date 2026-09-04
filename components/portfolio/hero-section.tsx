import Image from "next/image"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

export function HeroSection() {
  return (
    <header>
      <Image
        src={`${basePath}/images/daehyun.jpg`}
        alt="Dae Hyun Lee"
        width={160}
        height={240}
        className="mb-8"
        priority
      />

      <h1>Dae Hyun Lee</h1>

      <p className="muted mt-3 mb-0">
        UW MSDS &rsquo;27 | RA @ Roy Lab
      </p>

      <p className="mt-6 mb-4">
        hi! I build deep learning models for neuroimaging. At the Roy Lab I work on
        segmentation and classification of structural brain MRI, measuring heterogeneity
        at the patient level.
      </p>

      <p className="mb-0">
        I also build machine learning services end-to-end across a range of domains, from
        raw data to something deployed.
      </p>
    </header>
  )
}
