export default function Footer() {
  return (
    <footer className="py-10 mt-10 border-t bg-cream/60">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-sm">© {new Date().getFullYear()} Aaradhya Yoga Center</div>
        <div className="text-sm">Made with ♥ in Pune</div>
      </div>
    </footer>
  )
}
