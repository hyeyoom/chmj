# 나만을 위한 청첩장 서비스 IA (Information Architecture)

## 목차
1. 사이트 맵 (Site Map)  
2. 사용자 흐름 (User Flow)  
3. 내비게이션 구조 (Navigation Structure)  
4. 페이지 계층 구조 (Page Hierarchy)  
5. 콘텐츠 구성 (Content Organization)  
6. 상호작용 패턴 (Interaction Patterns)  
7. URL 구조 (URL Structure)  
8. 컴포넌트 계층 구조 (Component Hierarchy)

---

## 1. 사이트 맵 (Site Map)

```text
/
├── [Main] 청첩장 페이지
│   ├── 식장 정보
│   ├── 인사말
│   ├── 부부/혼주 정보
│   ├── 계좌 정보
│   └── 참석 여부 응답 폼
│
└── /admin
    └── 참석 응답 리스트 확인
```

---

## 2. 사용자 흐름 (User Flow)

### 방문자(지인)

1. `/` 접속
2. 식장 위치, 인사말, 계좌 정보 확인
3. 참석 여부 응답 폼 제출

### 관리자(나)

1. `/admin` 접속
2. Supabase에서 응답 목록 확인

---

## 3. 내비게이션 구조 (Navigation Structure)

* 전통적인 내비게이션 메뉴 없음
* **섹션 기반 자연 스크롤 이동**
* **모바일 중심 단일 페이지 흐름**

---

## 4. 페이지 계층 구조 (Page Hierarchy)

| 우선순위 | 경로       | 목적                      |
| ---- | -------- | ----------------------- |
| 1    | `/`      | 청첩장 메인 (유일한 공개 콘텐츠)     |
| 2    | `/admin` | RSVP 응답 확인용 비공개 관리자 페이지 |

---

## 5. 콘텐츠 구성 (Content Organization)

### `/` (청첩장 페이지)

| 섹션       | 내용                   |
| -------- | -------------------- |
| Hero     | 커버 이미지 또는 타이틀, 결혼 날짜 |
| 인사말      | 고정 문구 또는 마크다운 기반     |
| 위치       | 주소 + 지도 iframe       |
| 부부/혼주 정보 | 이름, 연락처              |
| 계좌 정보    | 계좌번호 + 복사 버튼         |
| 참석 여부 응답 | 이름 입력 + 참석 여부 + 메시지  |

---

## 6. 상호작용 패턴 (Interaction Patterns)

| 요소     | 패턴                          | 접근성 고려            |
| ------ | --------------------------- | ----------------- |
| RSVP 폼 | 입력 → Supabase 저장            | 오류 메시지, 키보드 접근 지원 |
| 계좌 복사  | 버튼 클릭 → 클립보드 복사             | 시각적 피드백 제공        |
| 지도 보기  | 외부 지도 링크 or embedded iframe | 모바일 확대 대응         |
| 반응형 UI | 세로 스크롤 기반 섹션 구분             | 모바일 퍼스트 설계        |

---

## 7. URL 구조 (URL Structure)

| 경로       | 설명     | SEO 정책                      |
| -------- | ------ | --------------------------- |
| `/`      | 청첩장 메인 | `index`, `og:title` 등 메타 포함 |
| `/admin` | 응답 확인용 | `noindex`, 인증 없음 또는 제한 접근   |

---

## 8. 컴포넌트 계층 구조 (Component Hierarchy)

### `/` 페이지 구성

* `<HeaderSection />`
* `<GreetingSection />`
* `<LocationSection />`
* `<ContactSection />`
* `<AccountSection />`
* `<RSVPForm />`
* `<Footer />`

### `/admin` 페이지 구성

* `<AdminLayout />`

  * `<RSVPTable />`
  * `<DownloadCSVButton />` (선택)

---

**요약**

* 내비게이션 없음 → 섹션 기반 스크롤 UX
* 페이지는 `/`와 `/admin` 단 두 개
* 전 구성은 단일 사용자/단일 콘텐츠 전제
* 정적 자원 중심 + Supabase 연동 최소화

---
