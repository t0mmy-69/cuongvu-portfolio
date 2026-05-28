export default function ContactButton() {
  return (
    <a
      href="https://t.me/Cuongvu69"
      target="_blank"
      rel="noreferrer"
      className="rounded-full font-medium uppercase tracking-widest text-white cursor-pointer"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181,1,167,0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid white',
        outlineOffset: '-3px',
        marginBottom: '12px',
        paddingLeft: '4rem',
        paddingRight: '4rem',
        paddingTop: '1.5rem',
        paddingBottom: '1.5rem',
        fontSize: '1.125rem',
        whiteSpace: 'nowrap',
        display: 'inline-block',
      }}
    >
      Contact Me
    </a>
  )
}
