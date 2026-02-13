export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Naoko Sasaki. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
