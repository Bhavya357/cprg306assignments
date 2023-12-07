// pages/work.js
import Link from 'next/link';

function Work() {
  return (
    <div className="container mx-auto my-10 text-center">
      <h1 className="text-4xl font-bold mb-4">My Work</h1>
      <p className="mb-8">
        Here are some of the projects I've had the pleasure of working on:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Project Cards */}
        <div className="border p-4 rounded-md mb-4">
          <h2 className="text-xl font-bold mb-2">Project 1</h2>
          <p>Description of Project 1.</p>
        </div>
        <div className="border p-4 rounded-md mb-4">
          <h2 className="text-xl font-bold mb-2">Project 2</h2>
          <p>Description of Project 2.</p>
        </div>
        <div className="border p-4 rounded-md mb-4">
          <h2 className="text-xl font-bold mb-2">Project 3</h2>
          <p>Description of Project 3.</p>
        </div>
        {/* Add more project cards as needed */}
      </div>
      <p>
        <Link href="/contact"><a className="text-blue-500">Contact Me</a></Link>
      </p>
    </div>
  );
}

export default Work;

  