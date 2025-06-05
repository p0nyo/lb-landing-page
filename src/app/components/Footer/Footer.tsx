export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 flex">
        {/* Logo */}
        <div className="flex-1 flex justify-start">
          <p>Left content</p>
        </div>

        {/* NavBar */}
        <div className="flex-1 flex justify-center">
          <p>Middle content</p>
        </div>

        {/* Social Icons */}
        <div className="flex-1 flex justify-end">
          <p>Right content</p>
        </div>
      </div>
    </footer>
  );
}
