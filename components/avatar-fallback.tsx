type AvatarFallbackProps = {
  name: string;
};

const COLORS = [
  "from-blue-500 to-indigo-500",
  "from-red-500 to-pink-500",
  "from-green-500 to-emerald-500",
  "from-yellow-500 to-orange-500",
  "from-purple-500 to-violet-500",
  "from-teal-500 to-cyan-500",
];

export function AvatarFallback({ name }: AvatarFallbackProps) {
  // İsmin ilk harfi ve soyismin son harfini al
  const initials = name
    .split(" ")
    .map((n, i, arr) =>
      i === 0 ? n[0] : arr.length > 1 ? n[n.length - 1] : ""
    )
    .join("")
    .toUpperCase();

  // İsme göre sabit bir renk seç
  const colorIndex =
    name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    COLORS.length;
  const gradientColor = COLORS[colorIndex];

  return (
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-sm bg-gradient-to-br ${gradientColor}`}
      style={{ boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
    >
      {initials}
    </div>
  );
}
