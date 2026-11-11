import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Orbit AI | Your AI. Your Space. Your Orbit.', description: 'Discover Orbit AI, an Android AI assistant with online conversations and local offline GGUF model support.', openGraph: { title: 'Orbit AI | Your AI. Your Space. Your Orbit.', description: 'Online conversations and private, offline AI experiences.', type: 'website' }, twitter: { card: 'summary_large_image', title: 'Orbit AI | Your AI. Your Space. Your Orbit.', description: 'Your AI. Your Space. Your Orbit.' }, icons: { icon: '/favicon.svg' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
