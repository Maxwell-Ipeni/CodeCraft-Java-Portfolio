import Link from "next/link"
import { Mail, Instagram, Music } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/mg-logo-main.jpg"
                alt="MG Creatives Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">MG Creatives</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400">Where Robust Back-End Meets Seamless Front-End.</p>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              Professional Java fullstack web development and graphic design services for modern businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Services</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>Web Development</li>
              <li>Graphic Design</li>
              <li>Website Maintenance</li>
              <li>Logo Design</li>
              <li>Print Design</li>
              <li>UI/UX Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Connect</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-500 dark:text-gray-500" />
                <a
                  href="mailto:your.JavafullstackDevMax@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  JavafullstackDevMax@gmail.com
                </a>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://@MG-Dev/@MG-Dev"
                  target="_blank"
                  rel="Max"
                  className="text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  <Music className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/MG-Dev"
                  target="_blank"
                  rel="Max"
                  className="text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="mailto:your.JavafullstackDevMax@gmail.com"
                  className="text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} MG Creatives. Where Robust Back-End Meets Seamless Front-End.
          </p>
        </div>
      </div>
    </footer>
  )
}
