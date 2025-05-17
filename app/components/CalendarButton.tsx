'use client';

export default function CalendarButton() {
  const handleAddToCalendar = () => {
    const title = encodeURIComponent("우리 결혼식 💒");
    const location = encodeURIComponent("아름다운 웨딩홀 - 서울특별시 중구 세종대로 110");
    const details = encodeURIComponent("함께해 주세요!");
    const dates = "20251101T043000Z/20251101T063000Z"; // UTC 기준

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleAddToCalendar}
      className="w-full py-4 px-4 mt-8 transition-all flex items-center justify-center gap-2 hover:opacity-90 font-light tracking-wider text-lg"
      style={{ 
        background: 'var(--button-background)',
        color: 'var(--button-text)'
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      Google 캘린더에 추가
    </button>
  );
} 