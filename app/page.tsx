import {Metadata} from 'next'
import Image from 'next/image'
import ThemeToggle from './components/ThemeToggle'
import PhotoGallery from './components/PhotoGallery'
import ProfileCard from './components/ProfileCard'
import WeddingSection from './components/WeddingSection'
import CalendarSection from './components/CalendarSection'
import RSVPSection from './components/RSVPSection'

// 환경 변수 헬퍼 함수
const getEnvVar = (key: string, defaultValue: string): string => {
  return process.env[`NEXT_PUBLIC_${key}`] || defaultValue;
};

export const metadata: Metadata = {
  title: '청첩장',
  description: '우리의 결혼식에 초대합니다',
}

// 사진 데이터 (public/images 폴더에 해당 이미지들이 있다고 가정)
const photos = [
  { id: 1, src: '/images/couple1.jpg', alt: '커플 사진 1', width: 1200, height: 1200 },
  { id: 2, src: '/images/couple2.jpg', alt: '커플 사진 2', width: 1200, height: 1200 },
  { id: 3, src: '/images/couple3.jpg', alt: '커플 사진 3', width: 1200, height: 1200 },
  { id: 4, src: '/images/couple4.jpg', alt: '커플 사진 4', width: 1200, height: 1200 },
  { id: 5, src: '/images/couple5.jpg', alt: '커플 사진 5', width: 1200, height: 1200 },
  { id: 6, src: '/images/couple6.jpg', alt: '커플 사진 6', width: 1200, height: 1200 },
  { id: 7, src: '/images/couple7.jpg', alt: '커플 사진 7', width: 1200, height: 1200 },
  { id: 8, src: '/images/couple8.jpg', alt: '커플 사진 8', width: 1200, height: 1200 },
]

