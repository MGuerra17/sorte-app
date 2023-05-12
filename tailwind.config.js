/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [],
  safelist: [
    'bg-black',
    'bg-white',
    'bg-red-500',
    'bg-orange-400',
    'bg-amber-400',
    'bg-emerald-300',
    'bg-emerald-500',
    'bg-blue-900',
    'bg-blue-700',
    'bg-sky-300',
    'bg-pink-300',
    'bg-purple-600',
    'hover:shadow-black',
    'hover:shadow-white',
    'hover:shadow-red-500',
    'hover:shadow-orange-400',
    'hover:shadow-amber-400',
    'hover:shadow-emerald-300',
    'hover:shadow-green-500',
    'hover:shadow-blue-900',
    'hover:shadow-blue-700',
    'hover:shadow-sky-300',
    'hover:shadow-pink-300',
    'hover:shadow-purple-600',
    'text-black',
    'text-white',
    'text-red-500',
    'text-orange-400',
    'text-amber-400',
    'text-emerald-300',
    'text-green-500',
    'text-blue-900',
    'text-blue-700',
    'text-sky-300',
    'text-pink-300',
    'text-purple-600',
    'fill-current',
    'fill-black',
    'fill-white',
    'fill-red-500',
    'fill-orange-400',
    'fill-amber-400',
    'fill-emerald-300',
    'fill-green-500',
    'fill-blue-900',
    'fill-blue-700',
    'fill-sky-300',
    'fill-pink-300',
    'fill-purple-600',
    'stroke-current',
    'stroke-black',
    'stroke-white',
    'stroke-red-500',
    'stroke-orange-400',
    'stroke-amber-400',
    'stroke-emerald-300',
    'stroke-green-500',
    'stroke-blue-900',
    'stroke-blue-700',
    'stroke-sky-300',
    'stroke-pink-300',
    'stroke-purple-600'
  ]
}
