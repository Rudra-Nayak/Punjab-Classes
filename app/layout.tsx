import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://elitejeeclasses.com'),
  title: 'EliteJEE Classes | Best Online JEE Coaching by Ex-ALLEN, AAKASH & BANSAL Faculty',
  description:
    'Crack JEE Mains & Advanced with EliteJEE Classes. Online coaching by Gurwinder Singh Sir — Ex-Senior Faculty at ALLEN, AAKASH & BANSAL with 21+ years of experience. Small batches, personalized mentoring, and 99% success rate. Book your free demo class today!',
  keywords: [
    'JEE coaching online',
    'JEE Mains preparation',
    'JEE Advanced coaching',
    'EliteJEE Classes',
    'online JEE classes',
    'best JEE coaching India',
    'IIT JEE preparation',
    'Class 11 JEE coaching',
    'Class 12 JEE coaching',
    'ALLEN faculty online classes',
    'small batch JEE coaching',
    'Gurwinder Singh JEE coach',
  ],
  authors: [{ name: 'EliteJEE Classes' }],
  creator: 'EliteJEE Classes',
  publisher: 'EliteJEE Classes',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://elitejeeclasses.com',
    siteName: 'EliteJEE Classes',
    title: 'EliteJEE Classes | Best Online JEE Coaching by Ex-ALLEN, AAKASH & BANSAL Faculty',
    description:
      'Crack JEE Mains & Advanced with expert mentoring. 21+ years experience, 1000+ students trained, 99% success rate. Book a free demo class now.',
    images: [
      {
        url: '/hero-classroom.png',
        width: 1200,
        height: 630,
        alt: 'EliteJEE Classes - Premium JEE Coaching',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EliteJEE Classes | Best Online JEE Coaching',
    description:
      'Crack JEE with Ex-ALLEN, AAKASH & BANSAL faculty. 21+ years experience. Book a free demo class today!',
    images: ['/hero-classroom.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0f2240',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <head>
        <link rel="canonical" href="https://elitejeeclasses.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'EliteJEE Classes',
              description:
                'Premier online JEE Mains & Advanced coaching by experienced faculty from ALLEN, AAKASH & BANSAL.',
              url: 'https://elitejeeclasses.com',
              telephone: '+91-98765-43210',
              email: 'info@elitejeeclasses.com',
              foundingDate: '2003',
              founder: {
                '@type': 'Person',
                name: 'Gurwinder Singh',
                jobTitle: 'Senior JEE Coach',
              },
              sameAs: ['https://wa.me/919876543210'],
              offers: {
                '@type': 'Offer',
                name: 'JEE Coaching Classes',
                description:
                  'Online JEE Mains & Advanced classes for Class 11 & 12',
                price: '0',
                priceCurrency: 'INR',
                availability: 'https://schema.org/LimitedAvailability',
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[#F1EDE3] text-[#1B3358]">
        {children}
      </body>
    </html>
  )
}
