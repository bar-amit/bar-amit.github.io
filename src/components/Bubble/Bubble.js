import "./Bubble.css";

function Bubble({ color }) {
  const delay = Math.floor(Math.random() * 10);
  const size = Math.floor(Math.random() * 80 + 30);
  const initialLocationX = `${Math.floor(Math.random() * window.innerWidth)}px`;
  const animationClass = "bubble_animation";

  return (
    <svg
      className={`bubble ${animationClass}`}
      width={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ left: initialLocationX, animationDelay: `${delay}s` }}
    >
      <defs>
        <radialGradient
          id={`RadialGradient-${color}`}
          cx="0.25"
          cy="0.25"
          r="1"
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor={color} />
        </radialGradient>
      </defs>
      <circle
        fill={`url(#RadialGradient-${color})`}
        cx={size / 2}
        cy={size / 2}
        r={size / 2}
      ></circle>
    </svg>
  );
}

export default Bubble;
