import useFetch from 'hooks/useFetch'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

function HomePage() {
  const [url, setUrl] = useState('/api/resume')
  const { data, error, loading } = useFetch(url) // fetch data from your data store

  if (error) {
    return <p>There was an error loading your resume data.</p>
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Head>
        <title>Ricardo Guillen I. - Resume/CV</title>
        <meta property='og:title' content='My page title' key='title' />
      </Head>
      <main className='mx-auto w-full max-w-screen-sm xl:max-w-screen-md p-6'>
        <header>
          <nav className='flex list-none text-oswald-500 font-semibold text-base font-oswald mb-4'>
            <li className='after:mx-2 after:text-gray-900 after:relative after:content-["•"]'>
              <Link href={`mailto:${data.email}`} title={data.email}>
                {data.email}
              </Link>
            </li>
            <li className='after:mx-2 after:text-gray-900 after:relative after:content-["•"]'>
              <Link
                href={`tel:+${data.phone.replace(/\D/g, '')}`}
                title={data.phone}
              >
                {data.phone}
              </Link>
            </li>
            <li className='after:mx-2 after:text-gray-900 after:relative after:content-["•"]'>
              <Link href={data.twitter} title='Twitter'>
                Twitter
              </Link>
            </li>
            <li className='after:mx-2 after:text-gray-900 after:relative after:content-["•"]'>
              <Link href={data.linkedin} title='Linkedin'>
                Linkedin
              </Link>
            </li>
            <li className='after:mx-2 after:text-gray-900 after:relative after:content-["•"]'>
              <Link href={data.portfolio} title='Portfolio'>
                Portfolio
              </Link>
            </li>
            <li className='after:mx-2 after:text-gray-900 after:relative '>
              <Link href={data.location.url} title='Location'>
                {data.location.city}, {data.location.state}
              </Link>
            </li>
          </nav>
          <section className='mb-8'>
            <h1 className='font-oswald text-4xl font-medium uppercase mb-2'>
              {data.name}
            </h1>
            <h2 className='font-oswald text-2xl mb-4'>{data.title}</h2>
            <p className='text-base font-lato'>
              <span className='font-lato text-base'>{data.summary}</span>
            </p>
          </section>
        </header>

        <h3 className='mb-2 font-medium text-3xl font-oswald'>
          MOST RECENT WORK EXPERIENCE
        </h3>

        <section className='mb-4 space-y-8'>
          {data.workExperience.map((experience) => (
            <div key={experience.company} className='space-y-2'>
              <section className='mb-4'>
                <h4 className='font-oswald text-oswald-500 text-2xl font-medium mb-2'>
                  {experience.title}{' '}
                  <span className='font-normal'>at {experience.company}</span>
                </h4>
                <p className='font-lato text-base font-bold space-x-2'>
                  <span>
                    {experience.dates} | {`{${experience.location}}`}
                  </span>
                  <span>{`{${experience.company} - ${experience.type}}`}</span>
                </p>
              </section>

              <section className='mb-4'>
                <h5 className='font-lato font-bold text-base'>
                  RESPONSIBILITIES
                </h5>
                <ul className='list-disc ml-8'>
                  {experience.responsibilities.map((responsibility) => (
                    <li className='pl-1' key={responsibility}>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </section>

              <section className='mb-4'>
                <h5 className='font-lato font-bold text-base'>
                  KEY ACCOMPLISHMENTS
                </h5>
                <ul className='list-disc ml-8'>
                  {experience.accomplishments.map((accomplishment) => (
                    <li className='pl-1' key={accomplishment}>
                      {accomplishment}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          ))}
        </section>

        <section className='mb-4'>
          <h3 className='mb-2 font-medium text-xl font-oswald'>TECHNOLOGIES</h3>
          <ul className='grid grid-cols-3 gap-1 text-base font-medium list-disc ml-6'>
            {data.hardskills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className='mb-4'>
          <h3 className='mb-2 font-medium text-xl font-oswald'>SOFT-SKILLS</h3>
          <ul className='grid grid-cols-3 gap-1 text-base font-medium list-disc ml-6'>
            {data.softskills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className='mb-4'>
          <h3 className='mb-2 font-medium text-xl font-oswald'>EDUCATION</h3>
          {data.education.map((education) => (
            <div key={education.career}>
              <h4 className='font-oswald font-semibold text-2xl text-oswald-500 mb-2'>
                {education.career}
                <span className='font-normal'>
                  {' '}
                  at {education.institution} ({education.degree}'s degree)
                </span>
              </h4>
              <p>
                {education.dates} • {education.location}
              </p>
            </div>
          ))}
        </section>

        <section className='mb-4'>
          <h3 className='mb-2 font-medium text-xl font-oswald'>LANGUAGES</h3>
          <ul>
            {data.languages.map((item) => (
              <li key={item.language}>
                {item.language} - {item.level}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}

export default HomePage
