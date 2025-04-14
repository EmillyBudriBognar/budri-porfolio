/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const repo = 'budri-portfolio'; // Nome do repositório GitHub

const nextConfig = {
  output: 'export', // necessário para gerar arquivos estáticos com next export
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
};

export default nextConfig;
