import { useQRCode } from "next-qrcode"

export const QrCode = () => {
  const { Canvas } = useQRCode()

  return (
    <div className="align-center flex justify-center">
      <Canvas
        text={"https://github.com/bunlong/next-qrcode"}
        options={{
          level: "M",
          margin: 3,
          scale: 4,
          width: 200,
          color: {
            dark: "#010599FF",
            light: "#FFBF60FF",
          },
        }}
      />
    </div>
  )
}
