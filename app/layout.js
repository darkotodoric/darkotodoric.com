import "./globals.css";

export const metadata = {
  title: "Darko Todorić",
  description: "My homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
