export const metadata = {
  title: "Uptime Status LeonXLAB",
  description: "Monitoring 24/7"
};

export default function RootLayout({children}){
  return (
    <html lang="en">
    <body style={{margin:0,padding:0}}>
      {children}
    </body>
    </html>
  );
}
