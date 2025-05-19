interface SectionProps {
  title: string;
  text?: string; // make this optional
  italic?: boolean;
}

export default function Section({ title, text = '', italic = false }: SectionProps) {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2 text-yellow-100">{title}</h2>
      <p className={`${italic ? 'italic' : ''} text-yellow-100 leading-relaxed`}>{text}</p>
    </section>
  );
}
