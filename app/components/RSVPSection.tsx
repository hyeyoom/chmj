'use client';

import { useState } from 'react';

export default function RSVPSection() {
  const [side, setSide] = useState<string | null>(null);
  const [attendance, setAttendance] = useState<string | null>(null);
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  
  // 인원 수 조절 함수
  const adjustCount = (type: 'adult' | 'child', increment: number) => {
    if (type === 'adult') {
      const newCount = Math.max(0, adultCount + increment);
      setAdultCount(newCount);
    } else {
      const newCount = Math.max(0, childCount + increment);
      setChildCount(newCount);
    }
  };

  // 숫자 입력 처리 함수 수정
  const handleCountChange = (type: 'adult' | 'child', value: string) => {
    // 입력이 비어있으면 0으로 설정
    if (value === '') {
      if (type === 'adult') {
        setAdultCount(0);
      } else {
        setChildCount(0);
      }
      return;
    }
    
    // 입력된 문자열을 숫자로 변환 (parseInt는 선행 0을 무시합니다)
    const numValue = parseInt(value);
    
    // 유효한 숫자이고 0 이상인 경우에만 설정
    if (!isNaN(numValue) && numValue >= 0) {
      if (type === 'adult') {
        setAdultCount(numValue);
      } else {
        setChildCount(numValue);
      }
    }
  };

  // 입력 필드 포커스 핸들러 추가
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    // 값이 0인 경우 포커스할 때 입력 필드를 비웁니다
    if (e.target.value === '0') {
      e.target.value = '';
    }
  };

  // 입력 필드 블러 핸들러 추가
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>, type: 'adult' | 'child') => {
    // 입력 필드가 비어 있으면 0으로 설정
    if (e.target.value === '') {
      if (type === 'adult') {
        setAdultCount(0);
      } else {
        setChildCount(0);
      }
    }
  };

  return (
    <form 
      className="backdrop-blur-md bg-opacity-10 p-8 rounded-xl border border-opacity-20"
      style={{
        background: 'var(--card-background)',
        borderColor: 'var(--card-border)',
        color: 'var(--foreground)'
      }}
      onSubmit={(e) => {
        e.preventDefault();
        alert('참석 여부가 제출되었습니다!');
      }}
    >
      {/* 이름 입력 필드 */}
      <div className="mb-6">
        <label htmlFor="name" className="block text-lg font-medium mb-2" style={{ color: 'var(--foreground)' }}>
          이름
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-lg border border-opacity-20 focus:outline-none focus:ring-2 transition-all duration-300"
          style={{
            background: 'var(--input-background)',
            borderColor: 'var(--input-border)',
            color: 'var(--input-text)',
          }}
          placeholder="이름을 입력해주세요"
        />
      </div>

      {/* 전화번호 입력 필드 */}
      <div className="mb-6">
        <label htmlFor="phone" className="block text-lg font-medium mb-2" style={{ color: 'var(--foreground)' }}>
          전화번호
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-3 rounded-lg border border-opacity-20 focus:outline-none focus:ring-2 transition-all duration-300"
          style={{
            background: 'var(--input-background)',
            borderColor: 'var(--input-border)',
            color: 'var(--input-text)',
          }}
          placeholder="010-0000-0000"
        />
      </div>

      {/* 신랑측/신부측 선택 */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-4" style={{ color: 'var(--foreground)' }}>관계</label>
        <div className="grid grid-cols-2 gap-4">
          <button 
            type="button"
            className={`py-4 px-6 rounded-lg border transition-all duration-300 ${side === 'groom' ? 'border-2 font-bold' : 'border-opacity-20'}`}
            style={{
              background: 'var(--input-background)',
              borderColor: side === 'groom' ? 'var(--accent-color)' : 'var(--input-border)',
              color: 'var(--foreground)'
            }}
            onClick={() => setSide('groom')}
          >
            신랑측
          </button>
          
          <button 
            type="button"
            className={`py-4 px-6 rounded-lg border transition-all duration-300 ${side === 'bride' ? 'border-2 font-bold' : 'border-opacity-20'}`}
            style={{
              background: 'var(--input-background)',
              borderColor: side === 'bride' ? 'var(--accent-color)' : 'var(--input-border)',
              color: 'var(--foreground)'
            }}
            onClick={() => setSide('bride')}
          >
            신부측
          </button>
        </div>
        <input type="hidden" name="side" value={side || ''} required />
      </div>

      {/* 참석 여부 선택 */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-4" style={{ color: 'var(--foreground)' }}>참석 여부</label>
        <div className="grid grid-cols-2 gap-4">
          <button 
            type="button"
            className={`py-4 px-6 rounded-lg border transition-all duration-300 ${attendance === 'yes' ? 'border-2 font-bold' : 'border-opacity-20'}`}
            style={{
              background: 'var(--input-background)',
              borderColor: attendance === 'yes' ? 'var(--accent-color)' : 'var(--input-border)',
              color: 'var(--foreground)'
            }}
            onClick={() => setAttendance('yes')}
          >
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--accent-color)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>참석</span>
            </div>
          </button>
          
          <button 
            type="button"
            className={`py-4 px-6 rounded-lg border transition-all duration-300 ${attendance === 'no' ? 'border-2 font-bold' : 'border-opacity-20'}`}
            style={{
              background: 'var(--input-background)',
              borderColor: attendance === 'no' ? 'var(--accent-color)' : 'var(--input-border)',
              color: 'var(--foreground)'
            }}
            onClick={() => setAttendance('no')}
          >
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--accent-color)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>불참석</span>
            </div>
          </button>
        </div>
        <input type="hidden" name="attendance" value={attendance || ''} required />
      </div>
      
      {/* 동반 인원 - 참석 선택 시에만 표시 */}
      {attendance === 'yes' && (
        <div className="mb-6">
          <label className="block text-lg font-medium mb-4" style={{ color: 'var(--foreground)' }}>
            동반 인원
          </label>
          
          {/* 성인 인원 */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-base" style={{ color: 'var(--foreground)' }}>성인</span>
            </div>
            <div className="flex items-center w-full">
              <button 
                type="button"
                className="w-14 h-12 flex items-center justify-center rounded-lg text-xl border border-opacity-20"
                style={{
                  background: 'var(--input-background)',
                  borderColor: 'var(--input-border)',
                  color: 'var(--foreground)'
                }}
                onClick={() => adjustCount('adult', -1)}
                disabled={adultCount <= 0}
              >
                -
              </button>
              <input
                type="number"
                name="adultCount"
                value={adultCount}
                min="0"
                onChange={(e) => handleCountChange('adult', e.target.value)}
                onFocus={(e) => handleFocus(e)}
                onBlur={(e) => handleBlur(e, 'adult')}
                className="flex-1 h-12 mx-2 text-center rounded-lg border border-opacity-20"
                style={{
                  background: 'var(--input-background)',
                  borderColor: 'var(--input-border)',
                  color: 'var(--input-text)',
                }}
              />
              <button 
                type="button"
                className="w-14 h-12 flex items-center justify-center rounded-lg text-xl border border-opacity-20"
                style={{
                  background: 'var(--input-background)',
                  borderColor: 'var(--input-border)',
                  color: 'var(--foreground)'
                }}
                onClick={() => adjustCount('adult', 1)}
              >
                +
              </button>
              <span className="ml-3 text-base" style={{ color: 'var(--foreground)' }}>명</span>
            </div>
          </div>
          
          {/* 아동 인원 */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-base" style={{ color: 'var(--foreground)' }}>아동</span>
            </div>
            <div className="flex items-center w-full">
              <button 
                type="button"
                className="w-14 h-12 flex items-center justify-center rounded-lg text-xl border border-opacity-20"
                style={{
                  background: 'var(--input-background)',
                  borderColor: 'var(--input-border)',
                  color: 'var(--foreground)'
                }}
                onClick={() => adjustCount('child', -1)}
                disabled={childCount <= 0}
              >
                -
              </button>
              <input
                type="number"
                name="childCount"
                value={childCount}
                min="0"
                onChange={(e) => handleCountChange('child', e.target.value)}
                onFocus={(e) => handleFocus(e)}
                onBlur={(e) => handleBlur(e, 'child')}
                className="flex-1 h-12 mx-2 text-center rounded-lg border border-opacity-20"
                style={{
                  background: 'var(--input-background)',
                  borderColor: 'var(--input-border)',
                  color: 'var(--input-text)',
                }}
              />
              <button 
                type="button"
                className="w-14 h-12 flex items-center justify-center rounded-lg text-xl border border-opacity-20"
                style={{
                  background: 'var(--input-background)',
                  borderColor: 'var(--input-border)',
                  color: 'var(--foreground)'
                }}
                onClick={() => adjustCount('child', 1)}
              >
                +
              </button>
              <span className="ml-3 text-base" style={{ color: 'var(--foreground)' }}>명</span>
            </div>
          </div>
        </div>
      )}

      {/* 메시지 입력 필드 */}
      <div className="mb-8">
        <label htmlFor="message" className="block text-lg font-medium mb-2" style={{ color: 'var(--foreground)' }}>
          축하 메시지
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="w-full px-4 py-3 rounded-lg border border-opacity-20 focus:outline-none focus:ring-2 transition-all duration-300"
          style={{
            background: 'var(--input-background)',
            borderColor: 'var(--input-border)',
            color: 'var(--input-text)',
          }}
          placeholder="축하 메시지를 남겨주세요"
        />
      </div>

      {/* 제출 버튼 */}
      <button
        type="submit"
        className="w-full py-4 px-6 rounded-lg text-lg font-medium transition-all duration-300 transform hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-offset-2"
        style={{
          background: 'var(--button-background)',
          color: 'var(--button-text)',
        }}
      >
        <div className="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          참석 여부 제출하기
        </div>
      </button>
    </form>
  );
} 