import Link from "next/link";

export default function Breadcrumbs({ breadcrumbs }) {
  return (
    <nav>
      {breadcrumbs.map((b, i) => (
        <span key={i}>
          {b.active ? (
            <strong>{b.label}</strong>
          ) : (
            <Link href={b.href}>{b.label}</Link>
          )}
          {i < breadcrumbs.length - 1 && " / "}
        </span>
      ))}
    </nav>
  );
}