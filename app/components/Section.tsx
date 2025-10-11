const Section = ({ id, children }) => (
  <section
    id={id}
    className="min-h-screen w-full flex flex-col items-center justify-center py-20 px-4 md:px-8"
  >
    <div className="max-w-4xl w-full">{children}</div>
  </section>
);

export default Section;