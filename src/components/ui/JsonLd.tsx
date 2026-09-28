export default function JsonLd({ data }: { data: object }) {
  // Prevent a data value containing `</script>` from ending this script node.
  const serialized = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialized }}
    />
  );
}
