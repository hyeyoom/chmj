// 이벤트 핸들러 전달 없이 서버 컴포넌트로 변경
import SimpleCalendar from './SimpleCalendar';

export default function CalendarSection() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-8 md:pb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: 'var(--foreground)' }}>
        결혼식 일정
      </h2>
      
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        <div className="flex-1 mb-10 lg:mb-0">
          <div className="text-center lg:text-left">
            <p className="text-2xl mb-3" style={{ color: 'var(--foreground)' }}>2025년 11월 1일 토요일</p>
            <p className="text-xl mb-5" style={{ color: 'var(--foreground)' }}>오후 1시 30분</p>
            <div className="h-px w-20 mx-auto lg:mx-0 opacity-50 my-8" style={{ background: 'var(--foreground)' }}></div>
            <p className="text-lg opacity-80" style={{ color: 'var(--foreground)' }}>
              소중한 분들과 함께하는<br />
              저희 결혼식에 초대합니다.
            </p>
          </div>
        </div>
        
        <div className="flex-1 w-full">
          <div className="w-full md:max-w-md lg:max-w-lg mx-auto md:px-8">
            <SimpleCalendar 
              year={2025}
              month={10}
              markedDay={1}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
