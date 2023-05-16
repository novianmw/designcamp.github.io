import "./globals.css"

export const metadata = {
    title: "DesignCamp | Project using Next JS 13.2",
    description: "Transform your creative vision into reality",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
