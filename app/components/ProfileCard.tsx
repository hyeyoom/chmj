import Image from 'next/image';

interface ProfileCardProps {
  name: string;
  role: string;
  imageSrc: string;
  description: string;
  linkedinId?: string;
}

export default function ProfileCard({
  name,
  role,
  imageSrc,
  description,
  linkedinId
}: ProfileCardProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full aspect-square mb-4 border-4 border-green-500">
        <Image
          src={imageSrc}
          alt={`${role} ${name}`}
          fill
          className="object-cover w-full h-full"
          unoptimized
        />
      </div>
      
      <div className="bg-green-500 text-white py-1 px-4 rounded-full mb-3">
        {role}
      </div>
      
      <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--foreground)' }}>{name}</h3>
      
      {linkedinId && (
        <a
          href={`https://linkedin.com/in/${linkedinId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm mb-4"
          style={{ color: 'var(--foreground)' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          @{linkedinId}
        </a>
      )}
      
      <p 
        className="text-center whitespace-pre-line" 
        style={{ color: 'var(--foreground)' }}
      >
        {description}
      </p>
    </div>
  );
} 