interface DirectionCardProps {}

export default function DirectionCard({}: DirectionCardProps) {
  return (
    <div className="flex items-start justify-center mt-2">
      <div className="w-full flex border-2 p-6 border-[#fbd980] rounded-xl bg-transparent">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <p className="text-xl font-bold text-[#d9d6ff]">Casa</p>
            <p className="text-lg font-bold text-[#d9d6ff]">
              Calle 1, Casa 2, Urb. La Floresta
            </p>
            <p className="text-lg font-bold text-[#d9d6ff]">
              Caracas, Venezuela
            </p>
          </div>
          <div className="flex flex-col">
            <button
              type="button"
              className="border-[#fcd980] rounded-xl border-2 text-[#fcd980] p-2 text-sm"
            >
              Cambiar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
