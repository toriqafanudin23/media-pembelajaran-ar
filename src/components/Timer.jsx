import { useState, useEffect } from 'react';

const TimerMundur = ({ durasiAwal = 90 }) => {
  const [waktu, setWaktu] = useState(durasiAwal); // misal 90 detik

  useEffect(() => {
    if (waktu === 0) return;

    const interval = setInterval(() => {
      setWaktu((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [waktu]);

  const menit = Math.floor(waktu / 60);
  const detik = waktu % 60;
  const formatWaktu = `${menit.toString().padStart(2, '0')}:${detik
    .toString()
    .padStart(2, '0')}`;

  return (
    <div>
      <p>Sisa waktu: {formatWaktu}</p>
    </div>
  );
};

export default TimerMundur;
