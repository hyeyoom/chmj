'use client';

interface SimpleCalendarProps {
    year: number;
    month: number; // 0-11 (0:1월, 11:12월)
    markedDay: number;
}

export default function SimpleCalendar({year, month, markedDay}: SimpleCalendarProps) {
    // 월 이름
    const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];

    // 이번 달의 일수
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // 이번 달 1일의 요일 (0: 일요일, 1: 월요일, ..., 6: 토요일)
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    // 달력의 날짜 배열 생성
    const calendarDays = Array(42).fill(null);

    // 달력 날짜 채우기
    for (let i = 0; i < daysInMonth; i++) {
        calendarDays[i + firstDayOfMonth] = i + 1;
    }

    // 달력 주 단위로 분할
    const weeks = [];
    for (let i = 0; i < 6; i++) {
        weeks.push(calendarDays.slice(i * 7, (i + 1) * 7));
    }

    // 마지막 주에 날짜가 없으면 제거
    if (weeks[5].every(day => day === null)) {
        weeks.pop();
    }
    
    // 캘린더 추가 함수
    const handleAddToCalendar = () => {
        const title = encodeURIComponent("우리 결혼식 💒");
        const location = encodeURIComponent("아름다운 웨딩홀 - 서울특별시 중구 세종대로 110");
        const details = encodeURIComponent("함께해 주세요!");
        const dates = "20251101T043000Z/20251101T063000Z"; // UTC 기준

        const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
        window.open(url, "_blank");
    };

    return (
        <div className="w-full max-w-md mx-auto px-4 sm:px-0">
            {/* 년월 표시 - 세련된 타이포그래피 */}
            <div className="text-center mb-12">
                <span className="text-3xl font-light tracking-wider" style={{ color: 'var(--foreground)' }}>
                    {year} {monthNames[month]}
                </span>
            </div>
            
            {/* 메종 마르지엘라 스타일 캘린더 - 격자형 숫자 배열 */}
            <div className="mb-12">
                <div className="grid grid-cols-7 gap-3 md:gap-4">
                    {weeks.flat().map((day, index) => (
                        <div 
                            key={index} 
                            className={`
                                h-10 md:h-12 flex items-center justify-center relative
                                ${day === markedDay ? 'font-bold' : 'font-normal'}
                                ${day === null ? 'invisible' : ''}
                            `}
                        >
                            {day !== null && (
                                <div className="relative">
                                    <span className="text-xl md:text-2xl" style={{ color: 'var(--foreground)' }}>
                                        {day}
                                    </span>
                                    {day === markedDay && (
                                        <div
                                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-9 h-9 md:w-10 md:h-10 rounded-full -z-10"
                                            style={{ 
                                                border: '2px solid var(--accent-color)',
                                                opacity: '0.9'
                                            }}
                                        ></div>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            
            {/* 캘린더 추가 버튼 */}
            <button
                onClick={handleAddToCalendar}
                className="w-full py-4 px-4 transition-all flex items-center justify-center gap-2 hover:opacity-90 font-light tracking-wider text-lg"
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
        </div>
    );
}
