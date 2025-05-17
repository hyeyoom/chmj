import StaticMapImage from './StaticMapImage';

interface WeddingSectionProps {
  venueName?: string;
  venueAddress?: string;
  venueDetail?: string;
}

export default function WeddingSection({ 
  venueName = '아름다운 웨딩홀', 
  venueAddress = '서울특별시 중구 세종대로 110',
  venueDetail = '지하철 1호선 시청역 5번 출구에서 도보 3분'
}: WeddingSectionProps) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 h-full flex flex-col justify-center py-6 md:py-0">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center" style={{ color: 'var(--foreground)' }}>
          오시는 길
        </h2>

        {/* 지도를 상단에 배치 */}
        <div className="w-full mb-10">
          <div className="h-72 md:h-80 lg:h-96 w-full">
            <StaticMapImage />
          </div>
        </div>

        {/* 위치 정보를 지도 아래에 배치 */}
        <div className="w-full pb-6 md:pb-0">
          <div className="flex flex-col items-center text-center mb-8">
            <h3 className="text-3xl font-bold mb-4" style={{ color: 'var(--foreground)' }}>{venueName}</h3>
            <p className="text-xl mb-3" style={{ color: 'var(--foreground)' }}>{venueAddress}</p>
            <p className="text-lg mb-6 opacity-80" style={{ color: 'var(--foreground)' }}>{venueDetail}</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-2">
            <a
              href="https://map.naver.com/p/search/서울특별시%20중구%20세종대로%20110"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-6 rounded-md transition-transform hover:translate-y-[-2px]"
              style={{
                background: 'var(--button-background)',
                color: 'var(--button-text)'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              네이버 지도
            </a>
            <a
              href="https://map.kakao.com/link/search/서울특별시%20중구%20세종대로%20110"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-6 rounded-md transition-transform hover:translate-y-[-2px]"
              style={{
                background: 'var(--button-background)',
                color: 'var(--button-text)'
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4" />
              </svg>
              카카오 지도
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
