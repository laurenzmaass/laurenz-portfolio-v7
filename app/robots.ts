import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://laurenz.work/sitemap.xml', /* TODO: replace with production URL */
  }
}
