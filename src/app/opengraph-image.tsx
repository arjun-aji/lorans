import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = "Loran's Gents Beauty & Make Up Studio - Ramalloor, Ernakulam";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: '#FAF8F5',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: '12px solid #C59842',
          padding: '40px',
          fontFamily: 'serif',
          color: '#1F1F1F',
          textAlign: 'center',
        }}
      >
        <div style={{ color: '#C59842', fontSize: 24, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>
          Ramalloor • Kothamangalam • Ernakulam • Kerala
        </div>
        <div style={{ fontSize: 56, fontWeight: 'bold', marginBottom: 16 }}>
          Loran&apos;s Gents Beauty &amp; Make Up Studio
        </div>
        <div style={{ fontSize: 28, color: '#555555', fontFamily: 'sans-serif', maxWidth: '800px' }}>
          Premium Hair Cutting • Keratin • Hydra Facial • Beard Styling • Groom Makeup
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
