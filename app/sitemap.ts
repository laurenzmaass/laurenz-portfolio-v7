import type { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { labEntries } from '@/data/lab'

const baseUrl = 'https://laurenz.work' /* TODO: replace with production URL */

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/work`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/lab`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
  ]

  const projectRoutes = projects.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const labRoutes = labEntries.map((e) => ({
    url: `${baseUrl}/lab/${e.slug}`,
    lastModified: new Date(e.date),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...routes, ...projectRoutes, ...labRoutes]
}
