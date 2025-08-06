import { useEffect } from 'react';

export default function StudioPage() {
  useEffect(() => {
    // Перенаправляем на официальную Studio
    window.location.href = 'https://sanity.io/manage';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl mb-4">Перенаправление в Sanity Studio...</h1>
        <p className="text-gray-400 mb-6">
          Если перенаправление не работает, перейдите вручную:
        </p>
        <a 
          href="https://sanity.io/manage" 
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg inline-block transition-colors"
        >
          Открыть Sanity Studio
        </a>
      </div>
    </div>
  );
}