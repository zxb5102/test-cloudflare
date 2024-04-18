export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div data-test="data-test">{children}</div>
      </body>
    </html>
  );
}
