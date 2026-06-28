export default function Footer() {
  return (
    <footer className="hairline py-12">
      <div className="container-x flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-serif text-lg tracking-widest2 text-stone-800">
            泉 <span className="ml-1 text-base tracking-[0.3em]">IZUMI</span>
          </p>
          <p className="mt-2 text-sm text-stone-500">
            Biophilic bathroom retrofit. Made with stone, water, and patience.
          </p>
        </div>
        <p className="text-xs text-stone-400">
          © {new Date().getFullYear()} IZUMI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
