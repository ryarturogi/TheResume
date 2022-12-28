import useFetch from 'hooks/useFetch';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

function HomePage() {
  const [url] = useState('/api/resume');
  const { data, error, loading } = useFetch(url); // fetch data from your data store

  if (error) {
    return <p>There was an error loading your resume data.</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Head>
        <title>Ricardo Guillen I. - Resume/CV</title>
        <meta content="My page title" key="title" property="og:title" />
      </Head>
      <main className="w-full max-w-screen-sm p-6 mx-auto xl:max-w-screen-md">
        <header>
          <nav className="flex mb-4 text-base font-semibold list-none text-oswald-500 font-oswald">
            <li className='after:mx-2 after:text-gray-900 after:relative after:content-["•"]'>
              <Link href={`mailto:${data.email}`} title={data.email}>
                {data.email}
              </Link>
            </li>
            <li className='after:mx-2 after:text-gray-900 after:relative after:content-["•"]'>
              <Link href={`tel:+${data.phone.replace(/\D/g, '')}`} title={data.phone}>
                {data.phone}
              </Link>
            </li>
            <li className='after:mx-2 after:text-gray-900 after:relative after:content-["•"]'>
              <Link href={data.twitter} title="Twitter">
                Twitter
              </Link>
            </li>
            <li className='after:mx-2 after:text-gray-900 after:relative after:content-["•"]'>
              <Link href={data.linkedin} title="Linkedin">
                Linkedin
              </Link>
            </li>
            <li className='after:mx-2 after:text-gray-900 after:relative after:content-["•"]'>
              <Link href={data.portfolio} title="Portfolio">
                Portfolio
              </Link>
            </li>
            <li className="after:mx-2 after:text-gray-900 after:relative ">
              <Link href={data.location.url} title="Location">
                {data.location.city}, {data.location.state}
              </Link>
            </li>
          </nav>
          <section className="mb-8">
            <h1 className="mb-2 text-4xl font-medium uppercase font-oswald">{data.name}</h1>
            <h2 className="mb-4 text-2xl font-oswald">{data.title}</h2>
            <p className="text-base font-lato">
              <span className="text-base font-lato">{data.summary}</span>
            </p>
          </section>
        </header>

        <h3 className="mb-2 text-3xl font-medium font-oswald">MOST RECENT WORK EXPERIENCE</h3>

        <section className="mb-4 space-y-8">
          {data.workExperience.map((experience) => (
            <div className="space-y-2" key={experience.company}>
              <section className="mb-4">
                <h4 className="mb-2 text-2xl font-medium font-oswald text-oswald-500">
                  {experience.title} <span className="font-normal">at {experience.company}</span>
                </h4>
                <p className="space-x-2 text-base font-bold font-lato">
                  <span>
                    {experience.dates} | {`{${experience.location}}`}
                  </span>
                  <span>{`{${experience.company} - ${experience.type}}`}</span>
                </p>
              </section>

              <section className="mb-4">
                <h5 className="text-base font-bold font-lato">RESPONSIBILITIES</h5>
                <ul className="ml-8 list-disc">
                  {experience.responsibilities.map((responsibility) => (
                    <li className="pl-1" key={responsibility}>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mb-4">
                <h5 className="text-base font-bold font-lato">KEY ACCOMPLISHMENTS</h5>
                <ul className="ml-8 list-disc">
                  {experience.accomplishments.map((accomplishment) => (
                    <li className="pl-1" key={accomplishment}>
                      {accomplishment}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          ))}
        </section>

        <section className="mb-4">
          <h3 className="mb-2 text-xl font-medium font-oswald">TECHNOLOGIES</h3>
          <ul className="grid grid-cols-3 gap-1 ml-6 text-base font-medium list-disc">
            {data.hardskills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="mb-4">
          <h3 className="mb-2 text-xl font-medium font-oswald">SOFT-SKILLS</h3>
          <ul className="grid grid-cols-3 gap-1 ml-6 text-base font-medium list-disc">
            {data.softskills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="mb-4">
          <h3 className="mb-2 text-xl font-medium font-oswald">EDUCATION</h3>
          {data.education.map((education) => (
            <div key={education.career}>
              <h4 className="mb-2 text-2xl font-semibold font-oswald text-oswald-500">
                {education.career}
                <span className="font-normal">
                  {' '}
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  at {education.institution} ({education.degree}'s degree)
                </span>
              </h4>
              <p>
                {education.dates} • {education.location}
              </p>
            </div>
          ))}
        </section>

        <section className="mb-4">
          <h3 className="mb-2 text-xl font-medium font-oswald">LANGUAGES</h3>
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
  );
}

export default HomePage;