export default function Home() {
  // 환경 변수에서 데이터 가져오기
  const weddingGreeting = getEnvVar('WEDDING_GREETING', '이건 placeholder에요. 이걸 보고 있다면 알려주세요.');
  const weddingDate = getEnvVar('WEDDING_DATE', '2025년 11월 01일');
  const groomName = getEnvVar('GROOM_NAME', '원신랑');
  const brideName = getEnvVar('BRIDE_NAME', '강신부');
  const venueName = getEnvVar('VENUE_NAME', '아름다운 웨딩홀');
  const venueAddress = getEnvVar('VENUE_ADDRESS', '서울특별시 중구 세종대로 110');
  const venueDetail = getEnvVar('VENUE_DETAIL', '지하철 1호선 시청역 5번 출구에서 도보 3분');
  const greetingMessage = getEnvVar('GREETING_MESSAGE', '저희 두 사람이 결혼합니다.\n소중한 분들을 모시고 축하의 자리를 마련하고자 합니다.\n바쁘시더라도 참석하시어 축하해 주시면 감사하겠습니다.');
  const groomDescription = getEnvVar('GROOM_DESCRIPTION', '이 메세지를 보았나요?\n설정 주입이 안되어 있다는 뜻이에요. 당장 알려줘.');
  const brideDescription = getEnvVar('BRIDE_DESCRIPTION', '이 메세지를 보았나요?\n설정 주입이 안되어 있다는 뜻이에요. 당장 알려줘.');
  const groomLinkedin = getEnvVar('GROOM_LINKEDIN', 'honggildong');
  const groomPhone = getEnvVar('GROOM_PHONE', '010-0000-0000');
  const brideLinkedin = getEnvVar('BRIDE_LINKEDIN', 'kimmieyoung');
  const bridePhone = getEnvVar('BRIDE_PHONE', '010-0000-0000');
  const groomFatherName = getEnvVar('GROOM_FATHER_NAME', '원아빠');
  const groomFatherPhone = getEnvVar('GROOM_FATHER_PHONE', '원아빠번호');
  const groomMotherName = getEnvVar('GROOM_MOTHER_NAME', '원엄마');
  const groomMotherPhone = getEnvVar('GROOM_MOTHER_PHONE', '원엄마번호');
  const brideFatherName = getEnvVar('BRIDE_FATHER_NAME', '강아빠');
  const brideFatherPhone = getEnvVar('BRIDE_FATHER_PHONE', '강아빠번호');
  const brideMotherName = getEnvVar('BRIDE_MOTHER_NAME', '강엄마');
  const brideMotherPhone = getEnvVar('BRIDE_MOTHER_PHONE', '강엄마번호');


  return (
    <main className="relative">
      <ThemeToggle />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/couple6.jpg"
            alt="청첩장 배경"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">{weddingGreeting}</h1>
          <p className="text-2xl mb-8">{weddingDate}</p>
          <p className="text-xl">{groomName} · {brideName}</p>
        </div>
      </section>

      {/* Greeting Section */}
      <section className="relative h-screen flex items-center justify-center" style={{ background: 'var(--background)' }}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b" style={{
            background: `linear-gradient(to bottom, var(--gradient-from), var(--gradient-to))`
          }} />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-8" style={{ color: 'var(--foreground)' }}>인사말</h2>
          <p className="text-xl leading-relaxed" style={{ color: 'var(--foreground)' }}>
            {greetingMessage.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="relative h-screen flex items-center justify-center" style={{ background: 'var(--background)' }}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b" style={{
            background: `linear-gradient(to bottom, var(--gradient-from), var(--gradient-to))`
          }} />
        </div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-2 sm:px-4 py-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4 text-center" style={{ color: 'var(--foreground)' }}>신랑 & 신부</h2>
          <p className="text-center text-sm sm:text-lg mb-6 sm:mb-10" style={{ color: 'var(--foreground)' }}>
            서로를 만나 하나가 되기로 한 저희 두 사람을 소개합니다
          </p>

          <div className="grid grid-cols-2 gap-1 sm:gap-4 md:gap-6">
            <ProfileCard
              name={groomName}
              role="신랑"
              imageSrc="/images/groom.gif"
              description={groomDescription}
              linkedinId={groomLinkedin}
            />

            <ProfileCard
              name={brideName}
              role="신부"
              imageSrc="/images/bride.gif"
              description={brideDescription}
              linkedinId={brideLinkedin}
            />
          </div>
        </div>
      </section>

      {/* 오시는 길 Section */}
      <section className="relative h-screen flex items-center justify-center" style={{ background: 'var(--background-secondary)' }}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b" style={{
            background: `linear-gradient(to bottom, var(--gradient-to), var(--gradient-from))`
          }} />
        </div>
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <WeddingSection
              venueName={venueName}
              venueAddress={venueAddress}
              venueDetail={venueDetail}
          />
        </div>
      </section>

      {/* 결혼식 일정 Section */}
      <section className="relative min-h-screen flex items-center justify-center pb-16 md:pb-24" style={{ background: 'var(--background)' }}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{
            background: `linear-gradient(to bottom, var(--gradient-from), var(--gradient-to))`
          }} />
        </div>
        <div className="relative z-10 w-full flex items-center justify-center">
          <CalendarSection />
        </div>
      </section>

      {/* Photo Gallery Section - 상단 여백 추가 */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-24" style={{ background: 'var(--background-secondary)' }}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b" style={{
            background: `linear-gradient(to bottom, var(--gradient-to), var(--gradient-from))`
          }} />
        </div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-8 md:py-16">
          <h2 className="text-4xl font-bold mb-8 md:mb-12 text-center" style={{ color: 'var(--foreground)' }}>우리의 순간들</h2>
          <p className="text-xl text-center mb-10 md:mb-16" style={{ color: 'var(--foreground)' }}>
            함께한 소중한 추억들을 공유합니다
          </p>
          <PhotoGallery photos={photos} />
        </div>
      </section>

      {/* RSVP Section */}
      <section className="relative h-screen flex items-center justify-center" style={{ background: 'var(--background)' }}>
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{
            background: `linear-gradient(to bottom, var(--gradient-from), var(--gradient-to))`
          }} />
        </div>
        <div className="relative z-10 w-full max-w-xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: 'var(--foreground)' }}>참석 여부</h2>
          
          <RSVPSection />
        </div>
      </section>
    </main>
  )
}
