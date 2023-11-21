// week2/student-info.js
import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p>Your Name: [Your Name]</p>
      <p>
        GitHub Repository:{' '}
        <Link href="[Your GitHub Repository Link]">
          <a target="_blank" rel="noopener noreferrer">
            [Your GitHub Repository Name]
          </a>
        </Link>
      </p>
    </div>
  );
}
