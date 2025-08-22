export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-2xl font-semibold">Page Not Found</h1>
  <p className="text-sm text-gray-500">The page you&apos;re looking for doesn&apos;t exist.</p>
      <a href="/" className="text-primary underline">Return Home</a>
    </div>
  )
}
