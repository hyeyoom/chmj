'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface Photo {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);

  // 현재 선택된 사진
  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  // 모달 열기
  const openModal = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  // 모달 닫기
  const closeModal = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  // 이전 사진으로 이동
  const prevPhoto = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => prev === null ? 0 : (prev === 0 ? photos.length - 1 : prev - 1));
    }
  }, [selectedIndex, photos.length]);

  // 다음 사진으로 이동
  const nextPhoto = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => prev === null ? 0 : (prev === photos.length - 1 ? 0 : prev + 1));
    }
  }, [selectedIndex, photos.length]);

  // 터치 이벤트 핸들러
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // 왼쪽으로 스와이프 - 다음 사진
      nextPhoto();
    } else if (touchStart - touchEnd < -100) {
      // 오른쪽으로 스와이프 - 이전 사진
      prevPhoto();
    }
  };

  // 키보드 이벤트 처리
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      switch (e.key) {
        case 'ArrowLeft':
          prevPhoto();
          break;
        case 'ArrowRight':
          nextPhoto();
          break;
        case 'Escape':
          closeModal();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, prevPhoto, nextPhoto]);

  return (
    <div className="pt-4 md:pt-8">
      <div className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, index) => (
            <div 
              key={photo.id} 
              className="relative aspect-square overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl"
              onClick={() => openModal(index)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover transition-all duration-500 hover:saturate-[1.1]"
              />
              <div 
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent 70%)'
                }}
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={closeModal}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* 이전 버튼 */}
            <button 
              className="absolute left-2 top-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-black/40 text-white rounded-full flex items-center justify-center transform -translate-y-1/2 transition-opacity hover:bg-black/60"
              onClick={prevPhoto}
              aria-label="이전 사진"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
              </svg>
            </button>

            {/* 다음 버튼 */}
            <button 
              className="absolute right-2 top-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-black/40 text-white rounded-full flex items-center justify-center transform -translate-y-1/2 transition-opacity hover:bg-black/60"
              onClick={nextPhoto}
              aria-label="다음 사진"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
              </svg>
            </button>

            {/* 닫기 버튼 */}
            <button 
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center transition-colors hover:bg-black/70"
              onClick={closeModal}
              aria-label="닫기"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </button>

            {/* 슬라이드 인디케이터 */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
              {photos.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === selectedIndex ? 'bg-white w-4' : 'bg-white/50'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(index);
                  }}
                  aria-label={`${index + 1}번 사진으로 이동`}
                />
              ))}
            </div>

            {/* 이미지 */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                sizes="100vw"
                className="object-contain transition-opacity duration-300"
                priority
              />
              <div className="absolute bottom-12 left-0 right-0 text-center text-white/70 text-sm">
                {selectedIndex !== null ? `${selectedIndex + 1} / ${photos.length}` : ''}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 