// pages/about.js
import Link from 'next/link';

function About() {
  return (
    <div className="container mx-auto my-10 text-center">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <p className="mb-8">
        Welcome to my personal space! I'm a passionate developer with expertise in web development.
      </p>
      <p className="mb-8">
        I hold a degree in Computer Science and have gained hands-on experience in building modern and responsive web applications.
      </p>
      <p>
        <Link href="/work"><a className="text-blue-500">See My Work</a></Link>
      </p>
    </div>
  );
}

export default About;
