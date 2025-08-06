export default function FloatingNotes() {
  return (
    <>
      <div className="absolute top-20 left-10 text-accent-orange text-4xl animate-float">♪</div>
      <div className="absolute bottom-20 right-10 text-accent-orange text-3xl animate-float" style={{animationDelay: '1s'}}>♫</div>
      <div className="absolute top-1/3 right-20 text-accent-orange text-2xl animate-float" style={{animationDelay: '2s'}}>♬</div>
    </>
  );
}
