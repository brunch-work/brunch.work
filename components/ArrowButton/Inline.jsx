export default function Inline({ text, link, isSmall }) {
  return (
    <a className={`inline-link ${isSmall && "small"}`} href={link} target="_blank">
      <span>{text}</span>
      <div className="inline-link__box">
        <svg
            className="arrow arrow--1"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            id="Vector"
            d="M17.9922 0.00978898L18 14.7501H15.5253L15.5214 4.36785L1.88732 18L0 16.1107L13.6341 2.48053L3.22449 2.50402L3.19709 0L17.9922 0.00978898Z"
            fill="#D7D2CB"
            />
        </svg>
        <svg
            className="arrow arrow--2"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            id="Vector"
            d="M17.9922 0.00978898L18 14.7501H15.5253L15.5214 4.36785L1.88732 18L0 16.1107L13.6341 2.48053L3.22449 2.50402L3.19709 0L17.9922 0.00978898Z"
            fill="#D7D2CB"
            />
        </svg>

      </div>
    </a>
  );
}
