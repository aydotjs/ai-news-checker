import { LoadingSpinner, NewsAnalyzer } from '@/components'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        News Analysis and Fact-Checking Engine
      </h1>
      <Suspense fallback={<LoadingSpinner />}>
        <NewsAnalyzer />
      </Suspense>
    </main>
  )
}
