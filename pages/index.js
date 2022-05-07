import Head from 'next/head'
import content from "../content.json"



export default function Home({ content }) {
  const { name, articles, socials } = content

  const Cards = articles.map((content) => {
    const { id, type, title, link, imgSrc, summary, createdOn, download } = content
    const fullImgSrc = `/articles${imgSrc}`
    const key = `article ${id}`
    return (
      <a href={link} download={!!download ? download : null } key={key} className="w-96 mx-auto bg-white rounded-xl overflow-hidden ">
        <img className="h-48 w-full object-cover " src={fullImgSrc} alt={title} />
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{type}</div>
          {!!createdOn ? <div className='text-sm pt-1'>{createdOn}</div> : null }
          <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{title}</div>
          {!!summary ? <p className="mt-2 text-slate-500">{summary}</p> : null}
        </div>
      </a>)
  })

  const SocialLinks = socials.map((socialObj) => {
    const { id, company, link } = socialObj

    const key = `social link ${id}`

    return (
      <li key = {key}>
        <a href = {link}>{company}</a>
      </li>
    )
  })


  return (
    <div>
      <Head>
        <title>{name} 🎭</title>
        <meta charSet="utf-8" />
        <meta name="description" content="A page about Lincoln Sorscher: A comedian, writer, and enviromentalist." />
        <meta name="og:site_name" content={name} />
        <meta name="keywords" content="Lincoln Sorcher, Comedian, Writer, Enviromentalist, Enviroment, Enviromental Communication"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-gradient-to-b from-blue-900 to-black ">
        <div className="container mx-auto p-2 pt-20">
          <h1 className="text-center text-3xl font-bold text-white">
            {name}
          </h1>
          <nav className='text-center text-slate-200 p-2 w-full'>
            <ul className='flex justify-center space-x-8 w-full'>
              {SocialLinks}
            </ul>
          </nav>
          <div className="flex flex-wrap  gap-20 pt-20 pb-20 justify-evenly justify-items-center items-center">
            <div className="text-center text-white space-y-2 ">
              <p className="content-center">
                Lincoln is a writer, a comedian, a climate communicator, an origamist and an amateur competitive eater.
              </p>
              <p>
                This website is a(n already out of date) list of what he has created.
              </p>
              <p>
                Although not made by Lincoln, this site was created with his aquiecense.
              </p>
            </div>
            <img className="mx-autos h-96" src={"/Crane.svg"} alt="Issa Crane" />
          </div>
          <div className="flex flex-wrap gap-24 pb-20">
            {Cards}
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      content,
    },
  }
}

