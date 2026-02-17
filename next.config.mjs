/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "dhl-website"
const basePath = process.env.NODE_ENV === "production" ? `/${repoName}` : ""
const assetPrefix = process.env.NODE_ENV === "production" ? `/${repoName}/` : ""

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
