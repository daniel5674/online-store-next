import './globals.css';
import { AppProviders } from './providers';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Online Store',
  description: 'Migrated from React',
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <AppProviders>
          <Navbar />
          <main className="min-h-screen bg-gray-50">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}