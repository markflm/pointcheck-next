/** @type {import('next').NextConfig} */
const nextConfig = {
  //when strictMode = true, React will render each component twice. it's supposed to help identify bugs. if you're console.logging something and it appears twice in the console, this is why
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
