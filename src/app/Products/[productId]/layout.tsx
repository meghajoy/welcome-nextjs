export default function ProductLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
            {children}
            <h4>Featured Products</h4>
        </body>
      </html>
    );
  }