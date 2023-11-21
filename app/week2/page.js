// week2/page.js
import Link from 'next/link';
import StudentInfo from './student-info';

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>

      {/* StudentInfo Component */}
      <div className="mb-8">
        <p>Your Name: Bhavya357</p>
        <p>
          GitHub Repository:{' '}
          {/* Potential issue here */}
          <Link href="https://github.com/Bhavya357/nextjs">
            {/* Ensure there's no <a> tag here */}
            <a target="_blank" rel="noopener noreferrer">
              cprg306assignments
            </a>
          </Link>
        </p>
      </div>

      <div className="grid text-center lg:max-w-5xl lg:w-full lg:grid-cols-4 lg:text-left">
        {/* ... other links ... */}

        {/* Link to Week 2 assignment page */}
        <Link href="/week2" passHref>
          {/* Potential issue here */}
          <a className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Week 2 Assignment{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              View the Week 2 assignment page.
            </p>
          </a>
        </Link>
      </div>

      {/* Render the StudentInfo component */}
      <StudentInfo />
    </main>
  );
}
